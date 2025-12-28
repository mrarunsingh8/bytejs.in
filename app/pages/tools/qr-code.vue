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
        label: 'QR Code Generator',
        icon: 'i-lucide-qr-code',
        to: '/tools/qr-code'
    }
])
</script>
<template>
    <UBreadcrumb :items="items" class="mb-6" />

    <div class="space-y-6">
        <!-- Header -->
        <div>
            <h1 class="text-4xl font-extrabold">QR Code Generator</h1>
            <p class="text-muted mt-2">
                QR Code Generator is coming soon! Stay tuned for our upcoming tool that will help you generate QR codes for links, text, or data quickly and easily.
            </p>
        </div>

    </div>
</template>