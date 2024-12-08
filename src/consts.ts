export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'wonderstk',
  DESCRIPTION:
    'A blog about Frontend Dev, Web3.0 and other interesting things.',
  EMAIL: 'mehulparmar9694@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/WonderSTK', label: 'GitHub' },
  { href: 'https://twitter.com/im_mehulk', label: 'Twitter' },
  { href: 'mehulparmar9694@gmail.com', label: 'Email' },
  { href: 'https://personal-portfolio-liard-five.vercel.app/', label: 'RSS' },
]
