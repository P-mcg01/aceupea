import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enablePan = false;
  controls.enableDamping = true; //amortiguacion
  controls.enableZoom = false;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
