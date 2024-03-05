import { DefaultLoadingManager } from "three";
import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";

import { loadModel } from "./components/model/model.js";

let camera, renderer, scene, loop, controls;

class World {
  constructor(container) {
    this.loader();
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);

    container.append(renderer.domElement); // añadir el canvas al DOM

    loop.updatables.push(controls);
    const resizer = new Resizer(container, camera, renderer);
  }

  async init(modelName) {
    const model = await loadModel(modelName);
    controls.target.copy(model.position);

    if (model.tick != null) {
      loop.updatables.push(model);
    }
    scene.add(model);
  }

  loader() {
    const loadingBarElement = document.querySelector(".loader__bar");
    const loader = document.querySelector(".loader");

    DefaultLoadingManager.onLoad = () => {
      loader.classList.add("loader--hide");
    };
    DefaultLoadingManager.onProgress = (url, loaded, total) => {
      const progress = loaded / total;
      loadingBarElement.style.transform = `scale(${progress})`;
    };
  }

  /** Dibuja un solo frame */
  render() {
    renderer.render(scene, camera);
  }

  /** Comienza el loop (Genera un flujo de frames) */
  start() {
    loop.start();
  }

  /** Detiene el loop */
  stop() {
    loop.stop();
  }
}

export { World };
