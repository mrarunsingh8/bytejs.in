<script setup lang="ts">
definePageMeta({
    layout: 'toolslayout',
    title: 'Developer Tools – ByteJS',
    description:
        'ByteJS provides essential online developer tools including URL shortener, QR code generator, JSON formatter, UUID generator, and HTTP header checker.',
})
const items = ref([
    {
        label: 'Home',
        icon: 'i-lucide-home',
        to: '/'
    },
    {
        label: 'Tools',
        icon: 'i-lucide-hammer',
        to: '/tools'
    }
])
</script>

<template>
    <UBreadcrumb :items="items" />
    <UContainer class="pb-24 max-w-6xl">
        <UPage>
            <!-- Header -->
            <UPageHeader title="Developer Tools"
                description="From generating short URLs and QR codes to formatting JSON and validating HTTP headers, ByteJS helps developers work more efficiently—all in one place." />

            <!-- Tools Grid -->
            <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                <UCard>
                    <h3 class="text-lg font-semibold">ByteURL</h3>
                    <p class="text-muted mt-2">
                        Create short, shareable URLs quickly and securely.
                    </p>
                    <UButton to="/tools/byteurl" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

                <UCard>
                    <h3 class="text-lg font-semibold">QR Code Generator</h3>
                    <p class="text-muted mt-2">
                        Generate QR codes for links, text, or data.
                    </p>
                    <UButton to="/tools/qr-code" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

                <UCard>
                    <h3 class="text-lg font-semibold">Text Case Converter</h3>
                    <p class="text-muted mt-2">
                        Convert text to lower case, upper case, or title case.
                    </p>
                    <UButton to="/tools/text-case" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

                <UCard>
                    <h3 class="text-lg font-semibold">JSON Formatter & Validator</h3>
                    <p class="text-muted mt-2">
                        Format and validate JSON data quickly and accurately.
                    </p>
                    <UButton to="/tools/json-formatter" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

                <UCard>
                    <h3 class="text-lg font-semibold">UUID Generator</h3>
                    <p class="text-muted mt-2">
                        Generate universally unique identifiers (UUIDs) for your applications.
                    </p>
                    <UButton to="/tools/uuid" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

                <UCard>
                    <h3 class="text-lg font-semibold">HTTP Header Checker</h3>
                    <p class="text-muted mt-2">
                        Inspect and validate HTTP request and response headers.
                    </p>
                    <UButton to="/tools/http-headers" variant="link" class="mt-4 p-0">
                        Open tool →
                    </UButton>
                </UCard>

            </div>
        </UPage>
    </UContainer>
</template>
