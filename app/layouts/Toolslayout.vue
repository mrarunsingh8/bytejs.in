<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
    {
        label: 'URL Shortener',
        icon: 'i-lucide-link-2',
        to: '/byteurl'
    },
    {
        label: 'QR Code Generator',
        icon: 'i-lucide-qr-code',
        to: '/tools/qr'
    },
    {
        label: 'UUID Generator',
        icon: 'i-lucide-signature',
        to: '/tools/uuid'
    },
    {
        label: 'JSON Formatter',
        icon: 'i-lucide-braces',
        to: '/tools/json'
    },
    {
        label: 'HTTP Header Checker',
        icon: 'i-lucide-server',
        to: '/tools/http-header-checker'
    },
    {
        label: 'Text Converter',
        icon: 'i-lucide-text',
        defaultOpen: true,
        children: [
            { label: 'Upper Case', to: '/tools/text/uppercase' },
            { label: 'Lower Case', to: '/tools/text/lowercase' },
            { label: 'Title Case', to: '/tools/text/titlecase' }
        ]
    }
]
</script>

<template>
    <UApp>
        <AppHeader />
        <UMain class="flex">
            <UContainer>
                <div class="flex h-[calc(100vh-4rem)] bg-background">
                    <!-- Sidebar -->
                    <aside class="w-82 border-r border-default overflow-hidden">
                        <div class="flex flex-col h-full">

                            <!-- Sidebar Header -->
                            <div class="px-4 py-4">
                                <h2 class="text-sm font-semibold text-muted">
                                    Tools
                                </h2>
                            </div>

                            <!-- Scrollable Menu -->
                            <div class="flex-1 overflow-y-auto p-2">
                                <UNavigationMenu orientation="vertical" :items="items" />
                            </div>

                        </div>
                    </aside>

                    <!-- Body Panel -->
                    <main class="flex-1 p-6">
                        <slot />
                    </main>
                </div>
            </UContainer>
        </UMain>
    </UApp>
</template>
