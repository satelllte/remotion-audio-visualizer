import {useCurrentFrame} from 'remotion';

export const MyComposition = () => {
	const frame = useCurrentFrame();
	return (
		<div>
			{`Frame: ${frame}`}
		</div>
	);
};
