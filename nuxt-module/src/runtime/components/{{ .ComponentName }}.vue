<template>
  <div class="weburz-module-component">
    <slot>{{ "{{" }} message }}</slot>
  </div>
</template>

<script setup lang="ts">
const message = 'Hello from {{ .PackageName }}'
</script>

<style scoped>
.weburz-module-component {
  display: inline-block;
}
</style>
