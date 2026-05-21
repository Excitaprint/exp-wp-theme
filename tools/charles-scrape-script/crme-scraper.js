(async function scrapeServicesFromSitemapGrouped() {
  const ORIGIN = location.origin;
  const seenSitemaps = new Set();
  const seenUrls = new Set();

  async function fetchXml(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed XML: ${url}`);
    return new DOMParser().parseFromString(await res.text(), "application/xml");
  }

  async function collectUrlsFromSitemap(url) {
    if (seenSitemaps.has(url)) return;
    seenSitemaps.add(url);

    const xml = await fetchXml(url);
    const sitemapLocs = [...xml.querySelectorAll("sitemap > loc")].map((n) => n.textContent.trim());
    const urlLocs = [...xml.querySelectorAll("url > loc")].map((n) => n.textContent.trim());

    for (const u of urlLocs) seenUrls.add(u);
    for (const sm of sitemapLocs) await collectUrlsFromSitemap(sm);
  }

  function decodeNextImage(url) {
    if (!url) return null;
    if (!url.includes("/_next/image?url=")) return url;
    try {
      const u = new URL(url, ORIGIN);
      return decodeURIComponent(u.searchParams.get("url") || url);
    } catch {
      return url;
    }
  }

  function slugFromUrl(url) {
    const m = url.match(/\/services\/([^/?#]+)\/?$/i);
    return m ? m[1].toLowerCase() : null;
  }

  function titleFromDoc(doc) {
    const raw =
      doc.querySelector("h1")?.textContent?.trim() ||
      doc.querySelector("meta[property='og:title']")?.content?.trim() ||
      doc.title?.trim() ||
      "";
    return raw.replace(/\s*[-|]\s*Charles.*$/i, "").trim();
  }

  function normalizeServiceTitle(slug, fallbackTitle) {
    const map = {
      "panel-upgrades": "Panel Upgrades",
      "electrical-inspections": "Electrical Inspections",
      "breaker-change-outs": "Breaker Change Outs",
      "ansul-system-inspections-repairs-to-meet-nec-standards": "ANSUL System Inspections & Repairs to meet NEC standards",
      "grounding-systems-install": "Grounding Systems Install",
      "service-upgrades-repairs": "Service Upgrades & Repairs",
      "nec-code-upgrades": "NEC Code Upgrades",
      "whole-house-surge-protector-installation": "Whole House Surge Protector Installation",
      "electrical-panel-installation": "Electrical Panel Installation",
      "ev-charger-installation": "EV Charger Installation",
      "solar-panel-system-installation": "Solar Panel Installation",
      "smart-home-wiring-installation": "Smart Home Wiring Installation",
      "led-retrofit-lighting": "LED Retrofit Lighting",
      "recessed-lighting-upgrades": "Recessed Lighting Upgrades",
      "chandelier-installs": "Chandelier Installation",
      "parking-lot-lighting-repairs-installation": "Parking Lot Lighting Repairs & Installation",
      "outlet-lighting-additions": "Outlet & Lighting Additions",
      "outlet-lighting-replacements": "Outlet & Lighting Replacements",
      "ceiling-fans": "Ceiling Fan Installation & Repair",
      "whole-house-wiring-rewiring": "Whole House Wiring & Rewiring",
      "emergency-services": "Emergency Services",
      "electrical-troubleshooting": "Electrical Troubleshooting",
      "circuit-upgrades": "Circuit Upgrades"
    };
    return map[slug] || fallbackTitle;
  }

  function groupForSlug(slug) {
    const map = {
      // Panels & Power
      "panel-upgrades": "Panels & Power",
      "electrical-inspections": "Panels & Power",
      "breaker-change-outs": "Panels & Power",
      "ansul-system-inspections-repairs-to-meet-nec-standards": "Panels & Power",
      "grounding-systems-install": "Panels & Power",
      "service-upgrades-repairs": "Panels & Power",
      "nec-code-upgrades": "Panels & Power",
      "whole-house-surge-protector-installation": "Panels & Power",
      "electrical-panel-installation": "Panels & Power",
      "circuit-upgrades": "Panels & Power",

      // EV, Solar & Smart
      "ev-charger-installation": "EV, Solar & Smart",
      "solar-panel-system-installation": "EV, Solar & Smart",
      "smart-home-wiring-installation": "EV, Solar & Smart",

      // Lighting Services
      "led-retrofit-lighting": "Lighting Services",
      "recessed-lighting-upgrades": "Lighting Services",
      "chandelier-installs": "Lighting Services",
      "parking-lot-lighting-repairs-installation": "Lighting Services",
      "outlet-lighting-additions": "Lighting Services",
      "outlet-lighting-replacements": "Lighting Services",
      "ceiling-fans": "Lighting Services",

      // Wiring & Repairs
      "whole-house-wiring-rewiring": "Wiring & Repairs",
      "emergency-services": "Wiring & Repairs",
      "electrical-troubleshooting": "Wiring & Repairs"
    };
    return map[slug] || null;
  }

  const order = {
    "Panels & Power": [
      "panel-upgrades",
      "electrical-inspections",
      "breaker-change-outs",
      "ansul-system-inspections-repairs-to-meet-nec-standards",
      "grounding-systems-install",
      "service-upgrades-repairs",
      "nec-code-upgrades",
      "whole-house-surge-protector-installation",
      "electrical-panel-installation",
      "circuit-upgrades"
    ],
    "EV, Solar & Smart": [
      "ev-charger-installation",
      "solar-panel-system-installation",
      "smart-home-wiring-installation"
    ],
    "Lighting Services": [
      "led-retrofit-lighting",
      "recessed-lighting-upgrades",
      "chandelier-installs",
      "parking-lot-lighting-repairs-installation",
      "outlet-lighting-additions",
      "outlet-lighting-replacements",
      "ceiling-fans"
    ],
    "Wiring & Repairs": [
      "whole-house-wiring-rewiring",
      "emergency-services",
      "electrical-troubleshooting"
    ]
  };

  await collectUrlsFromSitemap(`${ORIGIN}/sitemap.xml`);

  const serviceUrls = [...seenUrls]
    .filter((u) => /\/services\/[^/?#]+\/?$/.test(u));

  const grouped = {
    "Panels & Power": [],
    "EV, Solar & Smart": [],
    "Lighting Services": [],
    "Wiring & Repairs": []
  };

  for (const url of serviceUrls) {
    const slug = slugFromUrl(url);
    if (!slug) continue;

    const group = groupForSlug(slug);
    if (!group) continue;

    const res = await fetch(url);
    if (!res.ok) continue;

    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    const title = normalizeServiceTitle(slug, titleFromDoc(doc));
    const imageUrl = decodeNextImage(
      doc.querySelector("meta[property='og:image']")?.content?.trim() ||
      doc.querySelector("img")?.src ||
      null
    );

    grouped[group].push({ slug, title, link: url, imageUrl });
  }

  // dedupe + order by site sequence
  for (const key of Object.keys(grouped)) {
    const seen = new Set();
    const deduped = grouped[key].filter((item) => {
      if (seen.has(item.link)) return false;
      seen.add(item.link);
      return true;
    });

    const rank = new Map((order[key] || []).map((slug, i) => [slug, i]));
    deduped.sort((a, b) => {
      const ra = rank.has(a.slug) ? rank.get(a.slug) : Number.MAX_SAFE_INTEGER;
      const rb = rank.has(b.slug) ? rank.get(b.slug) : Number.MAX_SAFE_INTEGER;
      if (ra !== rb) return ra - rb;
      return a.title.localeCompare(b.title);
    });

    grouped[key] = deduped.map(({ slug, ...rest }) => rest);
  }

  const json = JSON.stringify(grouped, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const dl = document.createElement("a");
  dl.href = URL.createObjectURL(blob);
  dl.download = "services-block.json";
  dl.click();
  URL.revokeObjectURL(dl.href);

  console.log("Saved grouped services-block.json");
  console.log(grouped);
})();
