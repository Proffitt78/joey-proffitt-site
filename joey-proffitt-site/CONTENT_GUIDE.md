# Work and journal content

Journal content lives in src/data/journal.ts. Each entry has a unique slug, series ID, title, description, and sections. A section supports paragraphs, an optional screenshot with alt text and caption, or the existing Ammiti gallery. Only entries in this file appear as published stories.

Images belong in public/images; reference them with /images/... paths. Use only images you own or have permission to publish. Review screenshots for private information before adding them.

The initial articles are starter copy based on Joey's existing portfolio and descriptions. Review wording and add design details and original logo assets before treating the journal as an AdSense application candidate. No ad scripts or public comment storage have been added. Feedback uses email.

Next assets: original Ammiti logo; The Dunes logo and any real uses; original/edited photography pairs and editing notes. Add project pages when those assets are ready rather than publishing empty galleries.

Run npm run build in the frontend directory to type-check and build. The existing GitHub workflow deploys pushes to main to Azure; review locally or through a pull request before merging. staticwebapp.config.json provides fallback routing for direct article links.


## Styling a specific article image

In src/data/journal.ts, an image section may include imageClass: 'journal-logo'.
That class is applied to the img element in src/views/JournalEntry.vue. Its scoped
style sets the logo maximum width to 240px and centers it. Change that max-width
to resize logos. Leave imageClass out to retain a full-width screenshot.
Add a separate class and CSS rule when a different image needs different styling.
The shared .feature-image rule in ContentLayout.vue applies to all feature images.

Use four spaces for indentation, one CSS declaration per line, and expanded
templates and content objects so the source remains easy to edit by hand.
