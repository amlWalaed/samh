<script setup lang="ts">
import "@vuepic/vue-datepicker/dist/main.css"
import "./input-date.css"
import { ar, enUS } from "date-fns/locale"
import type { VueDatePickerProps, EmitEvents } from "@vuepic/vue-datepicker"
import DatePicker from "@vuepic/vue-datepicker"
const props = withDefaults(defineProps<VueDatePickerProps>(), {
  teleport: "#teleports",
  enableTimePicker: false,
  autoApply: true,
  timePickerInline: true,
})
const emit = defineEmits([
  "update:model-value",
  "update:model-timezone-value",
  "text-submit",
  "closed",
  "cleared",
  "open",
  "focus",
  "blur",
  "internal-model-change",
  "recalculate-position",
  "flow-step",
  "update-month-year",
  "invalid-select",
  "tooltip-open",
  "tooltip-close",
  "invalid-fixed-range",
  "time-picker-open",
  "time-picker-close",
  "am-pm-change",
  "range-start",
  "range-end",
  "date-update",
  "invalid-date",
])

const delegatedProps = computed(() => {
  const { locale, formatLocale, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emit)
const { locale } = useI18n()

// const dayNames = computed(() => {
//   return locale.value === "ar"
//     ? ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
//     : ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
// });
</script>

<template>
  <DatePicker
    :formatLocale="locale === 'ar' ? ar : enUS"
    :locale="locale"
    v-bind="forwarded"
  >
    <template #trigger v-if="$slots.default">
      <slot> </slot>
    </template>
    <template #clear-icon="{ clear }">
      <slot name="clear-icon" :clear="clear" />
    </template>
    <template #input-icon>
      <span />
    </template>
  </DatePicker>
</template>

<style></style>
