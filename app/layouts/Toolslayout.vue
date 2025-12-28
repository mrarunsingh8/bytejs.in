<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const showSidebar = ref(false)
const items: NavigationMenuItem[] = [
    {
        label: 'URL Shortener',
        icon: 'i-lucide-link',
        to: '/tools/byteurl'
    },
    {
        label: 'QR Code Generator',
        icon: 'i-lucide-qr-code',
        to: '/tools/qr-code'
    },
    {
        label: 'UUID Generator',
        icon: 'i-lucide-signature',
        to: '/tools/uuid'
    },
    {
        label: 'JSON Formatter',
        icon: 'i-lucide-braces',
        to: '/tools/json-formatter'
    },
    {
        label: 'HTTP Header Checker',
        icon: 'i-lucide-server',
        to: '/tools/http-header'
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
                <div class="flex flex-col lg:flex-row h-[calc(100vh-4rem)] bg-background">
                    <!-- Mobile Toggle Button -->
                    <div class="lg:hidden flex items-center p-4 border-b border-default">
                        <button
                            @click="showSidebar = !showSidebar"
                            class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <UIcon :name="showSidebar ? 'i-lucide-panel-top-open' : 'i-lucide-panel-top-close'" />
                            <span class="text-sm font-medium">Tools</span>
                        </button>
                    </div>

                    <!-- Sidebar -->
                    <aside 
                        :class="[
                            'w-full lg:w-82 border-b lg:border-b-0 lg:border-r border-default overflow-hidden',
                            'max-h-64 lg:max-h-none lg:block',
                            showSidebar ? 'block' : 'hidden'
                        ]"
                    >
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
                    <main class="flex-1 p-4 lg:p-6 overflow-y-auto">
                        <slot />
                    </main>
                </div>
            </UContainer>
        </UMain>
    </UApp>
</template>