import { AnimationMixer } from "three";

function setupModel(data) {
  const model = data.scene;

  if (data.animations != null && data.animations.length !== 0) {
    const clip = data.animations[0];
    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    model.tick = (delta) => mixer.update(delta);
  } else {
    model.tick = (delta) => {
      model.rotateY(delta * 0.3);
    };
  }

  return model;
}

export { setupModel };
