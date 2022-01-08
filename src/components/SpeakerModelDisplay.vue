<template>
    <section id="model-container"></section>
</template>

<script>
export default {
    name: 'SpeakerModelDisplay',
    methods: {
        init: function() {
            const THREE = this.GRAPHICS_LIB.THREE;

            this.scene = new THREE.Scene();
            this.scene.background = null;

            this.pointLight = new THREE.PointLight();
            this.pointLight.position.set(0, 0, -1);
            this.scene.add(this.pointLight);

            this.camera = new THREE.PerspectiveCamera(45, 2, 0.01, 100);
            this.camera.position.set(0, 0.05, -0.3);

            this.renderer = new THREE.WebGLRenderer({
                alpha: true
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.querySelector('#model-container').appendChild(this.renderer.domElement);

            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

            this.gltfLoader = new THREE.GLTFLoader();
            this.gltfLoader.load('https://raw.githubusercontent.com/RunItBack1127/bumbox-cas-website/main/src/assets/models/UE_MEGABOOM.gltf', (speakerModel) => {
                
                const speaker = speakerModel.scene;

                const speakerBBox = new THREE.Box3().setFromObject(speaker);
                const speakerCenter = {
                    x: ( speakerBBox.max.x + speakerBBox.min.x ) / 2,
                    y: ( speakerBBox.max.y + speakerBBox.min.y ) / 2,
                    z: ( speakerBBox.max.z + speakerBBox.min.z ) / 2,                    
                };
                speaker.translateX(-speakerCenter.x);
                speaker.translateY(-speakerCenter.y);
                speaker.translateZ(-speakerCenter.z);

                this.speakerPivot = new THREE.Group();
                this.speakerPivot.add(this.camera);
                this.speakerPivot.add(this.pointLight);

                this.scene.add(this.speakerPivot);

                this.scene.add(speaker);
                this.positionSpeakerCanvas();
            });

            window.addEventListener('resize', () => {
                this.resize();
            });

            window.addEventListener('keypress', (event) => {
                if(event.key === 'a') {
                    this.speakerPivot.rotation.y += 0.25;
                }
            });
        },
        positionSpeakerCanvas: function() {
            document.querySelector('#model-container canvas').style.transform = "translateX(25%)";
        },
        resize: function() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.render(this.scene, this.camera);
        },
        animate: function() {
            requestAnimationFrame(this.animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        }
    },
    mounted() {
        this.init();
        this.animate();
    }
};
</script>

<style scoped>
#model-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
}

/* canvas.speaker-canvas {
    width: 100% !important;
    max-width: 100vw !important;
    height: 100%;
    transform: translateX(25%) !important;
}

@media screen and (max-width: 767px) {
    canvas.speaker-canvas {
        transform: translateX(0);
    }
} */
</style>