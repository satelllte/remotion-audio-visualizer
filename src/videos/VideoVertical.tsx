import {type VideoProps} from './types';
import {AudioTrack, Container, Cover, Title, Waveform} from './components';
import {useVideoConfig} from 'remotion';

export function VideoVertical({
  audioFile,
  audioStartFrom,
  coverFile,
  artist,
  track,
  textColor,
  backgroundColor,
  waveformColor,
}: VideoProps) {
  const {width} = useVideoConfig();
  const coverSize = Math.round(width * 0.8);
  const trackFontSize = Math.round(width * 0.104);
  const artistFontSize = Math.round(width * 0.065);
  return (
    <>
      <Container backgroundColor={backgroundColor}>
        <div className='mx-auto my-[10%] mb-[15%]'>
          <Cover file={coverFile} size={coverSize} />
        </div>
        <div className='mb-[18%]'>
          <Title
            isCentered
            artist={artist}
            track={track}
            artistFontSize={artistFontSize}
            trackFontSize={trackFontSize}
            color={textColor}
          />
        </div>
        <Waveform
          audioFile={audioFile}
          audioStartFrom={audioStartFrom}
          width={width}
          height={Math.round(width * 0.25)}
          color={waveformColor}
          lineWidth={Math.round(width * 0.002)}
        />
      </Container>
      <AudioTrack file={audioFile} startFrom={audioStartFrom} />
    </>
  );
}
