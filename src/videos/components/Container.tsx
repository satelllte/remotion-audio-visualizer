import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Inter';

const {fontFamily} = loadFont();
const style: React.CSSProperties = {fontFamily};

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({children}: ContainerProps) => {
	return (
		<AbsoluteFill style={style} className='bg-black text-white'>
			{children}
		</AbsoluteFill>
	);
};
