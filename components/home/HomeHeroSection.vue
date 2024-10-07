<script setup lang="ts">
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as z from "zod"
import Select from "../ui/select/Select.vue"

useHead({
  link: [
    {
      rel: "preload",
      href: "/images/hero-bg.webp",
      as: "image",
    },
  ],
  title: "Home",
})
const { t } = useI18n()

const tripTypes = computed(() => {
  return [
    {
      label: t("one-way"),
      value: "one-way",
    },
    {
      label: t("round-trip"),
      value: "round-trip",
    },
  ]
})
const formSchema = toTypedSchema(
  z.object({
    type: z.enum(["one-way", "round-trip"]),
  })
)
const { submitForm } = useForm({ validationSchema: formSchema })

// to remove
const trips = computed(() => {
  return [
    {
      name: "Egypt",
      id: 0,
    },
    {
      name: "USA",
      id: 1,
    },
  ]
})
const classes = computed(() => {
  return [
    {
      id: 0,
      name: "1 adult, Economy",
    },
    { id: 1, name: "2 adult, Class" },
    { id: 2, name: "2 adult, Economy" },
  ]
})
</script>
<template>
  <div
    class="bg-center bg-no-repeat bg-contain"
    :style="{ backgroundImage: `url('/images/hero-bg.webp')` }"
  >
    <div class="container content-center min-h-screen space-y-10">
      <h1
        class="max-w-4xl mx-auto text-2xl font-bold text-center text-transparent md:text-6xl/snug font-playfair-display w-fit bg-gradient-to-l to-secondary-950 via-primary from-primary bg-clip-text"
      >
        {{ $t("discover-our-paradise-worlds-travel-anywhere-now") }}
      </h1>
      <Form @submit="submitForm">
        <Card>
          <CardContent class="space-y-6 divide-y divide-primary-300">
            <FormField v-slot="{ componentField }" type="radio" name="type">
              <FormItem>
                <FormControl>
                  <RadioGroup
                    class="flex flex-row justify-center gap-6"
                    v-bind="componentField"
                  >
                    <template
                      v-for="tripType in tripTypes"
                      :key="tripType.value"
                    >
                      <RadioGroupItem
                        :label="tripType.label"
                        :value="tripType.value"
                      />
                    </template>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            </FormField>
            <div class="flex flex-wrap items-center justify-between gap-4 pt-6">
              <FormField v-slot="{ componentField }" type="input" name="from">
                <FormItem>
                  <FormLabel icon="i-app-plane-departure" :value="$t('from')" />
                  <FormControl>
                    <Input
                      v-bind="componentField"
                      :placeholder="$t('where-from')"
                    />
                  </FormControl>
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" type="input" name="to">
                <FormItem>
                  <FormLabel icon="i-app-plane-arrival" :value="$t('to')" />
                  <FormControl>
                    <Input
                      v-bind="componentField"
                      :placeholder="$t('where-to')"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField name="date_return">
                <FormItem>
                  <FormLabel icon="i-app-calendar-day" :value="$t('return')" />
                  <FormControl>
                    <InputDate :placeholder="$t('dd-mm-yyyy')" />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField name="date_depart">
                <FormItem>
                  <FormLabel icon="i-app-calendar-day" :value="$t('depart')" />
                  <FormControl>
                    <InputDate :placeholder="$t('dd-mm-yyyy')" />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" type="select" name="class">
                <FormItem>
                  <FormLabel
                    icon="i-app-baseline-airline-seat-recline-extra"
                    :value="$t('cabin-class-and-travelers')"
                  />
                  <FormControl>
                    <Select
                      v-bind="componentField"
                      :options="classes"
                      option-label="name"
                      option-value="id"
                      :placeholder="$t('1-adult-economy')"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
              <Button
                type="submit"
                icon="i-radix-icons-magnifying-glass"
                class="ms-auto"
                :aria-label="$t('search')"
              />
            </div>
          </CardContent>
        </Card>
      </Form>
    </div>
  </div>
</template>
