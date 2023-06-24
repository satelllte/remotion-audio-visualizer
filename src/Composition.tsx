import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Composition = () => {
	const frame = useCurrentFrame();
	return (
		<AbsoluteFill className='flex items-center bg-black justify-center text-4xl text-red-500'>
			{`F ${frame}`}
		</AbsoluteFill>
	);
};
