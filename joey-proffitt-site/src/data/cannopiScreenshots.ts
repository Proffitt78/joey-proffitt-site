export interface CannopiScreenshot {
  id: string
  src: string
  alt: string
  caption: string
}

// Replace files in public/images/cannopi to update these previews.
// Update the captions and alternative text when the screen content changes.
export const cannopiScreenshots: CannopiScreenshot[] = [
  {
    id: 'desktop-feed',
    src: '/images/cannopi/ap-screenshot.png',
    alt: 'Cannopi desktop community feed with posts, profile shortcuts, navigation, and a cannabis news sidebar.',
    caption: 'Community feed on desktop',
  },
  {
    id: 'device-mockup',
    src: '/images/cannopi/ap-screenshot-desk.png',
    alt: 'Presentation mockup showing Cannopi on a desktop monitor and a phone.',
    caption: 'Desktop and mobile presentation mockup',
  },
  {
    id: 'feed-filters',
    src: '/images/cannopi/breeder-profile-screenshot.png',
    alt: 'Verified breeder profile page',
    caption: 'Verifiable breeder profiles',
  },
  {
    id: 'discover-strains',
    src: '/images/cannopi/discover-strains.png',
    alt: 'Cannopi Discover Strains page',
    caption: 'Discover cannabis strains',
  },
]
