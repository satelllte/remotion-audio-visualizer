import {type VideoProps} from './types';
import {AudioTrack, Container, Cover, Title, Waveform} from './components';
import {useVideoConfig} from 'remotion';

export const VideoHorizontal = ({
	audioFile,
	audioStartFrom,
	coverFile,
	artist,
	track,
	textColor,
	backgroundColor,
	waveformColor,
}: VideoProps) => {
	const {height} = useVideoConfig();
	const coverSize = Math.round(height * 0.8);
	const trackFontSize = Math.round(height * 0.1);
	const artistFontSize = Math.round(height * 0.075);
	return (
		<>
			<Container backgroundColor={backgroundColor}>
				<div className='m-[5%] flex gap-[5%]'>
					<Cover file={coverFile} size={coverSize}/>
					<Title
						artist={artist}
						track={track}
						artistFontSize={artistFontSize}
						trackFontSize={trackFontSize}
						color={textColor}
					/>
					{/* eslint-disable-next-line no-warning-comments */}
					{/* TODO: rotate the waveform 90 degrees */}
					<Waveform
						audioFile={audioFile}
						width={height}
						height={Math.round(height * 0.1)}
						color={waveformColor}
					/>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
