<script setup lang="ts">
import { NavigationMenuItem } from '@nuxt/ui';


const route = useRoute()

const items = computed < NavigationMenuItem[] > (() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },{
    label: 'Tools',
    to: '/tools',
    active: route.path.startsWith('/tools')
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith('/blog')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  }
])
</script>
<template>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
</template>