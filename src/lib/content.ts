export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  intro: string;
  deliverables: string[];
  process: ProcessStep[];
  outcome: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  intro: string;
  features: { title: string; description: string }[];
  whoFor: string;
};

export const services: Service[] = [
  {
    slug: "custom-websites",
    name: "Custom Websites",
    tagline: "Designed from zero. Built to convert.",
    summary:
      "Hand-built websites engineered around your business — not squeezed into a template. Fast, search-ready, and designed to turn visitors into enquiries.",
    intro:
      "Most business websites are digital brochures: they exist, but they don't work. We build websites as operating assets — every page has a job, every section earns its place, and the whole thing is engineered to move a visitor from curiosity to contact. No page builders, no bloated themes, no template that a thousand other businesses are also using.",
    deliverables: [
      "Custom design — every screen drawn for your business, reviewed with you before a line of code",
      "Hand-coded build on a modern stack — fast on any device, on any connection",
      "Search-engine foundations — structure, speed and metadata done properly from day one",
      "Content shaping — we help you say the right thing, not just style what you have",
      "Analytics wired in, so you can see what the site is actually doing for you",
      "Launch, handover and a care window while it settles in",
    ],
    process: [
      {
        title: "Discover",
        description:
          "A working session on your business — who you serve, what a good customer looks like, what the website must achieve. We leave with a written brief you sign off, so there are no surprises later.",
      },
      {
        title: "Design",
        description:
          "We design the key pages first and put them in front of you early. You react to real screens, not abstract descriptions. Nothing gets built until the design is agreed.",
      },
      {
        title: "Build",
        description:
          "The approved design is hand-built with modern engineering — performance, accessibility and search-readiness are treated as requirements, not extras. You get a private preview link and watch it come together.",
      },
      {
        title: "Launch",
        description:
          "Domain, hosting, analytics, redirects — we handle the unglamorous parts so launch day is uneventful. Your old site goes down and the new one comes up without a gap.",
      },
      {
        title: "Care",
        description:
          "After launch we stay close: we watch how real visitors use the site, fix what needs fixing, and hand you a site you actually own — code, accounts, everything.",
      },
    ],
    outcome:
      "A website that loads fast, ranks properly, looks like it belongs to a serious company, and quietly does its job: bringing you enquiries.",
  },
  {
    slug: "branding",
    name: "Branding",
    tagline: "Look like the company you're becoming.",
    summary:
      "Identity design for businesses that have outgrown a DIY logo — name, mark, colour, type and voice, delivered as a system you can actually use.",
    intro:
      "Customers decide in seconds whether you look credible. A brand isn't a logo; it's the sum of every visual and verbal signal your business sends — and when those signals are inconsistent, trust leaks away quietly. We build identity systems that make a small company look deliberate, established and worth paying properly for.",
    deliverables: [
      "Brand strategy — positioning, audience and tone, agreed in writing before design begins",
      "Logo and mark — primary, secondary and icon versions, in every format you'll ever need",
      "Colour and typography system chosen for screens, print and signage alike",
      "Voice and messaging guide — how your business sounds, with real example copy",
      "Brand guidelines document your whole team (and any future supplier) can follow",
      "Ready-to-use assets: social profiles, business cards, templates for the documents you send",
    ],
    process: [
      {
        title: "Research",
        description:
          "We study your market, your competitors and your customers. Good branding is a positioning decision before it's a design decision — we find the space you can credibly own.",
      },
      {
        title: "Strategy",
        description:
          "A short, sharp brand strategy: what you stand for, who it's for, and why anyone should care. You approve this before any visuals exist, so design debates have an anchor.",
      },
      {
        title: "Identity",
        description:
          "We design the visual system — mark, colour, type — and present it in context: on a storefront, an invoice, a phone screen. You see how it lives, not just how it looks on a slide.",
      },
      {
        title: "Guidelines",
        description:
          "Everything is documented in a practical guideline pack — clear enough that anyone touching your brand keeps it consistent without asking you.",
      },
      {
        title: "Rollout",
        description:
          "We apply the new identity across your touchpoints — website, social, print, templates — so the change lands everywhere at once, not in awkward stages.",
      },
    ],
    outcome:
      "A coherent identity that raises what customers expect to pay before you've said a word — and a system your business can grow into, not out of.",
  },
  {
    slug: "growth-marketing",
    name: "Growth Marketing",
    tagline: "Marketing measured in customers, not likes.",
    summary:
      "Search, local visibility and paid campaigns run with an engineer's discipline — every pound tracked from click to customer.",
    intro:
      "Most small-business marketing fails the same way: money goes in, activity happens, and nobody can say what came back. We run marketing like a system — instrument first, then experiment, then scale only what provably works. If a channel can't be measured, we treat it with suspicion.",
    deliverables: [
      "Growth audit — where your customers actually come from today, and what it costs you",
      "Local and organic search — getting found by people already looking for what you do",
      "Paid campaigns (Google, Meta) built, run and reported honestly",
      "Landing pages designed to convert the traffic you pay for",
      "Full-funnel tracking: every enquiry traced back to the channel that produced it",
      "A monthly report in plain language: what we spent, what came back, what changes next",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Before spending anything, we map your current funnel: where visitors come from, where they drop off, and what a customer is worth to you. This tells us where growth is cheapest.",
      },
      {
        title: "Plan",
        description:
          "A focused plan with a small number of bets, each with a budget, a hypothesis and a kill criterion. You'll know exactly what we're testing and why.",
      },
      {
        title: "Launch",
        description:
          "Campaigns, landing pages and tracking go live together. Nothing launches without measurement — otherwise we'd be guessing with your money.",
      },
      {
        title: "Measure",
        description:
          "We read the numbers weekly and report monthly in plain English: cost per enquiry, cost per customer, and what we're changing. Losing bets get cut fast.",
      },
      {
        title: "Scale",
        description:
          "Winning channels get more budget, methodically. Growth compounds when you double down on what's proven instead of chasing what's new.",
      },
    ],
    outcome:
      "A marketing engine where you can point at any customer and say which channel brought them in — and what they cost you.",
  },
];

export const products: Product[] = [
  {
    slug: "booking-system",
    name: "Booking System",
    tagline: "Your calendar, filling itself.",
    summary:
      "A booking engine built into your website — customers see real availability and book in seconds, day or night, without calling you.",
    intro:
      "Every appointment that requires a phone call is an appointment you can lose — to a busy line, to opening hours, to a customer who simply couldn't be bothered. Our booking system puts your real availability on your website and lets customers book, reschedule and cancel themselves. It syncs with the calendar you already use, so double-bookings can't happen.",
    features: [
      {
        title: "Live availability",
        description:
          "Customers only see slots that are genuinely open. The system reads your working hours, buffer times and existing commitments in real time.",
      },
      {
        title: "Two-way calendar sync",
        description:
          "Connects to the calendar you already run your life on. A booking made anywhere appears everywhere — no copying, no clashes.",
      },
      {
        title: "Instant confirmations",
        description:
          "The moment a customer books, both sides get a confirmation with all the details. No 'did that go through?' phone calls.",
      },
      {
        title: "Self-serve rescheduling",
        description:
          "Customers move or cancel their own appointments within rules you set — freeing slots instead of silently no-showing.",
      },
      {
        title: "Built for your services",
        description:
          "Different durations, prices, staff members and locations per service — configured once, then it just runs.",
      },
    ],
    whoFor:
      "Any business that runs on appointments — salons, clinics, trades, consultants, studios — and is tired of being its own receptionist.",
  },
  {
    slug: "ai-assistant",
    name: "AI Engineered Assistance",
    tagline: "Not a chatbot. A colleague that never misses a call.",
    summary:
      "An AI assistant engineered around your business — it answers the calls and messages you can't, holds a real conversation, and books real appointments.",
    intro:
      "Most 'AI chatbots' are decision trees wearing a costume — press 1, press 2, sorry-I-didn't-catch-that. What we build is different: an assistant engineered specifically for your business, with your services, your prices and your live calendar in its head. When you miss a call, it answers, holds a natural conversation, answers real questions, and books the appointment — then hands you a tidy record of what happened. It's the difference between a vending machine and a member of staff.",
    features: [
      {
        title: "Answers when you can't",
        description:
          "Missed calls roll to the assistant instead of voicemail. Most callers who reach voicemail never call back — the assistant makes sure they never have to.",
      },
      {
        title: "Real conversation, not menus",
        description:
          "Callers speak normally and get spoken to normally. No keypresses, no rigid scripts — the assistant understands context and asks sensible follow-ups.",
      },
      {
        title: "Knows your business",
        description:
          "Trained on your services, prices, policies and availability. It answers like someone who works there, because in every way that matters, it does.",
      },
      {
        title: "Books, not just chats",
        description:
          "It checks your live calendar mid-conversation and confirms an actual appointment — not 'someone will call you back'.",
      },
      {
        title: "Every conversation logged",
        description:
          "You get a summary of every call it handles: who called, what they wanted, what was booked. Nothing happens behind your back.",
      },
    ],
    whoFor:
      "Owner-operated businesses where the person doing the work is also the person answering the phone — which means the phone loses.",
  },
  {
    slug: "email-automation",
    name: "Email Automation",
    tagline: "The follow-up you never have time for.",
    summary:
      "Confirmations, reminders and follow-ups that send themselves — cutting no-shows and keeping customers warm without you lifting a finger.",
    intro:
      "No-shows are rarely malicious — people just forget. And lapsed customers rarely left — you just never followed up. Both problems have the same fix: the right message at the right moment, every time, automatically. Our email automation handles the communication a well-run business should be doing but no busy owner actually has time for.",
    features: [
      {
        title: "Booking confirmations",
        description:
          "Every appointment confirmed instantly, with the details customers actually need — time, place, what to bring, how to reschedule.",
      },
      {
        title: "Smart reminders",
        description:
          "Reminders timed to actually reduce no-shows, with one-tap confirm or reschedule — so an empty slot becomes a filled one, not a surprise.",
      },
      {
        title: "Post-visit follow-ups",
        description:
          "A well-timed thank-you, aftercare note or rebooking nudge after each appointment — the touch that turns one visit into a habit.",
      },
      {
        title: "Win-back sequences",
        description:
          "Customers who haven't returned in a while get a gentle, personal-feeling reason to come back — automatically.",
      },
      {
        title: "Written once, sent forever",
        description:
          "We write the messages with you in your voice. After that, the system does the remembering.",
      },
    ],
    whoFor:
      "Businesses losing money to forgetfulness — theirs or their customers'. If no-shows and one-time visitors are your leak, this is the plug.",
  },
  {
    slug: "review-management",
    name: "Review Capture & Management",
    tagline: "Your best customers, doing your marketing.",
    summary:
      "Systematically turns happy customers into public reviews — and gives you one place to see and respond to everything said about your business.",
    intro:
      "Your happiest customers almost never leave reviews — they're happy, so they move on with their day. The unhappy ones always do. That imbalance quietly costs you every customer who checked your rating before choosing a competitor. Our review system fixes the imbalance: it asks every customer at the right moment, makes leaving a review effortless, and puts every piece of feedback in one place so nothing goes unanswered.",
    features: [
      {
        title: "Asks at the right moment",
        description:
          "Review requests go out automatically after an appointment, while the experience is fresh — the single biggest factor in whether people actually respond.",
      },
      {
        title: "Effortless for customers",
        description:
          "One tap from the message to the review form. Every extra step loses half your reviewers; we remove all of them.",
      },
      {
        title: "One inbox for your reputation",
        description:
          "Reviews from across the platforms your customers use, in one dashboard — no more checking five sites or missing a complaint for a week.",
      },
      {
        title: "Respond in minutes",
        description:
          "Reply to any review from one place. Fast, human responses to negative reviews are read by every future customer — we make them easy.",
      },
      {
        title: "Watch your rating climb",
        description:
          "Track your average rating and review volume over time, and see the effect on enquiries. Reputation becomes a number you manage, not a thing that happens to you.",
      },
    ],
    whoFor:
      "Any business chosen from a search results page — where the difference between 4.2 stars and 4.8 stars is the difference between them and you.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
