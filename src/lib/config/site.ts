import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/site_avatar.jpeg',
    bio: 'Ex Research Engineer @ SMU <br/> Ex-Data Scientist @ Be Group <br/>',
    name: 'Vo Tien Dung',
    status: '📦',
		metadata: [
			{
				//text: 'Github',
				link: 'https://github.com/dungxibo123',
				icon: 'github'
			},
			{
				link: 'https://x.com/dungxibo123_',
				icon: 'x'
			},
			{
				link: 'https://facebook.com/dungtv.tv',
				icon: 'facebook'
			},
		]
  },
  description: 'A personal blog just for fun',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'dungxibo123.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Blog',
  themeColor: '#3D4451',
  title: 'Vo Tien Dung |',
}
