<template>
  <div id="app-invoice">
    <center><h5>Invoice Template</h5></center>
    <div class="row">
      <div class="col col-3">
        <ContentManager />
      </div>
      <div class="col col-9">
        <StyleManager />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ContentManager from "../components/InvoiceModule/ContentManager.vue";
import StyleManager from "../components/InvoiceModule/StyleManager.vue";
export default {
  name: "App",
  components: {
    ContentManager,
    StyleManager,
  },
};
</script>
<style>
#app-invoice{
  height: 100vh;
  overflow: hidden;
  padding:10px
}
.col{
  max-height: 100vh ;
  overflow: hidden;
   /* Hide vertical scrollbar */
  overflow: hidden;
}
</style>
