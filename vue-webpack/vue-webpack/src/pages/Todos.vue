<template>
  <div class="todos">
    this is todos
    <router-link to="/"> home </router-link>
    <router-link to="todos"> todos </router-link>
    <h1 class="todos-title">this is todos</h1>
  </div>
</template>

<script>
export default {
  name: 'todos'
}
</script>

<style scoped lang="less">
.todos {
  &-title {
    font-size: 28px;
    color: blue;
  }
}
</style>
