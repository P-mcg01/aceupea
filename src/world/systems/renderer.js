import {
  WebGLRenderer,
  sRGBEncoding,
  ACESFilmicToneMapping,
  Color,
} from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
  });

  renderer.setClearColor(new Color("#000000"), 0.0);
  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 3;

  return renderer;
}

export { createRenderer };
