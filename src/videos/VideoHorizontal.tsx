import {type VideoProps} from './types';
import {AudioTrack, Container, Cover, Title} from './components';
import {useVideoConfig} from 'remotion';

export const VideoHorizontal = ({
	audioFile,
	audioStartFrom,
	coverFile,
	artist,
	track,
	textColor,
}: VideoProps) => {
	const {height} = useVideoConfig();
	const coverSize = Math.round(height * 0.8);
	const trackFontSize = Math.round(height * 0.1);
	const artistFontSize = Math.round(height * 0.075);
	return (
		<>
			<Container>
				<div className='m-[5%] flex gap-[5%]'>
					<Cover file={coverFile} size={coverSize}/>
					<Title
						artist={artist}
						track={track}
						artistFontSize={artistFontSize}
						trackFontSize={trackFontSize}
						color={textColor}
					/>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
