export type WritingItem = {
  title: string
  url: string
  site: 'zuplo' | 'nexmo' | 'sendgrid' | 'dev.to' | 'algolia'
  date?: string
}

export const writing: WritingItem[] = [
  // Zuplo
  {
    title: 'Arazzo Goes Cross-Protocol',
    url: 'https://zuplo.com/blog/arazzo-goes-cross-protocol',
    site: 'zuplo',
    date: '2026-05-21'
  },
  {
    title: 'Fire Email Alerts From a Zuplo Policy',
    url: 'https://zuplo.com/blog/sending-email-from-a-zuplo-policy',
    site: 'zuplo',
    date: '2026-05-14'
  },
  {
    title: 'MCP or CLI? What Actually Makes Sense for Developer Tools',
    url: 'https://zuplo.com/blog/cli-or-mcp',
    site: 'zuplo'
  },
  // Nexmo
  {
    title: 'Build a Facebook Bot with KoaJS, Nexmo Messages API & Dialogflow',
    url: 'https://www.nexmo.com/blog/2018/10/16/build-a-facebook-messenger-bot-with-messages-api-and-dialogflow-dr/',
    site: 'nexmo',
    date: '2018-10-16'
  },
  {
    title: 'First Look at the Nexmo Messages & Dispatch APIs',
    url: 'https://www.nexmo.com/blog/2018/10/10/nexmo-messages-dispatch-apis-dr/',
    site: 'nexmo',
    date: '2018-10-10'
  },
  {
    title: 'Add 2FA to Nuxt Applications using Nexmo Verify',
    url: 'https://www.nexmo.com/blog/2018/09/11/add-2fa-to-nuxt-with-nexmo-verify-dr/',
    site: 'nexmo',
    date: '2018-09-11'
  },
  {
    title: 'Record a Phone Message with Nexmo in PHP',
    url: 'https://www.nexmo.com/blog/2018/08/14/record-a-phone-message-with-php-dr/',
    site: 'nexmo',
    date: '2018-08-14'
  },
  {
    title: 'Handle Keypad Input (DTMF) with Nexmo in PHP',
    url: 'https://www.nexmo.com/blog/2018/08/10/handle-user-input-with-php-dr/',
    site: 'nexmo',
    date: '2018-08-10'
  },
  // Algolia
  {
    title: "Building an image search with Algolia & Google's Vision API",
    url: 'https://dev.to/martyndavies/building-an-image-search-with-algolia--googles-vision-api-37gm',
    site: 'algolia'
  },
  // SendGrid
  {
    title: '21 cities, 11 countries, 1 year as a Developer Evangelist',
    url: 'https://sendgrid.com/blog/one-year-developer-evangelist/',
    site: 'sendgrid'
  },
  {
    title: 'Email Tools For Early Stage Startups',
    url: 'https://sendgrid.com/blog/email-tools-early-stage-startups/',
    site: 'sendgrid'
  },
  {
    title: 'Hacking Your Way To Product Excellence',
    url: 'https://sendgrid.com/blog/web-conf-hacking-way-product-excellence/',
    site: 'sendgrid'
  },
  {
    title: "Migrating an app to SendGrid's template engine",
    url: 'https://sendgrid.com/blog/migrating-app-sendgrids-template-engine/',
    site: 'sendgrid'
  },
  {
    title: 'Sending Email from a Tessel using SendGrid',
    url: 'https://sendgrid.com/blog/sending-email-tessel-using-sendgrid/',
    site: 'sendgrid'
  },
  {
    title: 'Delivering Beers Hand Over Wrist',
    url: 'https://sendgrid.com/blog/delivering-beers-hand-wrist/',
    site: 'sendgrid'
  },
  {
    title: 'Get App Store Alerts by Email',
    url: 'https://sendgrid.com/blog/get-apple-app-store-alerts-email/',
    site: 'sendgrid'
  },
  {
    title: 'Inside The Hackathon Organisers Backpack',
    url: 'https://sendgrid.com/blog/inside-hackathon-organisers-backpack/',
    site: 'sendgrid'
  },
  {
    title: 'Embedding Images In Your Emails: The Facts',
    url: 'https://sendgrid.com/blog/embedding-images-emails-facts/',
    site: 'sendgrid'
  },
  {
    title: 'Sending email from static websites using Parse',
    url: 'https://sendgrid.com/blog/send-email-static-websites-using-parse/',
    site: 'sendgrid'
  },
  {
    title: 'Are You Event Ready? Ensure You Know With Loader.io',
    url: 'https://sendgrid.com/blog/are-you-event-ready/',
    site: 'sendgrid'
  },
  {
    title: 'Subuser reports and other @SendGrid tweets answered',
    url: 'https://sendgrid.com/blog/subuser-reports-sendgrid-tweets-answered/',
    site: 'sendgrid'
  },
  {
    title: 'Test SendGrid Webhooks with ngrok',
    url: 'https://sendgrid.com/blog/test-webhooks-ngrok/',
    site: 'sendgrid'
  },
  {
    title: 'Oh Cardless: My Business Card Email App',
    url: 'https://sendgrid.com/blog/oh-cardless-business-card-email-app/',
    site: 'sendgrid'
  },
  {
    title: 'Handy Little Library to Check Legit Email Domains',
    url: 'https://sendgrid.com/blog/a-handy-library-to-ensure-email-addresses-are-legit/',
    site: 'sendgrid'
  },
  {
    title: 'European Developer Evangelists: How to Hire One, How to Be One',
    url: 'https://sendgrid.com/blog/european-developer-evangelists-how-to-hire-one-how-to-be-one/',
    site: 'sendgrid'
  },
  {
    title: 'Build a Natural Language Processor and Keep Things Sorted',
    url: 'https://sendgrid.com/blog/build-a-natural-language-processor-and-keep-things-sorted/',
    site: 'sendgrid'
  },
]

export const siteLogos: Record<WritingItem['site'], { src: string; darkSrc?: string; alt: string; label: string }> = {
  zuplo: {
    src: 'https://cdn.zuplo.com/static/logos/brandmark.svg',
    alt: 'Zuplo',
    label: 'Zuplo'
  },
  nexmo: {
    src: '/logos/vonage.svg',
    alt: 'Vonage (formerly Nexmo)',
    label: 'Vonage / Nexmo'
  },
  sendgrid: {
    src: '/logos/sendgrid.svg',
    alt: 'Twilio SendGrid',
    label: 'SendGrid'
  },
  'dev.to': {
    src: '/logos/devdotto.svg',
    alt: 'dev.to',
    label: 'dev.to'
  },
  algolia: {
    src: '/logos/algolia.svg',
    alt: 'Algolia',
    label: 'Algolia'
  }
}
