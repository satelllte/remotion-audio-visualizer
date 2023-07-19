import clsx from 'clsx';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

type TitleProps = {
	isCentered?: boolean;
	track: string;
	artist: string;
	trackFontSize: number;
	artistFontSize: number;
	color: string;
};

export function Title({
	isCentered,
	track,
	artist,
	trackFontSize,
	artistFontSize,
	color,
}: TitleProps) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const delay = 0.5 * fps;
	const duration = 1.5 * fps;
	const opacity = interpolate(frame, [delay, delay + duration], [0, 1], {easing: Easing.out(Easing.poly(3)), extrapolateRight: 'clamp'});
	return (
		<div className={clsx(isCentered && 'text-center', 'leading-tight')} style={{color, opacity}}>
			<h1 style={{fontSize: trackFontSize}} className='font-black'>{track}</h1>
			<h2 style={{fontSize: artistFontSize}} className='font-light'>{artist}</h2>
		</div>
	);
}
