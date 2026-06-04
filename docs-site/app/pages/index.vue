<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "{{ .ProjectName }} · {{ .ProjectTagline }}",
  description: "{{ .ProjectDescription }}",
});
</script>

<template>
  <UContainer class="py-16 sm:py-24">
    <UPageHero
      title="{{ .ProjectTagline }}"
      description="{{ .ProjectDescription }}"
      orientation="vertical"
      class="pb-12"
    >
      <template #links>
        <UButton
          to="/getting-started/introduction"
          size="xl"
          color="primary"
          icon="i-lucide-arrow-right"
          trailing
        >
          Get started
        </UButton>
        <UButton
          to="https://github.com/{{ .GitHubOwner }}/{{ .GitHubRepo }}"
          target="_blank"
          size="xl"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
        >
          View on GitHub
        </UButton>
      </template>
    </UPageHero>

    <UPageGrid class="gap-6">
      <UPageFeature
        title="Edit this homepage"
        description="Replace this card and the others with the features of your project. Each UPageFeature takes a title, description, and Lucide icon."
        icon="i-lucide-sparkles"
      />
      <UPageFeature
        title="Author in Markdown"
        description="Drop new pages under content/. Frontmatter sets the title and description; .navigation.yml controls section titles and icons."
        icon="i-lucide-file-text"
      />
      <UPageFeature
        title="Brand-ready theming"
        description="Tailwind v4 with Weburz brand palettes preconfigured (BurzBlue / BurzYellow). Swap the colors in app.config.ts to rebrand."
        icon="i-lucide-palette"
      />
      <UPageFeature
        title="Self-hosted Umami analytics"
        description="The umami.client.ts plugin reads NUXT_PUBLIC_UMAMI_WEBSITE_ID at runtime. Set the secret in your deploy workflow."
        icon="i-lucide-bar-chart"
      />
      <UPageFeature
        title="Auto-deployed to GitHub Pages"
        description="A workflow under .github/workflows/deploy.yml ships every push to main to GitHub Pages with prerender turned on."
        icon="i-lucide-rocket"
      />
      <UPageFeature
        title="Type-checked end-to-end"
        description="vue-tsc runs in CI alongside ESLint and Prettier. The QA workflow gates merges on lint, format, type, and build."
        icon="i-lucide-shield-check"
      />
    </UPageGrid>
  </UContainer>
</template>
