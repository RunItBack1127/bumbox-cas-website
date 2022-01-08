<template>
  <div id="site-menu-container">
    <site-menu/>
  </div>
  
  <speaker-model-display/>
  
  <section id="site-customization-container">
    <div id="customization-container">
      <customization-controls/>
    </div>
  </section>
</template>

<script>
import SiteMenu from './components/SiteMenu.vue';
import SpeakerModelDisplay from './components/SpeakerModelDisplay.vue';
import CustomizationControls from './components/CustomizationControls.vue';

export default {
  name: 'App',
  components: {
    SiteMenu,
    SpeakerModelDisplay,
    CustomizationControls
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
