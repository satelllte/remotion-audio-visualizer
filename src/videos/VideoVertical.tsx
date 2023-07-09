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
}: VideoProps) => {
	const {width} = useVideoConfig();
	const coverSize = Math.round(width * 0.8);
	const trackFontSize = Math.round(width * 0.1);
	const artistFontSize = Math.round(width * 0.07);
	return (
		<>
			<Container>
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
