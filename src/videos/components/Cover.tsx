import {useMemo} from 'react';
import {Easing, Img, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

type CoverProps = {
	file: string;
	size: number;
};

export function Cover({
	file,
	size,
}: CoverProps) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = interpolate(frame, [0, 2 * fps], [0, 1], {easing: Easing.out(Easing.poly(5)), extrapolateRight: 'clamp'});
	const style = useMemo<React.CSSProperties>(() => ({
		opacity: progress,
		transform: `translateY(${(1 - progress) * 20}%)`,
	}), [progress]);
	return (
		<Img
			src={file}
			width={size}
			height={size}
			style={style}
		/>
	);
}
