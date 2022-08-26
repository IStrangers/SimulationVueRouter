<script setup>

</script>

<template>
  <RouterView></RouterView>
  <RouterLink to="/">首页</RouterLink>
  <RouterLink to="/about">关于</RouterLink>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
