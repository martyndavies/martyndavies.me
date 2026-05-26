export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin'
}

export const links: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/martyndavies',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/martynrdavies',
    icon: 'linkedin',
  },
]
