import {Config} from '@remotion/cli/config';
import {enableTailwind} from '@remotion/tailwind';

Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(100);

Config.overrideWebpackConfig((currentConfiguration) =>
  enableTailwind(currentConfiguration),
);
