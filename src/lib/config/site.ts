import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/avatar.jpg',
    bio: '.',
    name: 'Tran Hoang Khiem',
    status: '🌸',
		metadata: [
			{
				//text: 'Github',
				link: 'https://github.com/sngkhiem',
				icon: 'github'
			},
			{
				link: 'https://www.facebook.com/hoangkhiem1403/',
				icon: 'facebook'
			},
		]
  },
  description: 'A personal website to archive my notes',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'dungxibo123.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Note',
  themeColor: '#3D4451',
  title: 'Tran Hoang Khiem |',
}
