<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir"></Html>
  <div>
    <NuxtLoadingIndicator color="hsl(var(--primary) / 1)" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
