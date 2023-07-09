import {visualizeAudio, useAudioData, type AudioData} from '@remotion/media-utils';
import {useEffect, useRef} from 'react';
import {Easing, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp} from '../../utils/math';
import {useDelayRender} from '../../hooks';

type WaveformProps = {
	width: number;
	height: number;
	color: string;
	lineWidth: number;
	audioFile: string;
	audioStartFrom: number;
};

export const Waveform = ({
	width,
	height,
	color,
	lineWidth,
	audioFile,
	audioStartFrom,
}: WaveformProps) => {
	const audioData = useAudioData(audioFile);

	if (!audioData) {
		// In development, display red skeleton while audioData is still loading.
		return (
			<div style={{width, height}} className='bg-red-500'/>
		);
	}

	return (
		<div style={{width, height}}>
			<WaveformCanvas
				width={width}
				height={height}
				color={color}
				lineWidth={lineWidth}
				audioData={audioData}
				audioStartFrom={audioStartFrom}
			/>
		</div>
	);
};

type WaveformCanvasProps = Pick<WaveformProps,
| 'width'
| 'height'
| 'color'
| 'lineWidth'
| 'audioStartFrom'
> & {
	audioData: AudioData;
};

const WaveformCanvas = ({
	width,
	height,
	color,
	lineWidth,
	audioStartFrom,
	audioData,
}: WaveformCanvasProps) => {
	const frame = audioStartFrom + useCurrentFrame();
	const {fps} = useVideoConfig();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const frequencyData = visualizeAudio({fps, frame, audioData, numberOfSamples: 512});
	const frequencyDataScaled = scaleFrequencyData(frequencyData);

	const continueRender = useDelayRender();

	useEffect(() => {
		if (!canvasRef.current) {
			throw new TypeError('No canvas attached to canvasRef. Please re-check the implementation.');
		}

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			throw new TypeError('Unable to get CanvasRenderingContext2D for the canvas. Please re-check the implementation.');
		}

		ctx.clearRect(0, 0, width, height);

		fillWaveform(
			ctx,
			width,
			height,
			frequencyDataScaled,
			64, // :visualSamples
			lineWidth,
			color,
			3, // :copies
			Easing.cubic, // :easing
		);

		continueRender();
	}, [
		width,
		height,
		color,
		lineWidth,
		frequencyDataScaled,
		continueRender,
	]);

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
		/>
	);
};

// eslint-disable-next-line no-warning-comments
// TODO: accept params in object
const fillWaveform = (
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
	frequencyData: number[],
	visualSamples: number,
	lineWidth: number,
	color: string,
	copies: number,
	easing: (x: number) => number,
): void => { // eslint-disable-line max-params
	const lines = new Array(copies * 2).fill(null).map(() => {
		return new Path2D();
	});

	for (let i = 0; i < visualSamples; i++) {
		const value = clamp(frequencyData[i], 0, 1);
		const x = Math.round(i * width / (visualSamples - 1));
		lines.forEach((line, index) => {
			const sign = index >= copies ? 1 : -1;
			const scale = scaleAt(index, copies, easing);
			const y = Math.round((height / 2) * (1 + (sign * scale * value)));
			if (i < 1) {
				line.moveTo(x, y);
			} else {
				line.lineTo(x, y);
			}
		});
	}

	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = color;

	lines.forEach((line, index) => {
		const scale = scaleAt(index, copies, easing);
		ctx.lineWidth = Math.round(lineWidth * scale);
		ctx.stroke(line);
	});
};

const scaleAt = (
	index: number,
	copies: number,
	easing: (x: number) => number,
): number => {
	const x = index >= copies
		? (index + 1 - copies) / copies
		: (index + 1) / copies;
	return easing(x);
};

/**
 * Reference:
 * https://www.remotion.dev/docs/visualize-audio#postprocessing-example
 */
const scaleFrequencyData = (frequencyData: number[]): number[] => {
	const dbMin = -100;
	const dbMax = -30;
	return frequencyData.map(value => {
		const db = 50 * Math.log10(value);
		return (db - dbMin) / (dbMax - dbMin);
	});
};
