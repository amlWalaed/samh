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

const footerLinks = computed(() => {
  return [
    {
      label: "About",
      subItems: [
        {
          label: "About GooseFlight",
        },
        {
          label: "How it works",
        },
        {
          label: "Blog",
        },
        {
          label: "Forum",
        },
      ],
    },
    {
      label: "Support",
      subItems: [
        {
          label: "Help Center",
        },
        {
          label: "Contact us",
        },
        {
          label: "Privacy policy",
        },
        {
          label: "Terms of service",
        },
        {
          label: "Trust and safety",
        },
        {
          label: "Accessibility",
        },
      ],
    },
    {
      label: "Get the app",
      subItems: [
        {
          label: "Tripma for Android",
        },
        {
          label: "Tripma for iOS",
        },
        {
          label: "Mobile site",
        },
      ],
    },
  ]
})
</script>
<template>
  <div>
    <nav
      class="container sticky top-0 flex items-center justify-between gap-3 py-3 bg-background"
    >
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
    <footer class="py-6 bg-white">
      <div class="container grid gap-6 lg:grid-cols-4">
        <AppLogo />
        <template v-for="group in footerLinks" :key="group.label">
          <div class="space-y-3">
            <p class="text-lg font-bold text-gray-700">{{ group.label }}</p>
            <ul class="space-y-1 text-gray-500">
              <template v-for="item in group.subItems">
                <li>
                  <NuxtLink>{{ item.label }}</NuxtLink>
                </li>
              </template>
            </ul>
          </div>
        </template>
      </div>
    </footer>
  </div>
</template>
