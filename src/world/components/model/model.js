import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./seputModel.js";

const MODELS = {
  robot: "obot_robot.glb",
  laptop: "laptop.glb",
  sphere: "360_sphere_robot.glb",
  tv: "samsung_tv.glb",
};

async function loadModel(modelName) {
  const loader = new GLTFLoader();
  let url = "/src/assets/models/";

  switch (modelName) {
    case "robot":
      url = url.concat(MODELS.robot);
      break;
    case "laptop":
      url = url.concat(MODELS.laptop);
      break;
    case "sphere":
      url = url.concat(MODELS.sphere);
      break;
    case "tv":
      url = url.concat(MODELS.tv);
      break;
  }
  const modelData = await loader.loadAsync(url);
  const model = setupModel(modelData);
  /*if (modelName === "robot") {
    let objetos =
      model.children[0].children[0].children[0].children[0].children;

    objetos[1].removeFromParent();
    objetos[2].removeFromParent();
    model.scale.set(15, 15, 15);
    model.position.set(0, 0, -35);
  }*/
  if (modelName === "laptop") {
    model.scale.set(30, 30, 30);
  } else if (modelName === "tv") {
    model.scale.set(10, 10, 10);
    model.position.set(0, -50, -30);
  } else {
    model.scale.set(25, 25, 25);
  }
  model.position.set(0, 0, -30);

  return model;
}

export { loadModel };
