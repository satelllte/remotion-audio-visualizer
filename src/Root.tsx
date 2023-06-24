import {Composition as RemotionComposition} from 'remotion';
import './style.css';
import {Composition} from './Composition';

export const Root = () => {
	return (
		<RemotionComposition
			id='Main'
			component={Composition}
			durationInFrames={60}
			fps={30}
			width={1280}
			height={720}
		/>
	);
};
