# Charles R Morton Electric WP Theme
# Author: Jamie Cooper
# Email: jamie@excitaprint.com
# Dev Env: Win 11/WP Local
# Tech Stack: WordPress, PHP, JS/CSS/HTML

#### Important:

- Use render.php for the 100+ generated pages
  > This helps not having to open & resave each file on changes
- Use save.js for blocks like hero-block, static stuff.
- Block naming convention:

  > wp-block-blockname

- Docs:
  > [Save.js vs Render.php](https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/) > [NPM `@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) > [Block Metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) > [Import WP Site into Local](https://localwp.com/help-docs/getting-started/how-to-import-a-wordpress-site-into-local/)

## 1/23/26

- Use css variables for design system
  > This way you have two font colors, two fonts, etc.
  > This is the design engineer design system hack
  > Variables are unique, not reserved! Have to remember them.
- Use global-vars.css for design system?
- Design entire system including links
  > Include buttons? What else? --button-a
- All files, blocks, stylesheets must be registered in functions.php
- **Common designer/developer agency typography sizes in 2026**:
  > h1,Page Title,48px to 64px,32px to 40px
  > h2,Section Header,32px to 40px,28px to 32px
  > h3,Sub-header,24px to 28px,20px to 24px
  > p,Body Text,18px,16px to 18px
  > `rem` to PX
  > 1rem,16px,Browser default / Small text
  > 1.125rem,18px,Modern Body Text (p)
  > 1.25rem,20px,h4 or Large Paragraphs
  > 1.5rem,24px,h3 (Mobile)
  > 2rem,32px,h2 (Mobile) or h3 (Desktop)
  > 2.5rem,40px,h1 (Mobile)
  > 3rem,48px,h2 (Desktop)
  > 4rem,64px,h1 (Desktop)
- What fonts?
  > See TE site, other competitors
- Accent colors for buttons?
  > Additional colors needed?
- Hero block file structure
  > hero-block > hero.css, index.js, save.js
  > index.js <-- React syntax here
  > apply styles index.js `useBlockProps`
- Functions.php order matters
  > enqueue (front end) '/global-vars.css' & '/styles.css' THEN
  > enqueue (editor side) React JSX Gutenberg Blocks
  > enqueue index.js > 'import thisBlock'
- index.js
  > This is where hook up
- How to get blocks to appear in order!
  > This is final part
- Make 'Hello world' block first &
  > Add it to page via whatever 'template' method
  > Make this block edit.js (JSX)
  > define 'viewScriptHandle' in block reg
- Block naming convention:
  > wp-block-blockname
- <p> max-width: 60ch;
- <h1> max-width: 60ch; 
  > Supposed max width for paragraphs.

## 1/23/26 4PM

- Try to load theme and open block in WP Local
- Open Sans Light 300, Poppins Bold 700,

## 1/24/26

- See Gemini global grid CSS!
  > 6 column grid, have margin-left be anchor
  > This way text spills over and isn't,
  > constrained by the grid.

## 1/25/26

- **You can create custom blocks with custom blocks**
  > block.json > "parent": [ "core/group" ]
  > This allows block to only be available to editor within another block
- ICONS! https://fonts.google.com/icons
  > Add these to hero buttons
  > Arrow Right Alt - request quote button
  > Call - call us button
- @wordpress/scripts has hot reloader
  > `npm start --hot` enables fast refresh on dev server
  > `npm run test:e2e` all end to end tests, good for futureproof WP updates
- Google API for rating?
- IMPORTANT: `useBlockProps` is Mandatory for the wrapper
  > All other divs/classes can be className=''

## 1/26/26

- Decrease Google badge size
- Icons, graidient buttons, then invoice
- Social icons? Yes

## 1/28/26

- Smooth media queries
  > Set breakpoints min-max, no gray areas
- Try stroke around font via CSS very low opacity?
  > Can also try slight backdrop on font itself, not <p>

## 1/29/26

- Get services block w/ bg --white-a only, to post to site
  > Finish save.js/index.js & deploy :)
- Stars aligned good enough, add services block

## 1/30/26
- Cleaning up syntax, comments & formatting
- Modified functions.php
  > Moved hot-reload server config to top of file
- Services block

  > Writing architecture & carousel design

- Fixed $version bug, `function use ($version)`
  > To use global var in scoped functions

## 1/31/26
- Don't need index-template.php & index.php, right?
- BUG: IMAGES EXPORTING TO BLOCKS/HERO INSTEAD OF BUILD?
- BUG: ICONS/FONTS NOT LOADING IN EDITOR

## 2/1/26
- `filter/backdrop-filter: lightness 50%/lightness(50%)`
  > Lighten bg, keep card normal for readability

## 2/3/26
- View.js, if menu item selected, invert CSS onToggle
- Canvas/JS: draw diagonal repeating lines or
  > Google Material Symbols: diamond pattern, repeat across div
  > 'plug, wrench, ev station, saw, handyman, powertools drill'

## 2/4/26
- Made Figma mock, what is it looking like?
  > Go forward with bars, modern react style cards?
  > Diff grays on ea that fade out?

## 2/5/26
- Registering blocks to wrong folder?

  > Should it point to build folder instead (functions.php)
  > Block.json should be in src folder?
  > This should get console logs to work

- BLOCK.JSON is in main dir of ea block

  > Block.json also had wrong file:./ syntax
  > Pointed to wrong thing

- Padding on wp-block-services is causing BUG BUT...
  > When you take it off, grid doesn't line up!
- Add Title to services block! See current site/TE Cert

## 2/6/25
- W/4 badges; incorporate them into home
  > Can do this with mini sections

## 2/7/26
- Icons in service buttons? Possibly!
- Used line-height in each typography div
  > This allows you to decrease space between p, h1, etc...
  > when creating headlines, mastheads, paragraphs, etc.
- Added menu, footer
  > Decide on footer color, shape design; see Reliable Restoration
- Need logo placeholder to show up until get hi-res sorted

- Next Steps:
  > Move hero down some so it can breath
  > Add margin-top?

## 2/8/26
- Don't forget about **REGEX** for type tweaks

  > Global script after page load! (?)

- Add home button to menu, home button action to logo

## 2/11/26
- Add CTA before footer?
- CRED BLOCK & add social solid icons to footer bottom first column

## 2/12/26
- Logo/num more in middle!
- Gradients; red accent to blues

## 2/15/26

- Bash cmd for block files:

  > mkdir -p build src && touch block.json src/{index.js,save.js,view.js,style.css}

- Sections left:
  > About; SEE TE CERT
  > Services; will encompass 'explore projects' for simplicity -- redundant
  > Call-to-Action; after Badges? see crmorton site -- call & quote again at bottom after recogntion -- use gradient? Path mask/clip? SVG of tool blown up opacity in BG?

> Finish reviews, recognition

- Sections Ommitted:

  > Extra Review
  > Projects

- See: "Reach Out for Reliable Restoration" CTA/FIELDPULSE FORM!

## 2/18/26
- At 1393px cta starts to clip on right side but it still has room on left side why is that -- see
- Services, see new sketch
- Hero polish; curved at bottom like map? maybe yes! top too?

- Blends for bringing two solid color sections together as a gradient?

  > services to coupon -- light white/blue to dark?
  > Hero gradient into services bg?

- _Responsiveness after design approval_, as to not build twice
- Send photos to Charles for photog, PDF all laid out

## 2/24/26
- Write script for all pages, and all text; store in JSON, links to images;
  > D/l images at end and put in /assets
- Use current images, but write list where ones need changing like Forest Park, etc.

- EOD: did Charles look at & approve desktop Home page -- CTA at bottom & popups coming at end
  > _If yes then make Home page repsonsive this week!_
- Number more in center

- Home final fixes:

  > Squigglies at top of Coupon seciton
  > _Home approved, start RESPONSIVENESS_

- BUG: Get squiggles on top of coupon div
  > Now they're rendering very weird shifting entire section block

## 2/25/26
- Move photo down, increase over 100% & move it inside of wrapper How?

## 2/27/26
- Mobile header/menu items on same y-axis, but not in viewport still
- Margin needed to be reset to 0, width set to vw not 100%
  > For Whatever reason the preceeding props caused it to stretch to desktop size
- Padding on mobile header? From where? Test it

- Smaller rounded corners on mobile for sections/blocks

## 2/28/26
- CTA num, CTA clamp: add global var for mobile typography?
- Increased h3 global var for serv mast
- Rounded corners on coupon top for mobile, match hero; 88px too big
- Edge not loading dev server

- Mobile services:
  > Have images slide on mobile
- Desktop services:
  > Tweak? See sketch

## 3/2/26
- **Social media-fy your carousels imgs**

  > Use state to send photos, with a share button on photo
  > Makes URL for social, has call to action 'call for install/service'

- Coupon header not centering vertically
- Use clamp in p tag -- custom sizing for this scope for polish
- Relayout 'animation cards' for new aspect ratio
- Test mobile color for effect; can you even see the other cards?

## 3/3/26
- Mobile only <br> for coupon?
  > `display: none;` on load, only display on mobile query
- Fix: Align Limited Time Only label by moving to coupon-1, not wrapper

  > Give it a mobile condition
  > _Check size, aspect ratio, layout of coupon on desk/mob_

## 3/4/26
- Smaller font on mobile coupon badge (red/white lttrs)

## 3/6/26

- Coupon Block View.js

  > Mobile badge JS rules & font sizing - fixed
  > Bug: Current Offers size - fixed
  > Bug: Badge alignment move badge for new parent div position - fixed
  > Bug: ANIMATION -- Typography, spacing of type,

- Reviews Block
  > Bug(mobile): switch to row direction column - fixed
  > Bug(full site): JS mask redraws on dom resize/rotate & weird line (?)

## 3/7/26

- Coupon & Reviews Block
  > Finished, tweaked typography & layout
- _Final BUGs_ VH bug auto won't show cards
  > Tall VH on tall device or dev preview - split css?
  > Mobile line-height in reviews mast -- increase
  > Add box-shadow to Get Code button
- Recognition & Map Blocks
  > Change flex dir
  > Widen grid constraints
  > Move map for mobile, possibly vh?
  > How to overlay scroll box?
- Services Block
  > Slide on mobile - see new CSS
  > _Feature:_ Likes & Comments > Service Block photos to gamify/socialfy it?

## 3/8/26

- Recognition & Map Blocks - finished mobile CSS
- About Block
  > Mast head spilling over
  > Switch content flex dir to col
- Services Block
  > IMG position: 1st clip left @ 90%, 2nd 100%, 3rd clip right @ 10%
  > These serve as buttons to click through
  > Add event listeners for sliders
- Footer
  > How to design it? TE? Reliable? Current?
- Features: custom spinner,
  > Main style.css & JS toggle it, main page script?
- Architechture:
  > Add main.js or theme-scripts.js
  > Put spinner here as spinner.js?
  > Enque scripts in main.js/theme-scripts.js = fast load
- Photoshoot: w/4 photos to see which ones for which part of site
  > Sky may need to be edited for blue, clouds, etc.
  > Photos have no been edited yet

## 3/9/26
- About Block
  > Bug: remove space between content columns,
  > to increase width of icon/text cards - fixed
  > Bug: icons not centered within circles - fixed Codex (see comments in file)

- Credentials Block
  > Did some margin stuff, will it hold?

- Insert main menu button (top)

## 3/10/26
- Map Block & About Bugs

## 3/12/26
- Map Block:
  > Bug: iframe moves on hover/scroll - fixed w/ JS or inline pointer style none
  > Which worked?
  > Bug: Map wasn't bleeding into the div above it, turned on overflow
- About Block:

  > Bug: Header on desktop about section header too small,
  > Not enough padding at top - fixed
  > Bug: Icons on desktop, padding is gone, looks horrible - fixed

- Footer Design/Dev
  > See notes re design & SEO -- .txt on Desktop
  > See https://aiformarketings.com/blog/footer-links-seo/ & verify
  > Rows:
  > r1: logo
  > r2: buttons  
  > r3: Lorem Ipsum tagline  
  > r4: business hours -- add this to Desktop too  
  > r5: licenses or no? Don't think CRME has this, omit?
- Footer SEO Notes
  > Google loves a clear path.
  > _Home → Footer (Top Cities) → Locations Hub → All Cities_
- **Bug: About Block - increase word spacing slightly**

- Feature: add LocalStorage for state; pop-ups, modals

  > Lasts forever until they clear cache
  > Lasts on close tab?
  > Make theme-script to handle state & modals, pops

  ## 3/14/26
- Bug: Desktop flex row to mobile flex col
  > Used grid-template-areas,
  > Rearrange elements w/o changing markup
  > Will this hold up for menu WP admin?
- Bug: Map still overflows on mobile Dev Tools
  > Fix: don't use -x offsets
  > Use transform & left CSS props to position map
- SEO: ATL TEXT, what else?

  > Microdata?
  > Breadcrumbs? breadcrumbList? SEO crawlers like these
  > siteNavigationElement? SEO crawlers like this
  > More SEO footer & menu tweaks

  ## 3/15/26
- Footer Google/SEO Bug/Work:
  > Seems like there are more Cities than originally quoted?

- Locations:
  > Alpharetta - NOT IN ORIGINAL -- ADD
  > Grant Park
  > Stone Mountain  
  > Avondale Estates  
  > Buckhead  
  > North Decatur  
  > Midtown  
  > Lawrenceville - NOT IN ORIGINAL -- ADD
  > Stonecrest 
  > Stone Mountain
- Services:
  > Whole House Surge Protector Installation
  > Electrical Permits -- ADD 
  > Panel upgrades / change-outs Panel Upgrades  - Electric Meter & Panel Installation?
  > Whole House Wiring & Rewiring
  > Basement Rewiring  - NOT IN ORIGINAL -- ADD 
  > Tenant Build-outs  - NOT IN ORIGINAL -- ADD
  > Recessed lighting upgrades  
  > EV charger installations  
  > Run Power Power Sepearate Buildings -- Routing Underground Powerlines -- ADD
  > Electrical inspections

- Charles ?s
  > How many in top cites from other day are same as old? Some are new?
  > That means pages increased? Price increase?
  > Next step: go through list and see which cities/services are new, which are old?
  > Call result: 5 extra pages

- Call CIDs
- Revise Invoice for 5 new 'scripted' pages from Locations/Services templates
  > $100 spread out over milestones
  > Pages are scripted but all new code requires maintanence & getting it to work initially

## 3/17/26
- Need copy for new pages from Charles
  > Alpharetta
  > Lawrenceville
  > Basement Rewiring
  > Tenant Buildouts
  > Routing Underground Powerlines
- Get clarification from Charles
  > Stone Mountain 2x in top ten. Replace with what location?

- Footer Menu Toggle (see Obisdian CRME SEO notes)
  > **Links must be present in DOM on page load, use CSS to hide**
- **On 'Fly-out Menu'/'Expansion Menu'/'Accordion'/'Mega Footer Toggle'**
  > *Do not use a `drop down` or `display: none;` -- use a UI Toggle (Progressive Disclosure)*
  > `Services` element is tareget
  > `onClick` it slides down to show rest of services
- Feature: Add podcast card in Recognition Section

## 3/18/26
- Copy is in Obsidian, store in repo?
  > Best practices for storing this until ready to use?
- **Use current URL pattern on existing site**
  > `<a href="/services/panel-upgrades">Panel Upgrades</a>`
  > 'View More Services' or 'Services +' or 'View More' or 'Services >'

## 3/19/26
- Bugs:
- **REVISE FOR DESKTOP*** - fixed
  > Write Desktop CSS props too 
- Entire `<details>` highlights on click
  > Should only be li that highlight - right?

## 3/20/26
- Add services page, add first block - menu, footer, etc.
  > For now, menu link is to template page
- Naming convention for pages & their blocks -- services__hero
- Pages: Templates vs /templates

## 3/21/26
- Bug: use -px margin-top to 'slide' coupon mask under adjoining div
  > This should fix gap on ceratin devices

## 3/22/26
- Bug: webpack config wasn't watching changes made on laptop, while ssh'd > server
  > updated config - fixed

## 3/23/26
- Bug: line between squiggles & coupon
  > Used negative margin-top + padding-top - fixed
- Added theme.json - complete it

- Services & Locations 'block templates' 
  > Correct name for this based on theme arch?
- Codex analyzing theme structure - hybrid?
  > Clarify for new pages, templates, etc

## 3/24/26
- See Obsidian for PRD to rewrite Editor Template/"Page" logic
- Keep services-hero, locations-hero as pages names?
  > Also keep locations.php & services.php as page names?

## 3/25/26
- Wrote new page arch, implement 3/26

## 3/26/26
- VS Code PHP bug:
  > Cannot validate since c:/ - dir of repo / ~usr\bin\php (then linux stuff - weird) use the settings php.validate.executablePath to validate
- FIX: after_switch_theme -- not:
  > get_post_type_object('page')->template = [] - this sets all 'page' objects to one Template (blocks) array
  > block_editor_settings_all - this is too burried in the UI for client to select Editor > Settings > Template - CLIENT CHURN

  - Write new ticket based on research & implement
  - Page Slug; this is set in several ways
    > **IMPORTANT** this is the actual URL must match for SEO go slowly

## 3/27/26
- Convert blocks to render.php from save.js
  > Looks like footer.php/header.php
  > Won't take long
- Pitfalls:
  > Certain things must be escaped to avoid cyber attacks:
  > In Hero Block, escape attributes.title
- Pros:
  > Better for SEO most cases
  > Allows for better scripting to populate templates with data

- BUG: 
  > Hero block.json:
  > set attribute to field 
- Update Why agencies choose render.php not save.js docs & delete this comment - see Gemini 

## 3/30/26
- get_block_wrapper_attributes = getBlockProps
  > in PHP, className = passing class as argument
- block.json: Check `"render": "file:./build/render.php"`
- Replace React SVGs with regular SVGs for render.php/html
  > Save the SVGs in Excitaprint assets for use in other projects
- WP Dev Docs search queries:
  > developer.wordpress.org get_block_wrapper_attributes
  > developer.wordpress.org block.json render.php $attributes $content $block

## 3/31/26
- Bugs:
   > Google G svg not rendering - fixed: src path was incorrect
- Skipped Services Block

## 4/1/26
- All blocks converted to render.php
- Bug: React svgs to svg in badges block - fixed
  > React components to svg
  > Swap SVG class CSS selectors from svg to img

- Services Template
  > Find sketch, create first block w solid bg

## 4/2/26
- G fix
- touch new files for Services Hero Block
style.css index.js view.js render.php

## 4/3/26
- Design & deploy Services Hero Block w background as solid color
  > Layout:
    > Move flex grid of services to bottom, below or above CTA
- Bug: new Services Page functions.php code causing fatal err - fixed
  > Commented out curly brace
- Bug: fix responsive design for laptops ASAP
  > *Pixels vs actual size?* This an issue going forward? -  See Gemini
  > List of Zenbook Responsiveness Issues:
    > Menu - section height too compact
    > Hero - Google badge too narrow
    > Services - no issues
    > About - section height? major clipping to right. What else?
    > Badges - no issues? Check after fixing About
- Lighten gray of Coupon Block (MAYBE!)
    > Add lighter smoke to global vars & try --dark-blue

## 4/4/26
- Design: 
  > Mobile padding & type CSS
  > Coupon/squiggles background/text color
- Bug(mobile): Zenbook responsiveness
  > Page not taking up full viewport width

## 4/5/26
- Is the laptop the same aspect ratio as the desktop?
- Make description/title in header.php dynamic, managed by Editor
- Bug: syntax in functions.php while provisioning Services Page

## 4/6/26
- Bug: Scoping, syntax erros in PHP, unused ID vars - fixed
- Bug: Title on Services page, check template, header file - ignore/fixed
  > In editor, header has no 'code'
  > Shows title from $services_content in header
- Bug: Menu, footer not loading on Services page - ignore/fixed
  > Same bug from above, if you visit the slug 'sitename.com/slug' it shows
- Add: 
  > Auth to Desktop SSH - easiest for read/write from Laptop only?
  > Services page now loads
- Bug:
  > Services Hero block no showing on slug - fixed
    > render.php not specified in Services Hero block.json

## 4/8/26
- Add: code Services Hero block
- Feature: make Home Hero image editable in Editor

## 4/9/26
- Add: Services Hero block
  > html for new divs -- see CSS for all needed
  > do this in order, less builds, etc. faster prod

## 4/10/26
- **Use Pre-implementation Checklist** going fowrard for all new features/adds
- Add: Services Hero Block MediaUpload
  > 
- Bug: Home Hero block header & subheader were diff blacks - fixed
- Bug: Services Hero not spanning entire grid
  > Use width: Xch; to ctrl width of type

## 4/11/26
- Add: Powershell persistent server Start-Process
- Design: Services Page Hero

## 4/12/26
- Add: **Replaceable images in Editor**
  > See Codex final thoughts & start
  > Docs are overly complicated, only two things to replace website images in Editor
Write with React in index.js > edit 
  > onSelect & render 
  > Nothing needed in functions.php, it's built in
  > https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-upload/README.md


## 4/13/26
- Add: Editor controlled images - add at end, when client requests
- Bug: CSS images, not image tag - fixed

## 4/14/26
- Add: Home Hero photo & layout mobile CSS - done
- Fix: Home Hero is now img tag not css, `a` closing tag added in hero render.php - fixed
- Add: Home Laptop responsiveness - done

## 4/15/26
- Add: Material Symbols `menu`
  > Thicker weight - how?
  > How to handle layout?
  
- Add: Services Map Block
  > Projects = Blog? Keep 
  > Add this weird projects map? Benefit or overvblown/useless?
  > Two columns, one with map, one with copy

- SEO: Can you give description to ea page in wp_insert_post/functions.php?

## 4/17/26
- Add: Services Hero Block
  > DIVS `[wrapper[img wrapper[hero wrapper[text]][button wrapper[buttons]]]`
  > Use the same buttons; CRME Design System
  > Background image, rounded corners, `::after` like About Block

## 4/18/26
- Design: font-a or font-b for Services Hero subheader?
- Add: Services Map iframe
  > Rounded corners, zoomed out, perimter to left & smaller for aspect ratio

## 4/19/26
- Add: Services Hero img tag - done
  > Not showing up - fixed
  > Use CSS from Home Hero to align image
    > CSS in but hydrating wrong

## 4/20/26
- Bug: Services Hero img - gap at top of img-placeholder.png
  > Check layering/layout
  > Try image specific wrapper, don't think there's one
  > Add mobile rules


- Add: Services Map iframe
  > Same map, but smaller version/diff aspect ratio
  > Add iframe & small menu thingy in Home
  > Bug: still not appearing even after rebuild? 

## 4/21/26
- Bug: Services Hero img 
  > FIX:
    > Separate Hero text & Hero img into two wrappers
    > Remove `grid-template` from img-wrapper
    > Think problem was with the `after` almost like double applying grid

## 4/22/26
- ROUGH IN -- build page skeleton then iron out details at end
  > Keep this workflow, faster dev time
  > Never polish a component until the entire page skeleton is done
  > Avoid coding 3 or 4 times over

- **SECTIONS LEFT ON SERVICES PAGE FOR 1/2 MILESTONE**
  > Sections:
    > Services Reel
      > Rough: Group of img divs, clickable no animations - square
      > Add: varying sizes if it's not vibing visually 
    > Sales Copy
      > Text elements, blog style design, text heavy
      > WSJ print edition uses:
        > Serif on LONG READS
        > San Serif on SHORT READS/BLURBS
        > **USE THIS ON SALES COPY SECTION**
    > Reviews
      > Add: repeat same from previous page, revise w/o bord-radius?
    > CTA - w form? What was I thinking?
    > Footer - DONE! DON'T COUNT
  > Add sections, their colors, main elements quickly 
  > Iterate until complete across all sections at roughly same time

## 4/23/26
  > Services Hero
    > Mobile CSS, typography, global styles
  > Services Map
    > Mobile CSS

## 4/24/26
- Add: Services Reel
  > Add view.js same stripes, position as Home Carousel Block (name?) 

## 4/25/26
- Bug: main wrapper of Services Hero broken - see Dev Notes

## 4/26/26
- Bug: Services Wrapper - fixed
  > Changed wp-block-services-hero grid-temp-col to 1fr from auto
  > This makes grid actually take up 'grid space'
- Bug: Padding 
  > Hero Wrapper l-r padding
  > Padding above and below img wrapper

- Add: Services Reel & Services Copy
- Add: CTRL K + CTRL T = VSCODE Themes Shortcut Key

## 4/28/26
- Bug: Services Hero wrapper CSS for grid col - fixed

## 4/30/26
- Bug: Services Hero desktop/mobile layout - fixed
- Design: Reel Block
  > Currently `display: none;` -- SET TO GRID TO MAKE VISIBLE!
  > Sketch & wireframe in Figma first
  
- Add: Copy Block
  > Sketch & wireframe in Figma first
- Add: Setup persistent task in Task Scheduler/Powershell

## 5/1/26
- Design: Services Hero Block Wrapper grid-col-row > 1fr not auto
- SWAP REEL & COPY BLOCK ORDER?
- Refactor(Home Coupon Block): use CSS border-shape API instead of `canvas` mask?

## 5/4/26 
- Add: Services Reel Block
  > Title/photos of all services? Current site mobile is 4x4 grid
  > Class Structure:
    > `[block wrpr[hdr wrpr[title wrpr[h1]]] [card wrpr[cards]][btn wrpr[a(btn)]]`
    > Grid on wrapper, flex on items
    > No fixed dimensions, use `flex row 4fr auto`
      > Omit `grid-template-rows` -- CSS grid responsive by default
      > **Can use `grid-auto-rows: 120px` to give rows uniform height**
    > Use forEach to grab img, Lorem Ipsum & duplicate blocks
      > Best way to load this? Default (?)
  > Docs: CSS Grids https://www.youtube.com/watch?v=eHaZlFcGl6k


## 5/5/26
- Webpack was being watched 'twice'
  > CPU was cylcing +1000% & crashing too often
  > Should cycle between 5% and 20%
  > Once in `output` and `watchOptions`
  > Set to ignore build in `watchOptions`

## 5/6/26
- Add: Services Reel card
  > Finish styling h1, card, add img, etc
- Add: Services Reviews Block
  > Copy & edit
  > Declare in functions.php
  > NEED TO RENAME CLASSES?
    > Different wrapper (WP architecture) & page -- no issues

## 5/7/26

- Add: Services Review - done

## 5/8/26

- Add: decrease font clamp on `reviews-header-wrapper`
- Add: shorter, wider aspect ratio to Services Reviews cards
- Add: 3 more reviews - clone block wrapper, bg white, 3 more reviews

## 5/12/26

- Bug: Services Review VH on tablet is way off - massive gap btween els
  > TABLET AT END OF JOB!
- Added: Services Reel view.js
  > Finish it & Services Reel cards

## 5/13/26

- Change: Services Reel grid

## 5/14/26

- Add: Services Sales Copy block
  > See sketch
- Add: Services Reel block Show More button
  > HREF = page on second tap -- state? or if statement?
  > Use `ondblclick` event listener w/ delay 
    > PSUEDO CODE `click if < 10000ms, register second click = ?`
  > ATL ALERT LISTENER:
``` // Drawer menu & child elements
   let drawer = document.createElement("div");
   drawer.classList.add("drawer");
   document.body.appendChild(drawer);

   drawer.addEventListener("click", (event) => {
   // If search-input, search-x clicked, do not toggle drawer
   if (
        event.target === search ||
        event.target === searchX
      )
      return;
      else {
      drawer.classList.toggle("open");
      }
      });```
  
## 5/15/26

- Added: Services Copy block
  > Bug: not showing - check syntax, WP Admin, Dev Tools

## 5/16/26

- Change: Services Hero img wrapper grid position 24">=
- Add: view.js 'service-lines' to Servics Reel block?
  > Code is in Services Reel view.js, commented out

## 5/17/26

- Change: Services Reviews header grid pos & font clamp size - done
    > Increased block wrapper vh which added "padding" above/below cards - done
- Add: Swapped gradient color pos, to give variety to copied block

## 5/18/26

- Change: Hover & stroke color of Read More Reviews button for bg - done
- Add: Services Copy block - see sketch
  > Start with header Lorem ipsum

- Change: blend Reel & Gradient backgrounds for smooth transition? - no
- Bug(UI): Desktop vs Laptop - eg Services Review

## 5/21/26

- Add: Coupon Block to Services Page - see order on current CRME site
  > Where does it appear. Is it diff from existing site's HOME? 
  > Add as is
- Add: href to Home in logo tag `<a href=""/>`
- Add: blue Material Design menu button
- Design: Increase spacing? See Home spacing between blocks
  > Increase w Services Reel card wrapper, 10 80 10 -> 5 90 5