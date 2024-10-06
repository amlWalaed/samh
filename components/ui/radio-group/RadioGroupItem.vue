<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from "radix-vue"
import { Circle } from "lucide-vue-next"
import { cn } from "@/utils"

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes["class"]; label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
const fieldId = props.id ?? `${useId()}-radio-item`
</script>

<template>
  <div class="flex items-center gap-2">
    <RadioGroupItem
      v-bind="forwardedProps"
      :class="
        cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    >
      <RadioGroupIndicator class="flex items-center justify-center">
        <Circle class="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupIndicator>
    </RadioGroupItem>
    <Label v-if="props.label" :for="fieldId" :label>
      {{ label }}
    </Label>
  </div>
</template>
