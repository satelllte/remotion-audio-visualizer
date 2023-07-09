import {Composition as RemotionComposition} from 'remotion';
import './style.css';
import {Composition} from './Composition';

export const Root = () => {
	return (
		<>
			<RemotionComposition
				id='video-30fps-720p'
				component={Composition}
				durationInFrames={30 * 2}
				fps={30}
				width={1280}
				height={720}
			/>
			<RemotionComposition
				id='video-60fps-1080p'
				component={Composition}
				durationInFrames={60 * 2}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
