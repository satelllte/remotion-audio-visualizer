import './style.css';
import {Composition, staticFile} from 'remotion';
import {VideoHorizontal, VideoVertical} from './videos';

export const Root = () => {
	const fps30 = 30;
	const fps60 = 60;
	const durationInSeconds = 10;
	const audioFile = staticFile('dna.mp3');
	const coverFile = staticFile('dna.jpeg');
	const artist = 'Kendrick Lamar';
	const track = 'DNA.';
	const textColor = '#d91a2a';
	return (
		<>
			<Composition
				id='video-horizontal-60fps-1920x1080'
				component={VideoHorizontal}
				fps={fps60}
				durationInFrames={durationInSeconds * fps60}
				width={1920}
				height={1080}
				defaultProps={{
					audioFile,
					audioStartFrom: 0 * fps60,
					coverFile,
					artist,
					track,
					textColor,
				}}
			/>
			{/*
				To make sure the composition is 100% FPS & resolution independent, we include its low-res version here.
				Additionally, it might help with development on slower computers.
			*/}
			<Composition
				id='video-horizontal-30fps-960x540'
				component={VideoHorizontal}
				fps={fps30}
				durationInFrames={durationInSeconds * fps30}
				width={960}
				height={540}
				defaultProps={{
					audioFile,
					audioStartFrom: 0 * fps30,
					coverFile,
					artist,
					track,
					textColor,
				}}
			/>
			<Composition
				id='video-vertical-60fps-1080x1920'
				component={VideoVertical}
				durationInFrames={durationInSeconds * fps60}
				fps={fps60}
				width={1080}
				height={1920}
				defaultProps={{
					audioFile,
					audioStartFrom: 0 * fps60,
					coverFile,
					artist,
					track,
					textColor,
				}}
			/>
			{/*
				To make sure the composition is 100% FPS & resolution independent, we include its low-res version here.
				Additionally, it might help with development on slower computers.
			*/}
			<Composition
				id='video-vertical-30fps-540x960'
				component={VideoVertical}
				fps={fps30}
				durationInFrames={durationInSeconds * fps30}
				width={Math.round(1080 / 2)}
				height={Math.round(1920 / 2)}
				defaultProps={{
					audioFile,
					audioStartFrom: 0 * fps30,
					coverFile,
					artist,
					track,
					textColor,
				}}
			/>
		</>
	);
};
