import { Language } from '../LangSelector/types'
import { FooterLinkType } from './types'
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from '../Svg'

export const footerLinks: FooterLinkType[] = [
  {
    label: 'About',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.wagyuswap.app/contact-us',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com/',
      },
      {
        label: 'Community',
        href: 'https://docs.wagyuswap.app/contact-us/telegram',
      },
      {
        label: 'WAG',
        href: 'https://docs.wagyuswap.app/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: 'Online Store',
        href: 'https://pancakeswap.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: 'Help',
    items: [
      {
        label: 'Customer',
        href: 'Support https://docs.wagyuswap.app/contact-us/customer-support',
      },
      {
        label: 'Troubleshooting',
        href: 'https://docs.wagyuswap.app/help/troubleshooting',
      },
      {
        label: 'Guides',
        href: 'https://docs.wagyuswap.app/get-started',
      },
    ],
  },
  {
    label: 'Developers',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Documentation',
        href: 'https://docs.wagyuswap.app/wagyuswap',
      },
      {
        label: 'Bug Bounty',
        href: 'https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty',
      },
      {
        label: 'Audits',
        href: 'https://docs.wagyuswap.app/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: 'Careers',
        href: 'https://docs.wagyuswap.app/hiring/become-a-chef',
      },
    ],
  },
]

export const socials = [
  {
    label: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/WagyuSwap_app',
  },
  {
    label: 'Telegram',
    icon: TelegramIcon,
    href: 'http://t.me/wagyuswapofficial',
  },
  // {
  //   label: 'Github',
  //   icon: GithubIcon,
  //   href: 'https://github.com/wagyuswapapp/',
  // },

  {
    label: 'Medium',
    icon: MediumIcon,
    href: 'https://medium.com/@wagyuswap.app',
  },
]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}))
