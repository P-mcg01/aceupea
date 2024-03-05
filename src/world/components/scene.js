import { Scene, CubeTextureLoader, sRGBEncoding } from "three";

function createScene() {
  const scene = new Scene();

  /**
   * Mapa de entorno
   */
  const cubeTextureLoader = new CubeTextureLoader();
  const environmentMap = cubeTextureLoader.load([
    "../../../src/assets/textures/environmentMaps/9/nx.png",
    "../../../src/assets/textures/environmentMaps/9/px.png",
    "../../../src/assets/textures/environmentMaps/9/ny.png",
    "../../../src/assets/textures/environmentMaps/9/py.png",
    "../../../src/assets/textures/environmentMaps/9/nz.png",
    "../../../src/assets/textures/environmentMaps/9/pz.png",
  ]);
  environmentMap.encoding = sRGBEncoding;
  scene.environment = environmentMap;

  return scene;
}

export { createScene };
