import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Composition = () => {
	const frame = useCurrentFrame();
	return (
		<AbsoluteFill className='flex items-center justify-center bg-black text-4xl text-red-500'>
			{`F ${frame}`}
		</AbsoluteFill>
	);
};
