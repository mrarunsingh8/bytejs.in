<script setup>
import App from './app.vue';

const error = useError();
console.log('Error info:', error);
// Check if it is a 404 error
if (error.value.statusCode === 404 || error.value.statusCode === '404') {
  error.value.message = "The page you are looking for cannot be found. address may have been typed incorrectly or the page may be a broken or outdated link.";
}
</script>

<template>
  <UMain>
    <AppHeader />
    <div class="error-page">
      <UPageHero
        :title="error.statusMessage || 'Error Occurred'"
        :description="error.message"
        :headline="error.statusCode"
        :links="[{
          label: 'Homepage',
          to: '/',
          target: '_self',
          trailingIcon: 'i-lucide-home',
          size: 'xl'
        }]"
      />
    </div>
  </UMain>
</template>