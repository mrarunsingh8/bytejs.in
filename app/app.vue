<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon-16.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'ByteJS – Free Online Developer Tools: URL Shortener, QR Codes, JSON Formatter'
const description = 'ByteJS is a free all-in-one toolkit for developers. Create short URLs, generate QR codes, format & validate JSON, check HTTP headers, generate UUIDs, and more.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://bytejs.in/og-image.png',
  twitterImage: 'https://bytejs.in/og-image.png',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
