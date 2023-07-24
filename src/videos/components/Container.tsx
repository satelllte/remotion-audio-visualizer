import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

const {fontFamily} = loadFont();

type ContainerProps = {
  backgroundColor: string;
  children: React.ReactNode;
};

export function Container({backgroundColor, children}: ContainerProps) {
  return (
    <AbsoluteFill
      style={{fontFamily, backgroundColor}}
      className='bg-black text-white'
    >
      {children}
      <FadeOut />
    </AbsoluteFill>
  );
}

function FadeOut() {
  const frame = useCurrentFrame();
  const {fps, durationInFrames: durationTotal} = useVideoConfig();
  const durationFx = fps;
  const opacity = interpolate(
    frame,
    [durationTotal - durationFx, durationTotal],
    [0, 1],
    {easing: Easing.linear, extrapolateLeft: 'clamp'},
  );
  return <AbsoluteFill className='bg-black' style={{opacity}} />;
}
