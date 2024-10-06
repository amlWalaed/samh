<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router"

const localePath = useLocalePath()

const navLinks = computed<
  {
    label: string
    to: RouteLocationRaw
  }[]
>(() => {
  return [
    {
      label: "Home",
      to: { name: "index" },
    },
    {
      label: "Promo",
      to: { name: "" },
    },
    {
      label: "My Booking",
      to: { name: "" },
    },
  ]
})
</script>
<template>
  <div>
    <nav class="container flex items-center justify-between gap-3 py-3">
      <AppLogo />
      <ul class="flex items-center gap-3">
        <template v-for="navLink in navLinks" :key="navLink.label">
          <li>
            <NuxtLink :to="localePath(navLink.to)">{{
              navLink.label
            }}</NuxtLink>
          </li>
        </template>
      </ul>
      <Button>Sign in </Button>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
