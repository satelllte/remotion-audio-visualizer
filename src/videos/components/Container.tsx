import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

const {fontFamily} = loadFont();

type ContainerProps = {
	backgroundColor: string;
	children: React.ReactNode;
};

export const Container = ({backgroundColor, children}: ContainerProps) => {
	return (
		<AbsoluteFill style={{fontFamily, backgroundColor}} className='bg-black text-white'>
			{children}
		</AbsoluteFill>
	);
};
