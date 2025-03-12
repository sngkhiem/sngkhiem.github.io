import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light',
  },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
//  {
//    name: 'valentine',
//    text: '🌸 Valentine',
//  },
//  {
//    name: 'aqua',
//    text: '💦 Aqua',
//  },
//  {
//    name: 'synthwave',
//    text: '🌃 Synthwave',
//  },
//  {
//    name: 'night',
//    text: '🌃 Night',
//  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi',
  },
  {
    name: 'retro',
    text: '🌇 Retro',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/about-me',
      text: 'About'
    },
    {
      link: '/publications',
      text: 'Publications'
    },
  ],
  search: {
    colors: true,
    provider: 'google'

  }
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/atom.xml',
      text: 'Feed',
    },
    {
      link: '/sitemap.xml',
      text: 'Sitemap',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
