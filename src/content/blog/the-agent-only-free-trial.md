---
title: "The Agent-Only Free Trial"
date: "2026-05-23"
excerpt: "AI agents are about to become the most demanding free trial users your SaaS product has ever seen, and most companies aren't ready for them."
---

We're entering a phase of software adoption I don't think anyone has fully planned for. As AI agents become more capable and more commonly used for real decision-making, one pattern feels increasingly inevitable: the **agent-driven product evaluation**.

Here's the scenario. I ask my agent to find the best tool for a job. Maybe it's an API gateway, an email delivery service, or a payments provider. The agent doesn't just run a Google search and summarise the results. It does what a thorough human would do, but faster and without fatigue: it signs up for accounts, reads the documentation, builds something small with each service, and comes back with a verdict that covers not just features and pricing, but the actual experience of building with the tool.

I think we're closer to this than most people realise.

## How developers evaluate today

Right now, when I need to pick an API product, I start by finding a service that looks like it might fit. Then I go straight to the docs. I'm looking at sample code, examples, use cases, trying to get a feel for what implementation will actually look like. If the docs are good, I narrow it down and sign up for a free trial. Then I start building. The whole process takes hours, sometimes days. I accumulate accounts I never use. I hit friction points that I either push through or give up on, and I make a decision based on feel as much as features.

That evaluation work is exactly what agents are going to take over.

## What the agent actually does

The evaluation flow would look something like this:

1. **Discovery** - The agent searches public knowledge: documentation sites, developer forums, comparison articles, changelog histories. It forms an initial shortlist.
2. **Sign-up** - The agent creates accounts on each service. Autonomous sign-up. No human in the loop.
3. **Build** - Using whatever's available, REST APIs, SDKs, MCP servers, CLI tools, the agent builds a representative integration. Not a hello world; something close to the real use case.
4. **Assess** - The agent logs friction: unclear error messages, missing documentation, confusing abstractions, authentication complexity, rate limits hit unexpectedly.
5. **Report back** - I get a verdict that covers cost, features, *and* development experience. The final recommendation isn't just "it has the right features" but "it was the easiest to actually build with".

This last point matters. For the first time in the history of software procurement, developer experience will be quantified and reported back to the decision-maker automatically. I'll hear "this service had clearer error messages" in a way I never would have from my own quiet frustration, or from a human developer who just pushed through and never reported the friction upstream.

## How does an agent sign up autonomously?

This is the most immediate practical question. Most sign-up flows assume a human: CAPTCHA, email verification, multi-step onboarding wizards, "what's your use case?" dropdowns, credit card entry for trials, phone verification. Agents can handle some of this, but companies that lean on friction to qualify leads will find their products simply excluded from agent-driven evaluations.

But there's a deeper question here: how do we guide an agent towards signing up in the first place? And how do we prevent spam signups or random signups that waste resources?

I think Cloudflare's approach with their agent inbox points to a workable answer. Today, when I sign up for most services, I confirm my identity by clicking a link in an email. That pattern works for agents too. An agent receives a verification email, follows the link, and confirms the account. It's two-factor in the sense that the agent needed both the ability to create the account and access to the inbox receiving the confirmation. This preserves a familiar authentication pattern while remaining fully automatable.

The services that will win here are the ones with the lowest autonomous sign-up friction. API key on sign-up. No credit card for the trial tier. Email verification that's agent-handleable. The old VC wisdom of "frictionless onboarding" gets a new and much more literal interpretation.

## After signup: getting started

Once an agent has signed up, it needs to get productive fast. If I'm evaluating three services and my agent can build something real with one of them in minutes but gets lost in the other two, that's the evaluation right there.

What does an agent need after signup?

- **Where the docs are.** Not just a link to documentation, but structured, machine-readable documentation. An `llms.txt` file at the root of the domain. An OpenAPI spec. An MCP server that lets the agent introspect what the API can do without guessing.
- **Where the CLI or MCP server is and how to install it.** If your product has a CLI tool or an MCP server for managing accounts, deploying, or configuring, an agent needs to find that immediately. Not buried three links deep in a marketing site. A single command to install, a single command to authenticate.
- **How to debug with logs.** When something goes wrong, an agent needs to know where the logs are, how to read them, and what the error messages mean. Clear, parseable error messages that link to relevant documentation sections. If your errors say "Error 4003" with no context, the agent will log that as friction and move on.

The companies preparing for this aren't just writing good documentation. They're writing it for a reader that doesn't browse, doesn't scan, and has no patience for marketing copy mixed in with technical information. They're publishing MCP servers. They're maintaining `llms.txt` files. They're thinking about what a non-human consumer of their developer experience actually needs.

## Are companies ready?

In many ways, yes. A lot of companies are already agent-ready on the development side. Their documentation is published as discoverable, machine-readable markdown. Their CLI tools and MCP servers are solid and well-maintained. Their API surface area is expanding, not shrinking. More and more companies are recognising that they need to support agent-assisted software development right now, and they're investing accordingly.

The gap is in procurement. Account creation, signup flows, identity verification: these still assume a human in the loop. The tooling and documentation are increasingly ready for agents to build against, but the front door still has a human-sized frame. That's the part that needs to change.

## The signals are already here

I said we're closer to this than most people realise. Two recent releases make that case concrete.

[Stripe Projects](https://projects.dev/) launched recently and it reads like a blueprint for agent-driven provisioning. From the CLI, you can add and manage services: databases, hosting, auth, analytics. Credentials are generated and synced automatically. Billing is centralised.

If this sounds familiar, that's because it is. Heroku's `heroku addons` proved that developers will adopt services through a CLI when you remove the context switching. I saw that work firsthand during my time at SendGrid. The CLI was a distribution channel, and a remarkably effective one.

Stripe Projects is the same model, but the landing page says "Install skill" and includes a "Try prompt" section. That's not written for developers browsing a website. That's written for coding agents running in a terminal.

Then there's [auth.md](https://workos.com/auth-md) from WorkOS. A protocol for agent-driven user registration. An agent fetches your app's auth.md file, reads the supported authentication flows, and registers a user without touching a sign-up form.

Two flows: agent verified, where an identity provider vouches for the user with no human interaction, and user claimed, where the agent triggers a code and the human confirms. It builds on [ID-JAG](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-assertion-authz-grant), an IETF draft for identity assertion JWT authorization grants.

Auth.md matters not because it's tied to WorkOS, because it isn't. The protocol is open and independent of their infrastructure. What WorkOS has done is start a conversation that needed starting. ID-JAG is a dense IETF draft. Auth.md separates the vast OAuth specification into something a human, or an agent, can actually get their head around. That's a useful contribution regardless of whether auth.md itself becomes the standard.

Neither of these is an incremental improvement to existing developer tools. Stripe is building a provisioning layer designed around CLI-first service discovery. WorkOS is drafting an OAuth extension for agent authentication. When companies at this level start building infrastructure specifically for agent workflows, that's not a "maybe someday" signal. That's a sign that the next layer of the stack is being poured now.

## What good preparation looks like

If I'm building a developer tool or SaaS product and I want to be ready for the agent-driven evaluation:

- **Publish a well-structured OpenAPI spec.** This is the minimum. It gives agents a way to understand what your product can do without guessing.
- **Offer a CLI, an MCP server, or both.** If you already have a CLI, supporting it with complementary agent skills is a good move. If not, MCP can be the starting point, and agent skills still apply.
- **Use MCP to cover what CLI can't reach.** A lot of what agents need to do with a SaaS product, adding team members, creating API keys, managing projects, is still very UI-centric and sometimes out of scope for a CLI. That's where MCP really offers value. (I've written about this in more detail on [Zuplo's blog](https://zuplo.com/blog/cli-or-mcp).)
- **Write an `llms.txt`** file, a plain-text summary of your product, documentation structure, and key concepts, indexed at the root of your domain. Think of it as a cover letter for LLMs.
- **Audit your sign-up flow** for autonomous accessibility. What breaks if there's no human present?
- **Invest in error message quality**. An agent will encounter your errors, and it will include them in its report.
- **Keep your docs structured and factual**. Marketing copy in technical documentation is noise to an agent and actively reduces the quality of the evaluation.

## The bigger picture

The agent-only free trial is the logical endpoint of the developer experience movement. For years, companies have known that developers talk to each other, that word-of-mouth matters, that a bad onboarding experience creates detractors not just drop-offs. The agent evaluation compresses and formalises that feedback loop and puts it directly in front of whoever holds the buying decision.

Building something that a developer loves to use has always mattered. Building something that an agent evaluating on a developer's behalf loves to use is the next frontier, and the companies that understand this early will have a significant advantage.

The free trial hasn't gone away. It's just getting a new kind of user.