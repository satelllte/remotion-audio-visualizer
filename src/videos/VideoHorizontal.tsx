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
				height={Math.round(height * 0.8)}
				color={waveformColor}
				lineWidth={Math.round(height * 0.0012)}
			/>
		);
	};

	return (
		<>
			<Container backgroundColor={backgroundColor}>
				<div className='absolute inset-0'>
					<div className='absolute inset-x-0 top-0 translate-y-[-52%] opacity-80'>
						{renderWaveform()}
					</div>
					<div className='absolute inset-x-0 bottom-0 translate-y-[52%] opacity-80'>
						{renderWaveform()}
					</div>
				</div>
				<div className='flex items-center justify-between gap-[5%] p-[5%]'>
					<Title
						artist={artist}
						track={track}
						artistFontSize={artistFontSize}
						trackFontSize={trackFontSize}
						color={textColor}
					/>
					<Cover file={coverFile} size={coverSize}/>
				</div>
			</Container>
			<AudioTrack file={audioFile} startFrom={audioStartFrom}/>
		</>
	);
};
