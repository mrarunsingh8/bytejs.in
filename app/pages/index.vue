
<template>
  <div>
    <UPageHero
      title="Powerful Online Tools for Developers"
      description="ByteJS is an online platform that provides a collection of fast, reliable, and easy-to-use tools designed to simplify everyday development tasks."
      :links="[{
        label: 'Get started',
        to: '/tools',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }]"
    />

    <UPageSection
      id="features"
      title="What You Can Do with ByteJS"
      description="From generating short URLs and QR codes to formatting JSON and validating HTTP headers, ByteJS helps developers work more efficiently—all in one place."
      :features="[{
        icon: 'i-lucide-link',
        title: 'ByteURL',
        description: 'Create short, shareable URLs quickly and securely.'
      }, {
        icon: 'i-lucide-qr-code',
        title: 'QR Code Generator',
        description: 'Generate QR codes for links, text, or data.'
      }, {
        icon: 'i-lucide-text',
        title: 'Text Case Converter',
        description: 'Convert text to lower case, upper case, or title case.'
      }, {
        icon: 'i-lucide-braces',
        title: 'JSON Formatter & Validator',
        description: 'Format and validate JSON data quickly and accurately.'
      }, {
        icon: 'i-lucide-signature',
        title: 'UUID Generator',
        description: 'Generate universally unique identifiers (UUIDs) for your applications.'
      }, {
        icon: 'i-lucide-server',
        title: 'HTTP Header Checker',
        description: 'Inspect and validate HTTP request and response headers.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Built for Speed and Simplicity"
        description="ByteJS tools are designed to be lightweight, fast, and accessible directly from the browser—no installation required. Whether you’re a developer, tester, or content creator, ByteJS helps you get things done faster."
        variant="subtle"
      />
    </UPageSection>
  </div>
</template>
