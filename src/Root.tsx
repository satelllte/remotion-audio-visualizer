import {Composition} from 'remotion';
import './style.css';
import {MyComposition} from './Composition';

export const RemotionRoot = () => (
	<Composition
		id='MyComp'
		component={MyComposition}
		durationInFrames={60}
		fps={30}
		width={1280}
		height={720}
	/>
);
