import './style.css';
import {Composition, staticFile} from 'remotion';
import {VideoHorizontal, VideoVertical, type VideoProps} from './videos';

export function Root() {
  const durationInSeconds = 10;
  return (
    <>
      <Combination
        id='dna'
        durationInSeconds={durationInSeconds}
        audioFile={staticFile('dna.mp3')}
        audioStartFromInSeconds={0}
        coverFile={staticFile('dna.jpeg')}
        artist='Kendrick Lamar'
        track='DNA.'
        textColor='#d91a2a'
        backgroundColor='#0d0d0d'
        waveformColor='#d91a2a'
      />
      <Combination
        id='carbonized'
        durationInSeconds={durationInSeconds}
        audioFile={staticFile('carbonized.mp3')}
        audioStartFromInSeconds={70}
        coverFile={staticFile('carbonized.webp')}
        artist='Northlane'
        track='Carbonized'
        textColor='#99B8BF'
        backgroundColor='#000000'
        waveformColor='#99B8BF'
      />
      <Combination
        id='crush'
        durationInSeconds={durationInSeconds}
        audioFile={staticFile('crush.mp3')}
        audioStartFromInSeconds={109}
        coverFile={staticFile('crush.jpg')}
        artist='Pendulum'
        track='Crush'
        textColor='#078C8C'
        backgroundColor='#0D0D0D'
        waveformColor='#078C8C'
      />
    </>
  );
}

type CombinationProps = Omit<VideoProps, 'audioStartFrom'> & {
  audioStartFromInSeconds: number;
  id: string;
  durationInSeconds: number;
};

function Combination({
  audioStartFromInSeconds,
  id,
  durationInSeconds,
  ...restProps
}: CombinationProps) {
  const resolveForFps = (fps: number) => ({
    fps,
    durationInFrames: durationInSeconds * fps,
    defaultProps: {
      ...restProps,
      audioStartFrom: audioStartFromInSeconds * fps,
    },
  });

  /**
   * To make sure the compositions are 100% FPS & resolution independent, we include their low-res versions here as well.
   * Additionally, it might help with development on slower computers.
   */
  return (
    <>
      <Composition
        id={`${id}-horizontal-60fps-1920x1080`}
        component={VideoHorizontal}
        width={1920}
        height={1080}
        {...resolveForFps(60)}
      />
      <Composition
        id={`${id}-horizontal-50fps-1920x1080`}
        component={VideoHorizontal}
        width={1920}
        height={1080}
        {...resolveForFps(50)}
      />
      <Composition
        id={`${id}-horizontal-30fps-960x540`}
        component={VideoHorizontal}
        width={960}
        height={540}
        {...resolveForFps(30)}
      />
      <Composition
        id={`${id}-vertical-60fps-1080x1920`}
        component={VideoVertical}
        width={1080}
        height={1920}
        {...resolveForFps(60)}
      />
      <Composition
        id={`${id}-vertical-50fps-1080x1920`}
        component={VideoVertical}
        width={1080}
        height={1920}
        {...resolveForFps(50)}
      />
      <Composition
        id={`${id}-vertical-30fps-540x960`}
        component={VideoVertical}
        width={540}
        height={960}
        {...resolveForFps(30)}
      />
    </>
  );
}
