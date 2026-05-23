export type VideoItem = {
  title: string
  url: string
  channel: string
  date?: string
}

export const videos: VideoItem[] = [
  // Zuplo
  {
    title: 'Auto-Generate API Keys for New Users on Signup',
    url: 'https://www.youtube.com/watch?v=lEzZqOmTnNY',
    channel: 'Zuplo',
    date: '2026-05-08',
  },
  {
    title: 'Accept API Key & JWT Auth on the Same Route',
    url: 'https://www.youtube.com/watch?v=DExrMb0wILA',
    channel: 'Zuplo',
    date: '2026-05-07',
  },
  {
    title: 'Quickly Add Self-Serve API Keys to Your App',
    url: 'https://www.youtube.com/watch?v=M1s-7WDZ70s',
    channel: 'Zuplo',
    date: '2026-05-06',
  },
  {
    title: 'The Missing Manual for API Key Authentication | apikeys.guide',
    url: 'https://www.youtube.com/watch?v=39YoYUOcpzg',
    channel: 'Zuplo',
    date: '2026-05-05',
  },
  {
    title: 'Monetized API Developer Docs using Open API & Claude Code | Building a Monetized API (Part 4)',
    url: 'https://www.youtube.com/watch?v=guNXiln5PYg',
    channel: 'Zuplo',
    date: '2026-04-03',
  },
  {
    title: 'Control Access to MCP Servers | Building a Monetized API with Zuplo (Part 3)',
    url: 'https://www.youtube.com/watch?v=tjZ3Sed6svQ',
    channel: 'Zuplo',
    date: '2026-04-02',
  },
  {
    title: 'Add Paid Plans, Metering & Stripe Payment to an API | Building a Monetized API with Zuplo (Part 2)',
    url: 'https://www.youtube.com/watch?v=jKDroS-xqe0',
    channel: 'Zuplo',
    date: '2026-04-01',
  },
  {
    title: 'Building a Monetized API End-to-End (Gateway, Price Plans, Payments, MCP Server + More!)',
    url: 'https://www.youtube.com/watch?v=FMcYofeBoxE',
    channel: 'Zuplo',
    date: '2026-03-31',
  },
  {
    title: 'API Monetization 101: Creating Pricing Strategy with AI',
    url: 'https://www.youtube.com/watch?v=eCol0ZDRq1A',
    channel: 'Zuplo',
    date: '2026-02-26',
  },
  {
    title: 'API Monetization 101: Plans, Phases & Rate Cards',
    url: 'https://www.youtube.com/watch?v=V1u0wqRbjEU',
    channel: 'Zuplo',
    date: '2026-02-25',
  },
  {
    title: 'API Monetization 101: Metering, Features & Enforcement',
    url: 'https://www.youtube.com/watch?v=gVK_3n7mfHc',
    channel: 'Zuplo',
    date: '2026-02-24',
  },
  {
    title: 'Create Apps for ChatGPT with MCP & Zuplo',
    url: 'https://www.youtube.com/watch?v=5hcmMDyKR88',
    channel: 'Zuplo',
    date: '2025-12-05',
  },
  {
    title: 'Custom MCP Tools: Combining API Endpoints',
    url: 'https://www.youtube.com/watch?v=BCytuQSaxYA',
    channel: 'Zuplo',
    date: '2025-12-02',
  },
  {
    title: 'Add Workflows to MCP using Prompts',
    url: 'https://www.youtube.com/watch?v=HW4TTL4mDOo',
    channel: 'Zuplo',
    date: '2025-12-01',
  },
  {
    title: 'Use OpenAI Codex CLI with an AI Gateway',
    url: 'https://www.youtube.com/watch?v=7o0B1aN7qHI',
    channel: 'Zuplo',
    date: '2025-10-09',
  },
  {
    title: 'What Autonomous Agents Actually Need from Your APIs',
    url: 'https://www.youtube.com/watch?v=z57Hn-nsDgQ',
    channel: 'Zuplo',
    date: '2025-10-03',
  },
  {
    title: 'Using goose with OpenAI & AI Gateway',
    url: 'https://www.youtube.com/watch?v=bL7Uny0ksNA',
    channel: 'Zuplo',
    date: '2025-10-03',
  },
  {
    title: 'Claude Code + Sonnet 4.5 via Zuplo AI Gateway',
    url: 'https://www.youtube.com/watch?v=-3oRanygD2M',
    channel: 'Zuplo',
    date: '2025-10-02',
  },
  {
    title: 'Using LangChain with an AI Gateway & OpenAI',
    url: 'https://www.youtube.com/watch?v=GBTg8SQ-88c',
    channel: 'Zuplo',
    date: '2025-10-01',
  },
  {
    title: 'MCP Server Authentication with OAuth (Quickly!)',
    url: 'https://www.youtube.com/watch?v=olwVB66Gdjo',
    channel: 'Zuplo',
    date: '2025-08-07',
  },
  {
    title: 'AI Agents Are Coming For Your APIs! | Zuplo MCP Week feat. John McBride',
    url: 'https://www.youtube.com/watch?v=9GtN5_oKAz8',
    channel: 'Zuplo',
    date: '2025-06-13',
  },
  {
    title: 'Essential Security Policies Every MCP Server Needs',
    url: 'https://www.youtube.com/watch?v=iLqBCQbJRVM',
    channel: 'Zuplo',
    date: '2025-06-12',
  },
  {
    title: 'AI Agents Fail 75% of the Time!? | Zuplo MCP Week feat. Zdenek Nemec',
    url: 'https://www.youtube.com/watch?v=5-Prmxlt45M',
    channel: 'Zuplo',
    date: '2025-06-11',
  },
  {
    title: 'Create Remote MCP Servers in Seconds! | Zuplo API Gateway',
    url: 'https://www.youtube.com/watch?v=bhIDPyVUuSM',
    channel: 'Zuplo',
    date: '2025-06-10',
  },
  {
    title: "Model Context Protocol Won't Kill APIs! | Zuplo MCP Week",
    url: 'https://www.youtube.com/watch?v=ZTO-uFkGmNw',
    channel: 'Zuplo',
    date: '2025-06-09',
  },
  {
    title: 'Identify AI Agents Using HTTP Message Signatures',
    url: 'https://www.youtube.com/watch?v=9_pvWFCDwaQ',
    channel: 'Zuplo',
    date: '2025-06-05',
  },
  {
    title: 'What does API Brownout actually mean?!',
    url: 'https://www.youtube.com/watch?v=_ISXtsCWLns',
    channel: 'Zuplo',
    date: '2025-05-01',
  },
  {
    title: 'OpenAI Codex & o4-mini vs OpenAPI',
    url: 'https://www.youtube.com/watch?v=-TLEsPvUPIo',
    channel: 'Zuplo',
    date: '2025-04-17',
  },
  {
    title: 'Writing OpenAPI with Gemini 2.5 Pro!',
    url: 'https://www.youtube.com/watch?v=5ZE4-CYqSBU',
    channel: 'Zuplo',
    date: '2025-04-10',
  },
  {
    title: 'Prepare your API for MCP traffic with an API Gateway',
    url: 'https://www.youtube.com/watch?v=FdWodrY5ew0',
    channel: 'Zuplo',
    date: '2025-04-03',
  },
  {
    title: 'When good vibes go bad! | Vibe Coding | The API & Anchor EP 7',
    url: 'https://www.youtube.com/watch?v=bnNCwNfTTuo',
    channel: 'Zuplo',
    date: '2025-03-27',
  },
  {
    title: 'Prototype APIs with LLMs & Free Tools',
    url: 'https://www.youtube.com/watch?v=z0sYlk69px8',
    channel: 'Zuplo',
    date: '2025-03-20',
  },
  {
    title: 'Is MCP hype or helpful? | The API & Anchor Ep. 6',
    url: 'https://www.youtube.com/watch?v=XQxjvqJSFYE',
    channel: 'Zuplo',
    date: '2025-03-13',
  },
  {
    title: 'Do LLMs Even Need API Workflow Engines? | API & Anchor Ep. 5',
    url: 'https://www.youtube.com/watch?v=SAKVtM86SoQ',
    channel: 'Zuplo',
    date: '2025-02-06',
  },
  {
    title: '30,000 APIs Exposed! | The API & Anchor Ep. 4',
    url: 'https://www.youtube.com/watch?v=GeIQORFduTs',
    channel: 'Zuplo',
    date: '2025-01-16',
  },
  {
    title: 'Fast, free REST API Mocking with Mockbin',
    url: 'https://www.youtube.com/watch?v=YChG5-z1IM0',
    channel: 'Zuplo',
    date: '2024-12-23',
  },
  {
    title: "Powering OpenAI's SDK! | Stainless",
    url: 'https://www.youtube.com/watch?v=AC630UmVh4s',
    channel: 'Zuplo',
    date: '2024-12-19',
  },
  {
    title: 'Is Spotify the API grinch?! | API & Anchor Episode 3',
    url: 'https://www.youtube.com/watch?v=_moHFKncaek',
    channel: 'Zuplo',
    date: '2024-12-12',
  },
  {
    title: 'Can Mistral fix OpenAPI docs with a PDF?!',
    url: 'https://www.youtube.com/watch?v=rAjzdG0pH3w',
    channel: 'Zuplo',
    date: '2024-12-05',
  },
  {
    title: '"That means it\'s dead, right?!" | The API & Anchor Episode 2',
    url: 'https://www.youtube.com/watch?v=lb2SA-s-FB0',
    channel: 'Zuplo',
    date: '2024-11-26',
  },
  {
    title: 'Mistral, Vercel and Airbyte use this for SDKs',
    url: 'https://www.youtube.com/watch?v=IypqhL0uk1U',
    channel: 'Zuplo',
    date: '2024-11-21',
  },
  {
    title: 'How to write awesome API Guides! | Best Practices with Amit Jotwani',
    url: 'https://www.youtube.com/watch?v=Eag5diP4YS0',
    channel: 'Zuplo',
    date: '2024-11-14',
  },
  {
    title: "What's going on in the Gartner APIM Magic Quadrant!?",
    url: 'https://www.youtube.com/watch?v=8yaUQYaum4g',
    channel: 'Zuplo',
    date: '2024-11-13',
  },
  {
    title: 'HTTP Request Testing Tools | Postman Alternatives',
    url: 'https://www.youtube.com/watch?v=m7mZyuWN-oE',
    channel: 'Zuplo',
    date: '2024-11-07',
  },
  {
    title: 'OpenAPI Overlays? You need to watch this!',
    url: 'https://www.youtube.com/watch?v=Iiygq3r1QPs',
    channel: 'Zuplo',
    date: '2024-10-31',
  },
  {
    title: 'JSON Patch vs JSON Merge Patch',
    url: 'https://www.youtube.com/watch?v=uDnDyB5B290',
    channel: 'Zuplo',
    date: '2024-10-24',
  },
  {
    title: 'Claude Sonnet vs Gemini Pro | AI API Design Showdown',
    url: 'https://www.youtube.com/watch?v=LtWa_yPFu7k',
    channel: 'Zuplo',
    date: '2024-09-26',
  },
  {
    title: 'Does OpenAI o1 beat GPT-4o at OpenAPI?',
    url: 'https://www.youtube.com/watch?v=vdY9kYFx5qU',
    channel: 'Zuplo',
    date: '2024-09-13',
  },
  {
    title: 'ChatGPT vs Llama - Which LLM writes better OpenAPI?',
    url: 'https://www.youtube.com/watch?v=ms8atPLb2A4',
    channel: 'Zuplo',
    date: '2024-09-11',
  },
  {
    title: 'Building free API docs with Zudoku',
    url: 'https://www.youtube.com/watch?v=zRHBsuXSAWY',
    channel: 'Zuplo',
    date: '2024-09-05',
  },
  {
    title: 'Step-through Debugging for API Management!?',
    url: 'https://www.youtube.com/watch?v=dGMCQsUNpu0',
    channel: 'Zuplo',
    date: '2024-08-23',
  },
  {
    title: 'Improve OpenAPI specifications with Rate My OpenAPI',
    url: 'https://www.youtube.com/watch?v=i4tgrKe-RVs',
    channel: 'Zuplo',
    date: '2024-08-13',
  },

  // Historical / Conference
  {
    title: 'API Monetization in the AI Era',
    url: 'https://www.youtube.com/watch?v=pERlU28Iv4c',
    channel: 'Conference talk',
    date: '2025-12-02',
  },
  {
    title: 'Demo: Building an MCP Server with Martyn Davies — Key Moments from API Superstream',
    url: 'https://www.youtube.com/watch?v=Bk0xeBQPm7Q',
    channel: 'Conference talk',
    date: '2025-11-10',
  },
  {
    title: 'Martyn Davies: AI Is Coming For Your API',
    url: 'https://www.youtube.com/watch?v=Esdgf5AfJBU',
    channel: 'Conference talk',
    date: '2025-07-09',
  },
  {
    title: 'Adding Search to Your Jekyll Website',
    url: 'https://www.youtube.com/watch?v=mnySRW94NL4',
    channel: 'Conference talk',
    date: '2018-04-14',
  },
  {
    title: 'How to Web 2014: Hacking Your Way To Product Excellence',
    url: 'https://www.youtube.com/watch?v=hjgEPoByXs0',
    channel: 'Conference talk',
    date: '2015-01-18',
  },
  {
    title: 'Then and Now - Accelerators 101',
    url: 'https://www.youtube.com/watch?v=STiOWEMrBaw',
    channel: 'Conference talk',
  },
  {
    title: 'Panel: The API Economy @ FutureEverything',
    url: 'https://www.youtube.com/watch?v=XOMdFcAejO8',
    channel: 'Conference panel',
  },
]

export function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

export function getThumbnailUrl(url: string): string {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : ''
}
