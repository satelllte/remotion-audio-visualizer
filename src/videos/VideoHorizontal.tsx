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
	const {width, height} = useVideoConfig();
	const coverSize = Math.round(height * 0.8);
	const trackFontSize = Math.round(height * 0.1);
	const artistFontSize = Math.round(height * 0.075);

	const renderWaveform = () => {
		return (
			<Waveform
				audioFile={audioFile}
				audioStartFrom={audioStartFrom}
				width={Math.round(width)}
				height={Math.round(height * 0.5)}
				color={waveformColor}
				lineWidth={Math.round(height * 0.0005)}
			/>
		);
	};

	return (
		<>
			<Container backgroundColor={backgroundColor}>
				<div className='relative flex gap-[5%] p-[5%]'>
					<Cover file={coverFile} size={coverSize}/>
					<Title
						artist={artist}
						track={track}
						artistFontSize={artistFontSize}
						trackFontSize={trackFontSize}
						color={textColor}
					/>
					<div className='absolute inset-x-0 bottom-0'>
						{renderWaveform()}
					</div>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
