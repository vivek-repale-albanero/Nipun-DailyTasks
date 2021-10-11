<template>
  <div id="app-letter">
    <center><h5>Letter Template</h5></center>
    <div class="row">
      <div class="col col-4">
        <ContentManager />
      </div>
      <div class="col col-8">
        <StyleManager />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ContentManager from "../components/LetterModule/ContentManager.vue";
import StyleManager from "../components/LetterModule/StyleManager.vue";
export default {
  name: "App",
  components: {
    ContentManager,
    StyleManager,
  },
};
</script>
<style>
#app-letter{
  height: 100vh;
  overflow: hidden;
}
.col{
  max-height: 100vh ;
  overflow: hidden;
   /* Hide vertical scrollbar */
  overflow: hidden;
}
</style>
