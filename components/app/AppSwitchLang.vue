<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n"
import { Primitive } from "radix-vue"
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
const switchLocaleAndReload = (locale: LocaleObject) => {
  navigateTo(switchLocalePath(locale.code), {
    replace: true,
    open: {
      target: "_self",
    },
  })
}
</script>

<template>
  <Primitive
    as-child
    @click="switchLocaleAndReload(locale)"
    v-for="locale in availableLocales"
    :key="locale.code"
    :label="locale.code"
    variant="ghost"
  >
    <slot>
      <Button />
    </slot>
  </Primitive>
</template>
