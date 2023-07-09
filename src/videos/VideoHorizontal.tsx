import {type VideoProps} from './types';
import {AudioTrack, Container, Cover} from './components';
import {useVideoConfig} from 'remotion';

export const VideoHorizontal = ({
	audioFile,
	audioStartFrom,
	coverFile,
}: VideoProps) => {
	const {height} = useVideoConfig();
	const coverSize = Math.round(height * 0.8);
	return (
		<>
			<Container>
				<div>
					<Cover file={coverFile} size={coverSize}/>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
