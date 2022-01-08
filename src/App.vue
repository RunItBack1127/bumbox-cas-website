<template>
  <site-menu/>
  <speaker-model-display/>
  <customization-controls/>
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
#app {
  
}
</style>
