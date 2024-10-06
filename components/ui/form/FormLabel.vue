<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import type { LabelProps } from "radix-vue"
import { useFormField } from "./useFormField"
import { cn } from "@/utils"
import { Label } from "@/components/ui/label"
import type { ClassValue } from "clsx"

const props = defineProps<
  LabelProps & {
    class?: HTMLAttributes["class"]
    icon?: ClassValue
    value?: string
  }
>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="
      cn(['flex gap-2 items-center', error && 'text-destructive', props.class])
    "
    :for="formItemId"
  >
    <span v-if="icon" :class="cn(['size-5 text-primary', icon])" />
    <slot>
      <span class="first-letter:capitalize" v-if="value || $slots.default">
        {{ value }}
      </span>
    </slot>
  </Label>
</template>
