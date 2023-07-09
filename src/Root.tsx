import './style.css';
import {Composition, staticFile} from 'remotion';
import {VideoHorizontal, VideoVertical, type VideoProps} from './videos';

export const Root = () => {
	return (
		<Combination
			id='video'
			durationInSeconds={10}
			audioFile={staticFile('dna.mp3')}
			audioStartFromInSeconds={0}
			coverFile={staticFile('dna.jpeg')}
			artist='Kendrick Lamar'
			track='DNA.'
			textColor='#d91a2a'
			backgroundColor='#0d0d0d'
			waveformColor='#d91a2a'
		/>
	);
};

type CombinationProps = Omit<VideoProps, 'audioStartFrom'> & {
	audioStartFromInSeconds: number;
	id: string;
	durationInSeconds: number;
};

const Combination = ({
	audioStartFromInSeconds,
	id,
	durationInSeconds,
	...restProps
}: CombinationProps) => {
	const resolveForFPS = (fps: number) => {
		return {
			fps,
			durationInFrames: durationInSeconds * fps,
			defaultProps: {
				...restProps,
				audioStartFrom: audioStartFromInSeconds * fps,
			},
		};
	};

	/**
	 * To make sure the compositions are 100% FPS & resolution independent, we include its low-res version here.
	 * Additionally, it might help with development on slower computers.
	 */
	return (
		<>
			<Composition
				id={`${id}-horizontal-60fps-1920x1080`}
				component={VideoHorizontal}
				width={1920}
				height={1080}
				{...resolveForFPS(60)}
			/>
			<Composition
				id={`${id}-horizontal-30fps-960x540`}
				component={VideoHorizontal}
				width={960}
				height={540}
				{...resolveForFPS(30)}
			/>
			<Composition
				id={`${id}-vertical-60fps-1080x1920`}
				component={VideoVertical}
				width={1080}
				height={1920}
				{...resolveForFPS(60)}
			/>
			<Composition
				id={`${id}-vertical-30fps-540x960`}
				component={VideoVertical}
				width={540}
				height={960}
				{...resolveForFPS(30)}
			/>
		</>
	);
};
