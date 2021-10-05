<template>
  <v-card>
         <v-expansion-panels focusable>
    <v-expansion-panel>
      <v-expansion-panel-header>From</v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-text-field v-model="From"></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>To</v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-text-field ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Subject</v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-text-field ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Content</v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-text-field ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>