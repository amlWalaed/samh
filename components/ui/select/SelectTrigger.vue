<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  useForwardProps,
} from "radix-vue"
import { CaretSortIcon } from "@radix-icons/vue"
import { cn } from "@/utils"

const props = defineProps<
  SelectTriggerProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :dir="$i18n.locale === 'ar' && 'rtl'"
    :class="
      cn(
        'flex h-9 w-full items-center justify-between whitespace-nowrap  border-primary bg-transparent px-3 py-2 text-sm  focus:outline-none focus-visible:border-b-2 focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50 radix-placeholder:text-muted-foreground [&>span]:line-clamp-1',
        props.class
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <CaretSortIcon class="-me-2 size-4 text-muted" />
    </SelectIcon>
  </SelectTrigger>
</template>
