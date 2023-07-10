# Remotion Audio Visualizer

Programmatic minimalistic audio visualizations.

<img width="250" src="./docs/carbonized-vertical-50fps-1080x1920.gif">
<img width="250" src="./docs/carbonized-vertical-50fps-1080x1920.gif">
<img width="250" src="./docs/carbonized-vertical-50fps-1080x1920.gif">
<img src="./docs/dna-horizontal-50fps-1920x1080.gif">
<img src="./docs/crush-horizontal-60fps-1920x1080.png">

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
