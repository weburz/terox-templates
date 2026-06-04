<template>
  <div class="stage">
    <{{ .ComponentName }} />
    <h1>{{ .PackageName }} playground</h1>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  margin: 0;
  height: 100%;
  background: #0a0a0a;
  color: #fff;
  font-family: system-ui, sans-serif;
}
.stage {
  position: relative;
  min-height: 100vh;
  padding: 2rem;
}
</style>
