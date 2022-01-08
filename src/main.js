import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

import THREEJS_BUNDLE from './bundle/three-bundle';
import store from './store/index';

const CREATE_A_SPEAKER_APP = createApp(App);

CREATE_A_SPEAKER_APP.config.globalProperties.GRAPHICS_LIB = THREEJS_BUNDLE;
CREATE_A_SPEAKER_APP.config.globalProperties.$http = axios;

CREATE_A_SPEAKER_APP.use(store).mount('#app');
