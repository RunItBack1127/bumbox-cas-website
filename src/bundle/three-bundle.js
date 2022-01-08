import { Scene, PointLight, PerspectiveCamera, WebGLRenderer, Vector3, Box3, Group } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TWEEN from '@tweenjs/tween.js/dist/tween.esm';

export default {
    THREE: {
        Scene,
        PointLight,
        PerspectiveCamera,
        WebGLRenderer,
        OrbitControls,
        GLTFLoader,
        Vector3,
        Box3,
        Group
    },
    TWEEN
};