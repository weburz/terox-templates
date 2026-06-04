export default defineNuxtPlugin(() => {
  const { umamiWebsiteId } = useRuntimeConfig().public;

  if (!umamiWebsiteId) return;

  useHead({
    script: [
      {
        defer: true,
        src: "{{ .UmamiScriptUrl }}",
        "data-website-id": umamiWebsiteId,
      },
    ],
  });
});
