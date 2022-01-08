<template>
  <header id="site-menu-container">
    <site-menu/>
  </header>

  <section id="speaker-model-container">
    <speaker-model-display/>
  </section>
  
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

header,
section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

header {
  height: 100px;
}

section {
  height: 100%;
}

#site-menu-container {
  z-index: 1000;
}

#site-customization-container {
  z-index: 100;
}

#customization-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
}
</style>
