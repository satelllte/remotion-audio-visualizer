import {useCurrentFrame} from 'remotion';

export const MyComposition = () => {
	const frame = useCurrentFrame();
	return (
		<div className='text-red-500 bg-black p-4'>
			{`Frame: ${frame}`}
		</div>
	);
};
