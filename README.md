# Charles Morton Electric Website:

# WordPress Theme Development Plan

## 1. Project Overview & Goals

This document outlines the development plan for the Charles Morton Electric WordPress theme. The primary goal is to build a high-performance, modern website that improves upon the existing site's SEO and user experience.

- **Client Site:** https://crmortonelectric.com/
- **Competitor Benchmark A:** https://www.tecertifiedelectricians.com/
- **Competitor Benchmark B:** https://choosereliable.com/

- **WINDOWS DEV PATH:** C:\Users\jamie\Desktop\crmorton-electric-wp-theme\app\public\wp-content\themes\crmorton-wp-theme
- **LINUX DEV PATH:** /mnt/c/users/jamie/Desktop/crmorton-electric-wp-theme/app/public/wp-content/themes/crmorton-wp-theme

### Core Development Goals:

- **Performance:** Achieve a Lighthouse score of 95-100 and a total page load time under 3 seconds. The site must be git logfast on mobile, even on slow connections.
- **Architecture:** A simpler, mobile-first design using a custom WordPress theme built with React-based Gutenberg blocks.
- **SEO:** Preserve and enhance existing search rankings by migrating all critical SEO data and employing best practices.
- **Accessibility:** The site must be fully WCAG compliant to be usable by all visitors.

### Important Notes RE This WordPress Custom Theme:

- **.PHP Templates:** This theme uses .php templates, not .html template parts. It is a hybrid theme, doesn't reply on .html templates like a full-fledged block theme.
- **Menu/Navigation:** Menu is handled by wp_nav_menu(), core WordPress PHP function, in header.php.
- **Website Pages/"Custom Post Types":** Default block templates are set in functions.php, which I then 
  > (WordPress Template Tags)[https://codex.wordpress.org/Template_Tags/] 

---

## 2. Technical Architecture

- **Tech Stack:** WordPress with custom Gutenberg blocks developed in React/JSX.
- **Plugin Organization:** A dedicated `/plugins/plugins.php` file will be used for custom functionality to keep `functions.php` clean.
- **Block Manifest:** Use `@wordpress/scripts` (`wp-scripts build-blocks-manifest`) to generate a manifest of all custom blocks, improving performance and simplifying block registration.
- **Code Standards:** `useBlockProps` is mandatory for the main wrapper of all custom blocks.

---

## 3. Key Features & Integrations

### Feature Implementation

- **Acella Permits:** Integrate to fetch contact data for marketing outreach.
- **FieldPulse API:** Implement a file upload feature within a custom form.
- **Twilio:** Integrate for call recording (requires client subscription/API key).
- **Promotions Template:** Create a reusable template for social media automation.
- **Search (Post-MVP):** A site search returning page cards, leveraging optimized page titles and meta descriptions.

### API & External Service Integration

- **FieldPulse API (Custom Form Method):**
  1. **UI:** Build a custom HTML form and file uploader.
  2. **Security:** Secure the API key on the server. A backend proxy (e.g., a simple Node.js endpoint or serverless function) will receive form data and forward it to FieldPulse. **The API key must not be exposed on the client-side.**
  3. **Endpoints:** `POST /customers` (create client), `POST /jobs` (create service request), and the file management endpoint.
- **WordPress REST API:** Use for migrating content from the old site to the new database.
- **NextDoor Bot:** Develop a script to listen for posts in the Atlanta area and forward leads.

---

## 4. Development & Implementation Details

### Process & Best Practices

- **Performance Monitoring:** Run Lighthouse audits continuously throughout development.
- **Mobile-First:** Design and develop for mobile first, then scale to desktop. The mobile menu's phone number must be a click-to-call icon.
- **Content & SEO Migration:**
  - Preserve all existing page names/URLs to maintain Google crawler indexing.
  - Migrate all meta tags, keywords, and other SEO-critical data.
  - Ensure all service and location pages have unique content to avoid SEO penalties.

### Gutenberg Block Development Strategy

- **Architecture:** Build "Section Blocks"—large, reusable blocks composed of multiple sections. This is preferable to assembling pages from many small, individual blocks.
- **Editable Content:** Use `<RichText />` for editable text fields in the block editor.
- **Editable Media:** Use `MediaPlaceHolder` and `MediaUpload` to create components with changeable images. Implement lazy loading via the `srcset` attribute.
- **Custom Block Ideas:** Develop advanced blocks to enhance functionality, such as a "Price Calculator" or an "Interactive Service Map."
- **Dynamic Pages (100+ Service/Location pages):**
  - Use `render.php` for the frontend rendering of blocks on these pages. This allows a single template change to propagate across all instances. `save.js` should be reserved for static, non-repeating blocks.
  - **Proposed Workflow:**
    1. Scrape data (page names, cities, services, photos, text) from the old site into a structured JSON file.
    2. Create a single, reusable React component with props for the dynamic data.
    3. Use a build-time script (e.g., a custom PHP script or a tool like `react-snapshot`) to iterate through the JSON and pre-generate all 100+ pages.
- **Styling:** Each block will have its own dedicated CSS file for its styles and interaction listeners (hover, etc.). A global CSS file will handle base styles.
- **Core Blocks:** Utilize core WordPress blocks (e.g., `core/navigation`) whenever appropriate.

---

## 5. Project Timeline Estimation

- **Discovery & Architecture:** 1 week
- **Custom Block Development:** 3–4 weeks
- **Content Migration & SEO Setup:** 1–2 weeks
- **Total Estimated Time:** 5–7 weeks

---

## 6. Known Issues & Design Notes

### Issues on Current Site to Resolve

- **Performance:** Very slow, with a 7+ second load time.
- **Asset Quality:** Grainy/low-quality logo, slider images, and videos.
- **Design:** "Cheesy" image overlays and a "cheap" overall aesthetic.

### Design & UX Notes

- **Layout:** Simplify the site structure with fewer menus.
- **CTAs:** Implement clear calls-to-action throughout the site. The header phone number must be prominent and clickable.
- **Pop-ups:** Implement a "contact us" pop-up, managing its state via a cookie or service worker.
- **Photoshoot:** A professional photoshoot is needed for authentic images (company truck, uniformed workers, etc.) to replace unrelated stock photos.

## 7. Pages

**Home**

## MENU
- Hero
- Services
- Offer/Coupon Code
  > Hover animation. Get coupon code in exchange for email via popup form.
  > Coupon style dotted border around coupon's themselves
- Reviews -- SMALL
- Recognition -- SMALL
  > Your article & the other employee's articole 
- About with Features & Benefits
- Explore Projects & Articles (Blog Posts) -- interactive hover Map with coordinates provided by you. I can approximate addresses.
- Call to Action: call Us / request quote no image, just image faded in bg or vectors of tools!
- Logo/credentials -- SMALL

## FOOTER
* Column 1 (Larger Column - rest smaller)
- Name
- Description for Google
- Hours days
- Contact & BOOK NOW button
* Column 2 - Socials, License #'s, Legal Docs ?
* Column 3 - Main site map/links
* Column 4 - Services pages map/links
* Column 5 - Areas pages map/links

# MUST HAVE FEATURES **HOME FEATURES** 

- Popup on map scroll box to each landing page of areas
- "Reach Out for Reliable Restoration" CTA/FIELDPULSE FORM! -- see Reliable @ bottom of: https://choosereliable.com/gallery/
- Social buttons in Hero & Footer
- Floating question form sticky bottom, right? SEE TE
