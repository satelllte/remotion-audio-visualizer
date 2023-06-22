import {Config} from 'remotion';
import {enableTailwind} from '@remotion/tailwind';

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(currentConfiguration => enableTailwind(currentConfiguration));
