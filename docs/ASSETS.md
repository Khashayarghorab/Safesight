# Assets and provenance

## Supplied brand materials

The original SafeSight horizontal SVG is used unchanged in `public/brand/safesight.svg`. The white variant changes only the fill, as permitted by the supplied guide. The favicon uses the original path with a viewBox around the existing geometric S symbol; no mark geometry was redrawn.

The supplied brand guide and reference board informed the black-and-white editorial treatment and selective use of #FFC107. Contact names, addresses, and other sample details in mockup artwork were not treated as facts.

## Generated site imagery

Created with the built-in image-generation tool, then encoded as WebP for local website delivery. These scenes are illustrative, not evidence of a SafeSight customer, employee, pilot, product, or project.

### Hero
Saved website asset: `public/images/construction-hero.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: premium B2B construction safety website full-width hero background. Create a cinematic editorial architecture photograph, wide landscape 16:9, of a contemporary mid-rise building under construction and two tower cranes viewed at a slight upward angle from an adjacent empty site. Strict black-and-white photography, silver highlights, deep charcoal shadows, beautiful realistic construction materials, subtle film grain, overcast sky. Composition: building framework and one tall crane occupy the RIGHT half, construction slabs enter from lower right; LEFT half is uncluttered dark shaded negative space (a shadowed concrete retaining wall with faint site texture) to allow large white website text to be overlaid in HTML. Dramatic but credible, expensive architecture magazine art direction, crisp geometry, natural detail, wide lens. No people, no logos, no text, no UI, no graphics, no hazard bounding boxes, no yellow painted elements. The image is an illustrative setting, not documentation of a real company project.

### Field perspective
Saved website asset: `public/images/site-perspective.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: editorial image for a premium construction safety B2B website. Create a black-and-white documentary-style photograph in landscape 4:3. A construction site supervisor in a white hard hat, clear protective safety eyewear, long-sleeve work jacket and reflective high-visibility vest, shown from the back and three-quarter profile on the LEFT third, looking towards a large concrete frame under construction. Frame from waist up, real natural skin texture with no recognizable identity, elegant soft overcast daylight. Construction structure recedes into right side, realistic grey steel/concrete, human-scale and reassuring. Design-magazine photography, not stock-photo handshake, no posing or looking at camera, no dramatic danger, no active lifting, no missing guardrails, no text, no logos, no watermarks, no technology overlays. This is a generic illustrative scene, not a real SafeSight product, customer, employee, or project.

## Fonts

Geist Sans and Geist Mono are self-hosted from the font distribution bundled with the installed Next.js package. The [official Geist license](https://github.com/vercel/geist-font/blob/main/LICENSE.txt) is included at `public/fonts/LICENSE.txt`. No external font request is made by the site.


## Research affiliation logos

The owner supplied the EPM Research and University of Calgary logos and confirmed that
SafeSight is being developed at EPM Research at the University of Calgary. Original PNG
artwork is self-hosted unchanged at public/brand/epm-research.png (661 x 461) and
public/brand/university-of-calgary.png (1292 x 964). Source files: epm.PNG and
Logo-2 - Copy.png. Responsive presentation preserves proportions and original colours.
No new affiliation, certification, funding, customer or pilot claim is inferred from the logos.


## SafeSight video

Owner-supplied YouTube video: https://youtu.be/PQEO9dbzTLs
The homepage uses a local illustrative cover (`/images/site-perspective.webp`),
not a video frame. The youtube-nocookie.com player mounts only after Play is selected.
No video file or remote thumbnail is stored in the repository. The privacy notice
describes the optional third-party player and its data flow.

## RSS blog cover images

The Research page can display RSS enclosure images from allowed Substack publisher image
hosts. These covers are attributed through their article cards and link to the original post.
They are fetched by the visitor browser, use no-referrer requests and are disclosed in the
website privacy notice. Original SafeSight, EPM Research and university logos remain local.

The curated GenAI Dragon card now specifies the original article image from EPM Research:
https://substack-post-media.s3.amazonaws.com/public/images/8aefd1d4-9e76-4720-95ff-314ff19751e9_1287x1614.png
A curated cover is retained when its RSS item omits an image, matching article paths across
the custom domain and Substack domain. A valid feed-provided cover still takes precedence.

The card uses the publisher CDN image URL returned by the original article image link;
the underlying S3 object above is the source image identity. The CDN image was accessible
in source retrieval; direct S3 retrieval could not be verified from this environment.
