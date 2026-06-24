**Last updated: June 24, 2026**

auge ("auge", "we", "us") makes an iOS app that turns a video you record or
import into a finished short‑form video — adding word‑timed captions and
animated visual elements, then rendering the result on your iPhone. This
Privacy Policy explains what the app processes, what leaves your device, who
processes it, and the choices you have.

We designed auge to keep your footage on your phone. The short version: **your
video never leaves your device.** Only the *audio* (for transcription) and the
resulting *transcript text* (for the AI that designs the visuals) are sent to
be processed, and even those are not stored after your video is made.

---

## 1. The principle: your video stays on your iPhone

auge renders your video entirely on your device using Apple's Metal graphics
framework. There is no server‑side video rendering. As a direct consequence:

- Your **original video is never uploaded.** When you import a clip, auge
  extracts its audio track on the device, transcribes that audio, and then
  deletes the temporary audio file. The video file itself is never attached to
  any network request.
- Any **images, B‑roll, or overlays you add** stay on your device.
- Your **finished, exported video is produced on your device** and saved to your
  photo library only when you choose to export it.

The only things that ever leave your iPhone are described in Section 2.

---

## 2. What we process, and where

### a. Audio — for transcription (leaves the device)

To caption your video, auge needs a transcript. The extracted audio (an `.m4a`
file) is sent over an encrypted connection to **our processing backend**, which
forwards it to our speech‑to‑text provider, **ElevenLabs**, to produce a
word‑level transcript with timings. The audio is processed to generate the
transcript and is **not retained** by us after the transcript is returned. See
ElevenLabs' practices in Section 4.

### b. Transcript text and timings — for the AI that designs the visuals (leaves the device)

Once the transcript exists, auge sends the **transcript text and per‑word
timings** (not your audio, not your video) to our backend, which uses a
third‑party large‑language‑model (LLM) provider to compute the editorial
plan — i.e. which words to emphasize and where animated elements should appear
(see Section 3). The transcript is processed transiently to produce that plan
and is **not stored** in our job records.

### c. Video, images, and overlays — stay on device

As described in Section 1, these are never transmitted.

### d. Diagnostics (crash and error reports)

We use **Sentry** to receive crash and error reports so we can fix bugs. These
reports are configured to **exclude your content**: no screenshots, no view
hierarchies, no request bodies, and no transcript, audio, or video. They
contain technical information such as the type of error, the processing stage,
device/OS model, and an anonymous generation identifier.

### e. Product analytics (anonymous)

We use **TelemetryDeck** to understand, in aggregate, how features are used
(for example, how often an export succeeds). These events are **anonymous** by
design — they carry only a fixed set of bounded, non‑identifying values and
**cannot contain** your text, file names, audio, or video. We do not assign you
an advertising identifier and we do **not** use App Tracking Transparency / the
IDFA.

### f. Notifications

If you allow notifications, auge registers an anonymous **Apple Push
Notification service (APNs)** device token so we can tell you when your video is
ready. The notification we send contains only fixed text and a job
identifier — never any of your content.

### g. Purchases

Subscriptions are processed by **Apple**. We receive your subscription *status*
from Apple (active / not active) to unlock Pro features. We do **not** receive
or store your name, payment‑card number, or billing address.

### h. Local data on your device

The following stay on your iPhone and are not uploaded by us: your projects and
clips, the transcript text and a short transcript snippet (stored so you can
revisit a project), your chosen caption styles and edits, and a thumbnail.

### i. Permissions auge may request

| Permission | Why |
| --- | --- |
| **Camera** | To record video for your reels. |
| **Microphone** | To record audio so it can be transcribed into captions. |
| **Speech Recognition** | To align your spoken words with on‑screen captions. |
| **Photo Library (Add)** | To save your finished video to your photo library. |

You can change these at any time in **iOS Settings → auge**. Declining a
permission may disable the related feature.

---

## 3. How the AI works (in plain language)

We think you should understand what the app actually does. auge runs a
multi‑stage pipeline; most of it runs **on your device**, and only the two
cloud steps below send anything off your phone:

1. **Capture** — you record or import a video; auge extracts the audio. *(on device)*
2. **Transcribe** — the audio is converted to text with precise per‑word
   timings. *(cloud — our backend → ElevenLabs)*
3. **Script & Align** — auge structures the transcript into a timeline and locks
   each word to an exact start and stop time. *(on device)*
4. **Plan** — an AI "editorial agent" reads the transcript and timings and
   proposes the choreography: which words become emphasized or animated
   "hero" text, and when and where contextual visual elements (such as
   counters, progress bars, emoji, or images) should appear, always anchored to
   a specific spoken word. *(cloud — our backend → an LLM provider)*
5. **Compile, Validate, Evaluate, Render** — auge turns that plan into a
   low‑level render program, checks it, computes every animation frame‑by‑frame,
   and paints the pixels with the Metal GPU to produce your preview and your
   exported file. *(on device)*

The visual design system, the rendering engine, and the way the editorial
plan is compiled into motion graphics are **auge's proprietary technology**.
The cloud steps above rely on third‑party providers (ElevenLabs for
transcription; an LLM provider for the editorial plan), described next. The AI
decides only emphasis and the placement of visual elements — it does not see or
upload your video.

---

## 4. Service providers (sub‑processors)

We share the minimum necessary data with the following providers, each acting
on our behalf or as an independent processor:

| Provider | Purpose | What it receives |
| --- | --- | --- |
| **Our backend host (Render)** | Runs our processing API | Audio (for transcription); transcript text + timings (for the plan) |
| **ElevenLabs** | Speech‑to‑text transcription | Audio audio track only |
| **LLM provider** | Computes the editorial plan | Transcript text + timings only |
| **Apple** | App distribution, subscriptions, push delivery | Purchase/subscription status; push token |
| **Sentry** (EU region) | Crash and error diagnostics | Technical error data only — no content |
| **TelemetryDeck** | Anonymous product analytics | Anonymous, non‑identifying usage events |

We do not sell your personal information, and we do not use it for third‑party
advertising.

> Note for review: the production LLM provider should be named explicitly here
> before launch (the app supports several configurable providers).

---

## 5. Data retention

- **On your device:** your projects, clips, transcripts, and exports remain
  until **you** delete them. Deleting a project in the app permanently removes
  its video, clips, transcript, and all associated files from your device.
- **Audio and video on our servers:** **none retained.** Audio is processed for
  transcription and not kept; video is never uploaded.
- **Transcript text on our servers:** processed transiently to compute the plan
  and **not stored** in our job records.
- **Job state on our servers:** to coordinate processing and notify you, we keep
  ephemeral job records (status, timestamps, and the resulting visual plan) in a
  temporary store that **auto‑expires after 24 hours.** These records do not
  contain your audio or video.

---

## 6. Your rights and choices

- **Delete your data:** delete any project in the app to remove it and its files
  from your device. Because we do not retain your audio, video, or transcripts
  on our servers, deletion on your device removes your content.
- **Permissions:** manage camera, microphone, speech, and photo access in iOS
  Settings.
- **Analytics and diagnostics:** these are already anonymized; you can also limit
  data sharing through your device settings.
- **EU/EEA/UK residents:** because we operate from Spain, the GDPR applies. You
  have the rights of access, rectification, erasure, restriction, portability,
  and objection. As we do not maintain accounts or store identifiable content on
  our servers, most data subject to these rights resides on your device under
  your control; contact us (Section 10) with any request.

We have no account system. auge does not require you to sign in, and we do not
ask for your name, email, or phone number to use the app.

---

## 7. Children

auge is not directed to children. It is intended for users aged 13 and older
(or the minimum age of digital consent in your country, if higher). We do not
knowingly collect personal information from children.

---

## 8. Security

Data in transit is protected with industry‑standard encryption (HTTPS/TLS).
Because your video and most of your data stay on your device, the most
important protection is your device's own security (passcode, Face ID, and
encrypted storage). No method of transmission or storage is completely secure,
and we cannot guarantee absolute security.

---

## 9. International data transfers

We operate from Spain. Some of our service providers (Section 4) process data on
servers in the United States or other countries. Where data is transferred
internationally, we rely on appropriate safeguards permitted under the GDPR,
such as the European Commission's Standard Contractual Clauses.

---

## 10. Changes and contact

We may update this policy as the app evolves. We will revise the "Last updated"
date above and, for material changes, provide a more prominent notice.

Questions or requests about privacy: **developergodmode@gmail.com**

auge is operated by an independent developer based in Granada, Spain.

> Before launch, confirm: the legal entity name and registered address, and the
> live LLM provider name (the app supports several configurable providers).
