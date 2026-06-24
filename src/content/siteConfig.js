// Centralized site configuration.
// Values marked TODO must be confirmed before launch. Keeping them in one
// place makes the next asset/copy/legal pass a single-file edit.
export const SITE = {
  name: 'auge',

  // auge ships under the same App Store record as DictateClip (same app,
  //   renamed). Every CTA on the site reads from this.
  appStoreUrl: 'https://apps.apple.com/us/app/id6758665113',

  // TODO(launch): set the final auge domain. The Vercel URL is kept for now
  //   so existing App Store privacy/terms/support links do not break.
  siteUrl: 'https://dictateclip-site.vercel.app',

  // Developer inbox for now (no auge.app domain yet). When the domain lands,
  //   a free Cloudflare Email Routing / ImprovMX alias (hello@auge.app ->
  //   this inbox) is the better-than-gmail upgrade.
  supportEmail: 'developergodmode@gmail.com',

  // TODO(launch): confirm legal entity name + jurisdiction.
  legalEntity: 'auge',
  legalLocation: 'Granada, Spain',

  ogImage: '/assets/og-image.jpg',
};
