export default defineAppConfig({
  ui: {
    colors: {
      primary: "burzyellow",
      secondary: "burzblue",
      neutral: "slate",
      success: "green",
      info: "blue",
      warning: "amber",
      error: "red",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  seo: {
    siteName: "{{ .ProjectName }}",
  },
  header: {
    title: "{{ .ProjectName }}",
    to: "/",
    search: true,
    colorMode: true,
    nav: [{ label: "Docs", to: "/getting-started/introduction" }],
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/{{ .GitHubOwner }}/{{ .GitHubRepo }}",
        target: "_blank",
        "aria-label": "{{ .ProjectName }} on GitHub",
      },
    ],
  },
  footer: {
    credits: `© ${new Date().getFullYear()} {{ .AuthorName }}`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/{{ .GitHubOwner }}/{{ .GitHubRepo }}",
        target: "_blank",
        "aria-label": "{{ .ProjectName }} on GitHub",
      },
      {
        icon: "i-lucide-globe",
        to: "https://weburz.com",
        target: "_blank",
        "aria-label": "weburz.com",
      },
    ],
  },
  toc: {
    title: "On this page",
    bottom: {
      title: "Page",
      edit: "https://github.com/{{ .GitHubOwner }}/{{ .GitHubRepo }}/edit/main/content",
      links: [],
    },
  },
});
