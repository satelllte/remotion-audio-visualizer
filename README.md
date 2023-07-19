# Remotion Audio Visualizer

Programmatic minimalistic audio visualizations.

## Previews

<p float="left">
  <img width="250" src="./docs/dna-vertical-30fps-540x960.gif">
  <img width="250" src="./docs/carbonized-vertical-30fps-540x960.gif">
  <img width="250" src="./docs/crush-vertical-30fps-540x960.gif">
</p>
<img src="./docs/dna-horizontal-30fps-960x540.gif">
<img src="./docs/carbonized-horizontal-30fps-960x540.gif">
<img src="./docs/crush-horizontal-30fps-960x540.gif">

## Useful to know

This project is using the [Remotion Template](https://github.com/satelllte/remotion-template) with some good defaults that I use for all of my videos. So, check it out and feel free to use it to craft your own videos with Remotion.

## Development

**Install dependencies**

```sh
nvm use
npm ci
```

**Start video preview in development**

```sh
npm run dev
```

**Render video**

```sh
# Available video ID's can be found in src/Root.tsx file
npm run render:mp4 --video=ID
npm run render:gif --video=ID
```

**Test**

```sh
npm run test:lint
npm run test:types
```

**Upgrade dependencies**

```sh
npm run upgrade
```
