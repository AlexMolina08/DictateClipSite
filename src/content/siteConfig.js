// Centralized site configuration.
// Values marked TODO must be confirmed before launch. Keeping them in one
// place makes the next asset/copy/legal pass a single-file edit.
export const SITE = {
  name: 'auge',

  // TODO(launch): replace with the real auge App Store URL/ID.
  //   If auge is a new App Store record (not the old DictateClip id6758665113),
  //   put its URL here. Every CTA on the site reads from this.
  appStoreUrl: 'https://apps.apple.com/us/app/id6758665113',

  // TODO(launch): set the final auge domain. The Vercel URL is kept for now
  //   so existing App Store privacy/terms/support links do not break.
  siteUrl: 'https://dictateclip-site.vercel.app',

  // TODO(launch): confirm the auge support email.
  supportEmail: 'support@auge.app',

  // TODO(launch): confirm legal entity name + jurisdiction.
  legalEntity: 'auge',
  legalLocation: 'Granada, Spain',

  ogImage: '/assets/og-image.jpg',
};
