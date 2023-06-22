import {Config} from 'remotion';
import {enableTailwind} from '@remotion/tailwind'; // eslint-disable-line import/no-extraneous-dependencies

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(currentConfiguration => enableTailwind(currentConfiguration));
