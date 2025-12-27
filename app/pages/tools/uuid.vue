<script setup lang="ts">
definePageMeta({
    layout: 'toolslayout',
    title: 'UUID Generator - ByteJS',
    description: 'Generate universally unique identifiers (UUIDs) for your applications quickly and easily with our online UUID generator tool.'
});
import { ref } from 'vue'
const toast = useToast()

const uuid = ref(crypto.randomUUID())

function copyUUID() {
    navigator.clipboard.writeText(uuid.value);
    toast.add({
        title: 'Copied to clipboard',
        description: 'The generated UUID has been copied to your clipboard.',
        color: 'success',
        duration: 3000
    });
}

function generateUUID() {
    uuid.value = crypto.randomUUID()
    toast.add({
        title: 'New UUID Generated',
        description: 'A new UUID has been generated.',
        color: 'info',
        duration: 3000
    });
}

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
    },
    {
        label: 'UUID Generator',
        icon: 'i-lucide-signature',
        to: '/tools/uuid'
    }
])
</script>
<template>
    <UBreadcrumb :items="items" />
    <UContainer class="py-8">
        <h1 class="text-4xl font-extrabold">Online UUID Generator <UBadge color="primary" variant="soft">v4</UBadge>
        </h1>
        <p class="text-muted mt-2">
            Generate universally unique identifiers (UUIDs) for your applications quickly and easily with our online
            UUID
            generator tool.
        </p>

        <section class="flex flex-col items-center justify-center text-center py-32">
            <!-- UUID + Copy -->
            <div class="flex items-center gap-4">
                <code class="text-2xl md:text-2xl font-mono font-semibold text-foreground select-all">
        {{ uuid }}
      </code>

                <UButton color="neutral" variant="soft" icon="i-lucide-copy" @click="copyUUID">
                    Copy
                </UButton>
            </div>

            <!-- Hint -->
            <p class="text-muted mt-12 text-base">
                <span class="underline cursor-pointer" @click="generateUUID">
                    Refresh page
                </span>
                to generate another.
            </p>
        </section>
    </UContainer>
</template>