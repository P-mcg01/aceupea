const setSize = (container, camera, renderer) => {
  // Actualiza: camera
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  // Actualiza: renderer
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

class Resizer {
  constructor(container, camera, renderer) {
    // set initial size
    setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);
    });
  }
}

export { Resizer };
