<script setup lang="ts">
import { ref, watch } from 'vue'

definePageMeta({
    layout: 'toolslayout',
    title: 'Title Case Text Converter - ByteJS',
    description: 'Convert your text to title case quickly and easily with our online title case text converter tool.'
});

const toast = useToast()
const inputText = ref('')
const outputText = ref('')

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char: string) => char.toUpperCase())
}

watch(inputText, (newValue) => {
    outputText.value = toTitleCase(newValue)
})

const copyOutput = async () => {
    if (!outputText.value) return
    if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(outputText.value)
        toast.add({
            title: 'Copied to clipboard',
            description: 'The Title Case text has been copied to your clipboard.',
            color: 'success',
            duration: 3000
        });
    }
}

const clearAll = () => {
    inputText.value = ''
    outputText.value = ''
    toast.add({
        title: 'Cleared',
        description: 'Input and output text areas have been cleared.',
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
        label: 'Title Case Text Converter',
        icon: 'i-lucide-text',
        to: '/tools/text/titlecase'
    }
])
</script>

<template>
    <div>
        <UBreadcrumb :items="items" class="mb-6" />
        
        <div class="space-y-6">
            <div>
                <h1 class="text-4xl font-extrabold">Online Title Case Text Converter</h1>
                <p class="text-muted mt-2">
                    Convert your text to title case quickly and easily with our online title case text converter tool.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <!-- Input Textarea -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <label class="text-sm font-semibold">Input Text</label>
                        <span class="text-xs text-muted">{{ inputText.length }} characters</span>
                    </div>
                    <UTextarea
                        v-model="inputText"
                        class="w-full"
                        :rows="10"
                        placeholder="Enter your text here..."
                        size="lg"
                    />
                </div>

                <!-- Output Textarea -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <label class="text-sm font-semibold">Title Case Output</label>
                        <UButton
                            v-if="outputText"
                            size="xs"
                            color="neutral"
                            variant="soft"
                            icon="i-lucide-copy"
                            @click="copyOutput"
                        >
                            Copy
                        </UButton>
                    </div>
                    <UTextarea
                        v-model="outputText"
                        class="w-full"
                        :rows="10"
                        readonly
                        placeholder="Converted text will appear here..."
                        size="lg"
                    />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 justify-center pt-4">
                <UButton
                    v-if="inputText"
                    color="neutral"
                    variant="outline"
                    icon="i-lucide-x"
                    @click="clearAll"
                >
                    Clear All
                </UButton>
            </div>

            <!-- Info Card -->
            <div class="mt-12 p-6 rounded-xl bg-slate-800/5 dark:bg-slate-50/5">
                <h2 class="text-lg font-semibold mb-3">About Title Case Converter</h2>
                <p class="text-sm text-slate-400 leading-relaxed">
                    This tool converts all input letters in your text to title case. 
                    Perfect for formatting headings, titles, or emphasizing text. The conversion happens 
                    instantly as you type.
                </p>
            </div>
        </div>
    </div>
</template>