<template>
  <v-card>
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>From</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field v-model="From" @keyup="eventForm(From)"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>To</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field v-model="To" @keyup="eventTo(To)"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Subject</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="Subject"
            @keyup="eventSubject(Subject)"
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Content</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="Content"
            @keyup="eventContent(Subject)"
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import Vue from "vue";
import vmx from "../../../store/store.vuex";
import Component from "vue-class-component";
@Component
export default class extends Vue {
  data = vmx.user;
  From = "";
  To = "";
  Content = "";
  Subject = "";
  eventForm(From) {
    this.data.dataFromInput(From);
  }
  eventTo(To) {
    this.data.dataToInput(To);
  }
  eventSubject(Subject) {
    this.data.dataSubjectInput(Subject);
  }
  eventContent(Content) {
    this.data.dataContentInput(Content);
  }
}
</script>

<style>
</style>