"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Index {
    /**
     * Constructor
     */
    constructor() {
        this.cube = new THREE.Mesh();
        this.canvas = document.getElementById("mainCanvas");
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.renderer.shadowMap.enabled = true;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 10000);
        this.camera.position.z = 20;
        this.addCube();
        this.makeRender();
    }
    addCube() {
        return __awaiter(this, void 0, void 0, function* () {
            let geometry = new THREE.BoxGeometry(10, 10, 10);
            let material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
            this.cube = new THREE.Mesh(geometry, material);
            this.cube.castShadow = true;
            this.cube.rotation.y = Math.PI / 4;
            this.scene.add(this.cube);
        });
    }
    makeRender() {
        this.renderer.render(this.scene, this.camera);
        if (this.cube)
            this.cube.rotateY(0.01);
        requestAnimationFrame(this.makeRender.bind(this));
    }
}
let index = new Index();
