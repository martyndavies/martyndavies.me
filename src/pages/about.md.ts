import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const content = `# About — Martyn Davies

Multi-year experience leading Developer Advocacy, Education, Community Management, and Product Management at companies large and small. I've been building, leading and enjoying being a part of forward-thinking advocacy teams from 1 person to 40+ since 2012.

## Experience

### Zuplo — Developer Relations Lead
Aug 2024 – Present
Focused on how developers and AI coding agents adopt API infrastructure. Producing the full content stack across blog, video, newsletter, and social, backed by working demos and example projects. Leading GTM launches for MCP server support, AI Gateway, API Monetization and more.

### Superface — Head of Developer Relations
May 2023 – May 2024
Led developer GTM working closely with the founders on product market fit as well as all developer asset creation from documentation to video content.

### Orbit — Product Manager
May 2021 – Apr 2023
Managing product output for how users get their community data into Orbit and out again as valuable insight via reports, notifications and connections to other platforms.

### Vonage — Director of Developer Education
Jan 2020 – Jun 2021
Leading the Developer Education team and strategy. Building a team of creative engineers to educate and inspire developers around an extensive communications API platform.

### Vonage — Senior Manager, Developer Relations & Developer Education
Jul 2018 – Jan 2020

### Algolia — Senior Developer Advocate
Jan 2018 – Jun 2018

### Ignite Accelerator — Programme Director
Sep 2015 – Dec 2017
Launched the Ignite Accelerator in London, investing over £500k in 19 teams across two cohorts.

### SendGrid — Lead Developer Advocate, EMEA & APAC
Sep 2012 – Sep 2015
Led the Community & Developer Relations team in EMEA as SendGrid's first non-US employee.

### Six Two Productions — Director of API Design
Mar 2011 – Aug 2012
Led a creative technology team building API-driven web and mobile applications for Universal Music Group, Warner Music, Sony Music and others.

### Universal Music Group — Product Manager, Innovation
Jun 2010 – Jun 2011
Leading mobile application commissioning and B2B/B2C technology development across the 5 major label groups that make up UMG.

### BBC Audio & Music Interactive — Product Manager
Mar 2008 – Jun 2010
Developed and led the team that built the BBC Introducing technology platform.

## Focus Areas

- Developer Advocacy
- Developer Education
- Community Management
- Product Management
- Developer Experience
- API Products
- Technical Writing
- Team Leadership

---
Source: https://martyndavies.me/about`

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
