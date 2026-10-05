export interface AmmitiScreenshot {
  id: string
  src: string
  alt: string
  caption: string
}

// Replace files in public/images/ammiti to update these previews.
export const ammitiScreenshots: AmmitiScreenshot[] = [
  {
    "id": "login",
    "src": "/images/ammiti/ammiti-login.png",
    "alt": "Ammiti sign-in screen.",
    "caption": "Sign in to Ammiti"
  },
  {
    "id": "profile",
    "src": "/images/ammiti/ammiti-profile.png",
    "alt": "Ammiti member profile with a cover image, profile photo, and media gallery.",
    "caption": "Member profile and media"
  },
  {
    "id": "edit-profile",
    "src": "/images/ammiti/ammiti-edit-profile.png",
    "alt": "Ammiti profile editor for updating member information.",
    "caption": "Profile editing"
  },
  {
    "id": "post-details",
    "src": "/images/ammiti/ammiti-post-details.png",
    "alt": "Ammiti post detail view with the surrounding conversation.",
    "caption": "Post details and conversation"
  }
]
