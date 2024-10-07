<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router"

const localePath = useLocalePath()
const { t } = useI18n()
const navLinks = computed<
  {
    label: string
    to: RouteLocationRaw
  }[]
>(() => {
  return [
    {
      label: t("home"),
      to: { name: "index" },
    },
    {
      label: t("promo"),
      to: { name: "" },
    },
    {
      label: t("my-booking"),
      to: { name: "" },
    },
  ]
})

const footerLinks = computed(() => {
  return [
    {
      label: t("about"),
      subItems: [
        {
          label: t("about-gooseflight"),
        },
        {
          label: t("how-it-works"),
        },
        {
          label: t("blog"),
        },
        {
          label: t("forum"),
        },
      ],
    },
    {
      label: t("support"),
      subItems: [
        {
          label: t("help-center"),
        },
        {
          label: t("contact-us"),
        },
        {
          label: t("privacy-policy"),
        },
        {
          label: t("terms-of-service"),
        },
        {
          label: t("trust-and-safety"),
        },
        {
          label: t("accessibility"),
        },
      ],
    },
    {
      label: t("get-the-app"),
      subItems: [
        {
          label: t("tripma-for-android"),
        },
        {
          label: t("tripma-for-ios"),
        },
        {
          label: t("mobile-site"),
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
      <div class="flex items-center gap-2">
        <AppSwitchLang variant="ghost" />
        <Button>{{ $t("sign-in") }} </Button>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
    <footer class="py-10 bg-white">
      <div class="container grid gap-6 lg:grid-cols-4">
        <AppLogo />
        <template v-for="(group, index) in footerLinks" :key="group.label">
          <div class="space-y-3">
            <p class="text-lg font-bold text-gray-700">{{ group.label }}</p>
            <ul class="space-y-1 text-gray-500">
              <template v-for="item in group.subItems">
                <li>
                  <NuxtLink>{{ item.label }}</NuxtLink>
                </li>
              </template>
              <div class="pt-5 space-y-2 max-w-32">
                <template v-if="index == footerLinks.length - 1">
                  <NuxtImg
                    src="/images/app-store.svg"
                    class="object-cover w-full"
                  />
                  <NuxtImg
                    src="/images/google-play.svg"
                    class="object-cover w-full"
                  />
                </template>
              </div>
            </ul>
          </div>
        </template>
      </div>
    </footer>
  </div>
</template>
