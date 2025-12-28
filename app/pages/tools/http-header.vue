<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
    layout: 'toolslayout',
    title: 'HTTP Header Checker - ByteJS',
    description:
        'Inspect and validate HTTP response headers for any URL using the ByteJS HTTP Header Checker tool.'
})

const toast = useToast()

const url = ref('')
const headersOutput = ref('')

const checkHeaders = async () => {
    if (!url.value) return

    try {
        headersOutput.value = 'Fetching headers...'

        const response = await fetch(url.value, {
            method: 'GET'
        })

        const headers: Record<string, string> = {}
        let output = `HTTP/1.1 ${response.status} ${response.statusText}\n`

        response.headers.forEach((value, key) => {
        output += `${key}: ${value}\n`
        })
        headersOutput.value = output
    } catch (error) {
        headersOutput.value = ''
        toast.add({
            title: 'Error',
            description: 'Failed to fetch headers. Please check the URL.',
            color: 'error',
            duration: 3000
        })
    }
}

const copyHeaders = async () => {
    if (!headersOutput.value) return

    await navigator.clipboard.writeText(headersOutput.value)
    toast.add({
        title: 'Copied to clipboard',
        description: 'HTTP headers have been copied successfully.',
        color: 'success',
        duration: 3000
    })
}

const clearAll = () => {
    url.value = ''
    headersOutput.value = ''
    toast.add({
        title: 'Cleared',
        description: 'URL and headers output have been cleared.',
        color: 'info',
        duration: 3000
    })
}

const items = ref([
    { label: 'Home', icon: 'i-lucide-home', to: '/' },
    { label: 'Tools', icon: 'i-lucide-hammer', to: '/tools' },
    {
        label: 'HTTP Header Checker',
        icon: 'i-lucide-server',
        to: '/tools/http-headers'
    }
])
</script>

<template>
    <div>
        <!-- Breadcrumb -->
        <UBreadcrumb :items="items" class="mb-6" />

        <div class="space-y-6">
            <!-- Header -->
            <div>
                <h1 class="text-4xl font-extrabold">HTTP Header Checker</h1>
                <p class="text-muted mt-2">
                    Inspect and validate HTTP response headers for any public URL.
                </p>
            </div>

            <!-- Action -->
            <div class="flex gap-3">
                <UFieldGroup class="w-full">
                    <UInput class="w-full" v-model="url" placeholder="https://example.com" :ui="{
                        base: 'pl-14.5',
                        leading: 'pointer-events-none'
                    }">
                        <template #leading>
                            <span class="iconify i-lucide:link shrink-0 size-5 text-dimmed group-hover:text-default transition-colors" aria-hidden="true" data-slot="linkLeadingIcon"></span>
                        </template>
                    </UInput>
                </UFieldGroup>
                <UButton color="primary" icon="i-lucide-search" @click="checkHeaders">
                    Check
                </UButton>

                <UButton v-if="url" color="neutral" variant="outline" icon="i-lucide-x" @click="clearAll">
                    Clear
                </UButton>
            </div>

            <!-- Output -->
            <div class="space-y-3 mt-8">
                <div class="flex items-center justify-between">
                    <label class="text-sm font-semibold">HTTP Response Headers</label>
                    <UButton v-if="headersOutput" size="xs" color="neutral" variant="soft" icon="i-lucide-copy"
                        @click="copyHeaders">
                        Copy
                    </UButton>
                </div>

                <UTextarea v-model="headersOutput" readonly class="font-mono w-full" :rows="12"
                    placeholder="Response headers will appear here..." size="lg" />
            </div>

            <!-- Info -->
            <div class="mt-12 p-6 rounded-xl bg-slate-800/40">
                <h2 class="text-lg font-semibold mb-3">About HTTP Header Checker</h2>
                <p class="text-sm text-slate-400 leading-relaxed">
                    This tool retrieves and displays HTTP response headers for a given URL.
                    It helps developers inspect security headers, caching policies, content
                    types, and server configurations quickly and efficiently.
                </p>
            </div>
        </div>
    </div>
</template>
