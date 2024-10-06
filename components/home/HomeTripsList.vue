<script setup lang="ts">
const trips = computed(() => {
  return [
    {
      label: "Flores Road Trip 3D2N",
      location: "Manggarai Barat",
      duration: 3,
      price: "100",
      image: "/images/trip-image-1.webp",
    },
    {
      label: "Forrester Glamping Co Bogor",
      location: "Bogor",
      duration: 1,
      price: 375,
      image: "/images/trip-image-2.webp",
    },
    {
      label: "Paket Tiket Pesawat Jakarta Bali",
      location: "Jakarta",
      duration: null,
      price: 375,
      image: "/images/trip-image-3.webp",
    },
    {
      label: "Desa Wisata Kandri",
      location: "Kota Semarang",
      duration: 14,
      price: 375,
      image: "/images/trip-image-4.webp",
    },
  ]
})
</script>
<template>
  <section class="container min-h-screen space-y-8 font-lato">
    <header class="space-y-2">
      <h2 class="title font-lato">
        {{ $t("popular-destinations") }}
      </h2>
      <p>
        {{ $t("vacations-to-make-your-experience-enjoyable-in-indonesia") }}
      </p>
    </header>
    <div class="grid gap-6 md:grid-cols-4">
      <template v-for="trip in trips" :key="trip.label">
        <article
          class="flex flex-col p-4 transition-colors duration-700 border border-white bg-white/40 hover:bg-primary-50 hover:border-primary rounded-2xl"
        >
          <div class="h-48 overflow-hidden rounded-ss-lg rounded-ee-lg">
            <NuxtImg
              :src="trip.image"
              :alt="trip.label"
              class="object-cover w-full h-full"
            />
          </div>
          <p
            class="my-2 space-x-2 text-sm text-muted-foreground rtl:space-x-reverse"
          >
            <span class="i-heroicons-map-pin size-4 text-primary" />
            <span>{{ trip.location }}</span>
          </p>
          <h3 class="text-bold text-secondary-950">
            {{ trip.label }}
          </h3>
          <time v-if="trip.duration" class="text-gray-600">
            {{
              $t("count-day-or-days", trip.duration, {
                count: trip.duration,
              })
            }}
          </time>
          <p class="pt-3 mt-auto text-sm font-bold text-primary">
            {{ formatCurrency(trip.price) }}
          </p>
        </article>
      </template>
    </div>
  </section>
</template>
