import {Audio, interpolate, useVideoConfig} from 'remotion';

type AudioTrackProps = {
  file: string;
  startFrom: number;
};

export function AudioTrack({file, startFrom}: AudioTrackProps) {
  const {fps, durationInFrames} = useVideoConfig();
  const fadeDuration = fps;
  return (
    <Audio
      src={file}
      startFrom={startFrom}
      volume={(frame) =>
        interpolate(
          frame,
          [0, fadeDuration, durationInFrames - fadeDuration, durationInFrames],
          [0, 1, 1, 0],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          },
        )
      }
    />
  );
}
