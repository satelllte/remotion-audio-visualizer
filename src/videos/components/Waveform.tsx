import {useAudioData} from '@remotion/media-utils';

type WaveformProps = {
	width: number;
	height: number;
	color: string;
	audioFile: string;
};

export const Waveform = ({
	width,
	height,
	color,
	audioFile,
}: WaveformProps) => {
	const audioData = useAudioData(audioFile);

	if (!audioData) {
		// In development, display red skeleton while audioData is still loading.
		return (
			<div style={{width, height}} className='bg-red-500'/>
		);
	}

	return (
		<div style={{width, height}} className='bg-green-500'/>
	);
};
