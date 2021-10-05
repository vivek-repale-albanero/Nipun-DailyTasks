<template>
  <v-app>
    <router-link > Letter</router-link>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
