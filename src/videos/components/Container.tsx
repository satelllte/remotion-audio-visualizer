import {AbsoluteFill} from 'remotion';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({children}: ContainerProps) => {
	return (
		<AbsoluteFill className='bg-black text-white'>
			{children}
		</AbsoluteFill>
	);
};
