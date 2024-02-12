import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Muhammadiy X.",
  description: "About Me",
  head: [['link', { rel: 'icon', href: 'https://github.com/mkbek.png' }]],
  cleanUrls: true,

  themeConfig: {
    logo: "https://github.com/mkbek.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Companies', link: '/companies' },
      // { text: 'Sponsors', link: '/sponsors' }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/muhammadiy_k' },
      { icon: 'instagram', link: 'https://instagram.com/muhammadiy.k' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/muhammadiy' },
      { icon: 'github', link: 'https://github.com/MKbek' }
    ],

    footer: {
      copyright: "Copyright © 2019-2023 <a href='https://github.com/MKbek'>Muhammadqodir Xamrakulov</a>.",
    }
  }
})
