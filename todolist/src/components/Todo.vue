<template>
  <div>
    <div :class="{ completed: todo.completed }" @click="toggleTodoStatus">
      {{ todo.title }}
    </div>
    <button class="btn" @click="deleteTodoItem()">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    deleteTodoItem() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    toggleTodoStatus() {
      this.$store.dispatch("toggleTodoStatus", this.todo);
    },
  },
};
</script>

<style scoped>
.completed {
  color: red;
  cursor: pointer;
}
</style>