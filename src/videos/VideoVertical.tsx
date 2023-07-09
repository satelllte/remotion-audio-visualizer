import {type VideoProps} from './types';
import {AudioTrack, Container, Cover, Title} from './components';
import {useVideoConfig} from 'remotion';

export const VideoVertical = ({
	audioFile,
	audioStartFrom,
	coverFile,
	artist,
	track,
	textColor,
	backgroundColor,
}: VideoProps) => {
	const {width} = useVideoConfig();
	const coverSize = Math.round(width * 0.8);
	const trackFontSize = Math.round(width * 0.104);
	const artistFontSize = Math.round(width * 0.065);
	return (
		<>
			<Container backgroundColor={backgroundColor}>
				<div className='mx-auto my-[10%]'>
					<Cover file={coverFile} size={coverSize}/>
				</div>
				<Title
					isCentered
					artist={artist}
					track={track}
					artistFontSize={artistFontSize}
					trackFontSize={trackFontSize}
					color={textColor}
				/>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
