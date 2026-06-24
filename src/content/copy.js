// Landing copy — adapted from the auge copy brief.
// Locked rules honored: "takes" as the language spine, "shapes" as the brand
// verb, "builds" only in functional subcopy, no "editor"/"story" positioning,
// functional CTAs only. Wrap the punch word in ** ** to render it as the single
// coral italic accent (one per headline, used sparingly).
export const COPY = {
  nav: {
    cta: 'Create video',
  },

  hero: {
    eyebrow: 'Captions + motion · made on iPhone',
    headline: 'Talk to camera. auge **shapes** the video.',
    subhead:
      'Add your takes. auge finds the strongest moments, cuts the dead air, and builds a finished video — captions, motion, ready to post.',
    // Three differentiators, condensed to one trust line under the CTA.
    trust: ['Made on iPhone', 'No credits', 'Your video never leaves your phone'],
    // Phrases the live kinetic-caption demo cycles through (active word last).
    captionCycle: [
      ['THIS', 'CAKE'],
      ['IS', 'INSANE'],
      ['WAIT', 'FOR IT'],
      ['BEST', 'IN TOWN'],
    ],
  },

  how: {
    label: 'HOW IT WORKS',
    headline: 'From raw take to ready‑to‑post, in **one** pass.',
    steps: [
      {
        n: '01',
        title: 'Add your take',
        body:
          'Record in the app or pick a clip from your camera roll. Talking‑head, vlog, recipe, demo — whatever you shoot.',
      },
      {
        n: '02',
        title: 'auge shapes it',
        body:
          'It transcribes every word, finds the moments that land, and choreographs captions and visuals timed to your speech.',
      },
      {
        n: '03',
        title: 'Post it',
        body:
          'Preview, tweak if you want, then export straight to TikTok, Reels, Shorts, or LinkedIn.',
      },
    ],
  },

  different: {
    label: 'WHY auge',
    headline: 'Made on iPhone. **No credits.** Yours alone.',
    points: [
      {
        title: 'Rendered on your iPhone',
        body:
          'auge composes and renders every frame on‑device with Metal. Instant preview, fast export — no waiting on a server.',
      },
      {
        title: 'No credits, no meter',
        body:
          "One flat subscription. Make every video you need — auge doesn't charge by the processed minute like the others.",
      },
      {
        title: 'Your video stays private',
        body:
          'Your footage never leaves your phone. Only the audio is transcribed — the video itself is yours alone.',
      },
    ],
  },

  showcase: {
    label: 'NOT JUST CAPTIONS',
    headline: 'Text, motion, and visuals — timed to **every word**.',
    body:
      "auge isn't a caption tool, it's a motion‑graphics director. Emphasis words punch in. Counters tick up. Emoji and your own images drop in — each one anchored to the exact word you say.",
    styles: ['Viral', 'Karaoke', 'Punch', 'Clean', 'Pill'],
    assets: ['Animated captions', 'Counters', 'Progress bars', 'Emoji', 'Your images'],
  },

  examples: {
    label: 'REAL TAKES',
    headline: 'Works on **anything** you shoot.',
    body:
      'Talking‑head, vlog, product review, recipe on the go — point the camera, talk, and auge does the rest.',
    cards: [
      { img: 'ex-travel', type: 'Vlog', words: ['BEST', 'VIEW'] },
      { img: 'ex-talk', type: 'Talking head', words: ['THE', 'SECRET'] },
      { img: 'ex-food', type: 'Food review', words: ['THIS', 'CAKE'] },
      { img: 'ex-vlog', type: 'On the go', words: ["LET’S", 'GO'] },
    ],
  },

  close: {
    line: 'Turn your takes into a video worth **posting**.',
    sub: 'Free to start. No credits, no watermark on Pro.',
  },

  footer: {
    tagline: 'auge',
    blurb: 'Captions and motion graphics for short‑form video — made on iPhone.',
  },
};
