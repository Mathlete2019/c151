AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" }
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: -15, y: 28, z: 15 };
      const rotation = { x: 0, y: 140, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale",{x:23,y:23,z:23})
    }
  });