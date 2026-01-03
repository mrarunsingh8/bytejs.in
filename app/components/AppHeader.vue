<script setup lang="ts">
const route = useRoute()
const showMobileMenu = ref(false)
const items = computed(() => [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home',
    active: route.path === '/'
  }, {
    label: 'Tools',
    to: '/tools',
    icon: 'i-lucide-hammer',
    active: route.path.startsWith('/tools'),
    children: [
      {
        label: 'ByteURL',
        description: 'Create short, shareable URLs quickly and securely.',
        to: '/tools/byteurl',
        icon: 'i-lucide-link',
        active: route.path === '/tools/byteurl'
      },
      {
        label: 'QR Code Generator',
        description: 'Generate QR codes for links, text, or data.',
        icon: 'i-lucide-qr-code',
        to: '/tools/qr-code',
        active: route.path === '/tools/qr-code'
      },
      {
        label: 'UUID Generator',
        description: 'Generate unique identifiers for your applications.',
        icon: 'i-lucide-signature',
        to: '/tools/uuid',
        active: route.path === '/tools/uuid'
      },
      {
        label: 'JSON Formatter',
        description: 'Format and beautify your JSON data with ease.',
        icon: 'i-lucide-braces',
        to: '/tools/json-formatter',
        active: route.path === '/tools/json-formatter'
      },
      {
        label: 'HTTP Header Checker',
        description: 'Check and analyze HTTP headers of any URL.',
        icon: 'i-lucide-server',
        to: '/tools/http-header',
        active: route.path === '/tools/http-header'
      },
      {
        label: 'Upper Case',
        description: 'Convert text to upper case quickly.',
        to: '/tools/text/uppercase',
        icon: 'i-lucide-case-upper',
        active: route.path === '/tools/text/uppercase'
      },
      {
        label: 'Lower Case',
        description: 'Convert text to lower case easily.',
        to: '/tools/text/lowercase',
        icon: 'i-lucide-case-lower',
        active: route.path === '/tools/text/lowercase'
      },
      {
        label: 'Title Case',
        description: 'Transform text to title case format.',
        to: '/tools/text/titlecase',
        icon: 'i-lucide-case-sensitive',
        active: route.path === '/tools/text/titlecase'
      }
    ]
  },
  {
    label: 'About',
    to: '/about',
    icon: 'i-lucide-info',
    active: route.path.startsWith('/about')
  },
  /* {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith('/blog')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  } */
])
watch(() => route.path, () => {
  showMobileMenu.value = false
})
</script>
<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" class="w-2xl" />

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>