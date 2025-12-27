<template>
    <USeparator icon="i-simple-icons-nuxtdotjs" />
    <UFooter>
        <template #left>
            <AppLogo class="w-auto h-5 shrink-0" />
            <p class="text-sm text-muted ml-5">
                Built with Nuxt UI • © {{ new Date().getFullYear() }}
            </p>
        </template>
        <template #right>
            <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" icon="i-simple-icons-github"
                aria-label="GitHub" color="neutral" variant="ghost" />
        </template>
    </UFooter>
</template>