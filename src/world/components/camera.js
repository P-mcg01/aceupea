import { PerspectiveCamera, Vector3 } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(-25, 12, 0);
  camera.lookAt(new Vector3(0, 0, 0));

  return camera;
}

export { createCamera };
