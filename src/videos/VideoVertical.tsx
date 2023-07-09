import {type VideoProps} from './types';
import {AudioTrack, Container, Cover} from './components';
import {useVideoConfig} from 'remotion';

export const VideoVertical = ({
	audioFile,
	audioStartFrom,
	coverFile,
}: VideoProps) => {
	const {width} = useVideoConfig();
	const coverSize = Math.round(width * 0.8);
	return (
		<>
			<Container>
				<div className='mx-auto'>
					<Cover file={coverFile} size={coverSize}/>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
