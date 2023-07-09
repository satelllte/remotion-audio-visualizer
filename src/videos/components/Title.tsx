import clsx from 'clsx';

type TitleProps = {
	isCentered?: boolean;
	track: string;
	artist: string;
	trackFontSize: number;
	artistFontSize: number;
	color: string;
};

export const Title = ({
	isCentered,
	track,
	artist,
	trackFontSize,
	artistFontSize,
	color,
}: TitleProps) => {
	return (
		<div className={clsx(isCentered && 'text-center')} style={{color}}>
			<h1 style={{fontSize: trackFontSize}} className='font-bold'>{track}</h1>
			<h2 style={{fontSize: artistFontSize}} className='font-light'>{artist}</h2>
		</div>
	);
};
