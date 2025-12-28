/* Generate the comming sonn page content */
<script setup>
definePageMeta({
    layout: 'toolslayout',
    title: 'ByteURL - Coming Soon | ByteJS',
    description:
        'ByteURL is coming soon! Stay tuned for our upcoming URL shortening tool that will help you create short, shareable links quickly and securely.'
})

const items = ref([
    { label: 'Home', icon: 'i-lucide-home', to: '/' },
    { label: 'Tools', icon: 'i-lucide-hammer', to: '/tools' },
    {
        label: 'URL Shortener',
        icon: 'i-lucide-link',
        to: '/tools/byteurl'
    }
])
</script>
<template>
    <UBreadcrumb :items="items" class="mb-6" />

    <div class="space-y-6">
        <!-- Header -->
        <div>
            <h1 class="text-4xl font-extrabold">Byte URL - URL Shortener</h1>
            <p class="text-muted mt-2">
                ByteURL is coming soon! Stay tuned for our upcoming URL shortening tool that will help you create short, shareable links quickly and securely.
            </p>
        </div>

    </div>
</template>