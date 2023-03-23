class Index{
    private canvas: HTMLCanvasElement;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.Camera;

    private cube: THREE.Mesh = new THREE.Mesh();

    /**
     * Constructor
     */
    constructor()
    {
        this.canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.renderer.shadowMap.enabled = true;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 10000);
        this.camera.position.z = 20;

        this.addCube();
        this.makeRender();
    }

    private async addCube(): Promise<void> {
        let geometry = new THREE.BoxGeometry(10, 10, 10);
        let material = new THREE.MeshBasicMaterial({ color : 0x00FF00 });        
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.castShadow = true;

        this.cube.rotation.y = Math.PI / 4;

        this.scene.add(this.cube);
    }

    private makeRender(): void{
        this.renderer.render(this.scene, this.camera);
        if (this.cube) this.cube.rotateY(0.01);
        requestAnimationFrame(this.makeRender.bind(this));
    }
}

let index: Index = new Index();