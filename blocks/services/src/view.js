/**
 * Services Block View ScrilineTop
 * Canvas lines + menu toggling + embedded data
 */

const BLOCK_SELECTOR = ".wp-block-services, .wp-block-theme-services";

const SERVICES_DATA = {
"Panels & Power": [
    {
      "title": "Panel Upgrades",
      "link": "https://crmortonelectric.com/services/panel-upgrades",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_686c2ee05c7cd75eb8d86bb8.jpeg"
    },
    {
      "title": "Electrical Inspections",
      "link": "https://crmortonelectric.com/services/electrical-inspections",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586645c7cd75eb8381f2d.jpeg"
    },
    {
      "title": "Breaker Change Outs",
      "link": "https://crmortonelectric.com/services/breaker-change-outs",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_686bf94c5c7cd75eb856d83a.png"
    },
    {
      "title": "ANSUL System Inspections & Repairs to meet NEC standards",
      "link": "https://crmortonelectric.com/services/ansul-system-inspections-repairs-to-meet-nec-standards",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586665c7cd75eb83830a2.jpeg"
    },
    {
      "title": "Grounding Systems Install",
      "link": "https://crmortonelectric.com/services/grounding-systems-install",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_68658c525c7cd75eb859df90.jpg"
    },
    {
      "title": "Service Upgrades & Repairs",
      "link": "https://crmortonelectric.com/services/service-upgrades-repairs",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586665c7cd75eb83832d0.jpeg"
    },
    {
      "title": "NEC Code Upgrades",
      "link": "https://crmortonelectric.com/services/nec-code-upgrades",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586645c7cd75eb83825c1.jpeg"
    },
    {
      "title": "Whole House Surge Protector Installation",
      "link": "https://crmortonelectric.com/services/whole-house-surge-protector-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_68682b7e5c7cd75eb87a51c9.jpeg"
    },
    {
      "title": "Electrical Panel Installation",
      "link": "https://crmortonelectric.com/services/electrical-panel-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_686c2f4b5c7cd75eb8daef92.jpeg"
    },
    {
      "title": "Circuit Upgrades",
      "link": "https://crmortonelectric.com/services/circuit-upgrades",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586665c7cd75eb8383380.jpeg"
    }
  ],
  "EV, Solar & Smart": [
    {
      "title": "EV Charger Installation",
      "link": "https://crmortonelectric.com/services/ev-charger-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586645c7cd75eb838253e.jpeg"
    },
    {
      "title": "Solar Panel Installation",
      "link": "https://crmortonelectric.com/services/solar-panel-system-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_68682ae45c7cd75eb876e0e6.jpeg"
    },
    {
      "title": "Smart Home Wiring Installation",
      "link": "https://crmortonelectric.com/services/smart-home-wiring-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586675c7cd75eb8383be0.jpeg"
    }
  ],
  "Lighting Services": [
    {
      "title": "LED Retrofit Lighting",
      "link": "https://crmortonelectric.com/services/led-retrofit-lighting",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586675c7cd75eb8383afa.jpeg"
    },
    {
      "title": "Recessed Lighting Upgrades",
      "link": "https://crmortonelectric.com/services/recessed-lighting-upgrades",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_686bf6e55c7cd75eb845afe0.jfif"
    },
    {
      "title": "Chandelier Installation",
      "link": "https://crmortonelectric.com/services/chandelier-installs",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_68682bb55c7cd75eb87bb4fc.jpeg"
    },
    {
      "title": "Parking Lot Lighting Repairs & Installation",
      "link": "https://crmortonelectric.com/services/parking-lot-lighting-repairs-installation",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_68682cd25c7cd75eb8825fd2.jpeg"
    },
    {
      "title": "Outlet & Lighting Additions",
      "link": "https://crmortonelectric.com/services/outlet-lighting-additions",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586655c7cd75eb8382cfb.jpeg"
    },
    {
      "title": "Outlet & Lighting Replacements",
      "link": "https://crmortonelectric.com/services/outlet-lighting-replacements",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586655c7cd75eb8382752.jpeg"
    },
    {
      "title": "Ceiling Fan Installation & Repair",
      "link": "https://crmortonelectric.com/services/ceiling-fans",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_68682d495c7cd75eb885743e.jpeg"
    }
  ],
  "Wiring & Repairs": [
    {
      "title": "Whole House Wiring & Rewiring",
      "link": "https://crmortonelectric.com/services/whole-house-wiring-rewiring",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586665c7cd75eb838331b.jpeg"
    },
    {
      "title": "Emergency Services",
      "link": "https://crmortonelectric.com/services/emergency-services",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/image_6865883a5c7cd75eb842859e.webp"
    },
    {
      "title": "Electrical Troubleshooting",
      "link": "https://crmortonelectric.com/services/electrical-troubleshooting",
      "imageUrl": "https://ik.imagekit.io/4wu305uo4/tr:w-1000,f-auto,lo-true,q-80/image_686586665c7cd75eb8383379.jpeg"
    }
  ]
};

function drawDiagonalBorders() {
  const parents = document.querySelectorAll(BLOCK_SELECTOR);

  parents.forEach((parent) => {
    if (parent.dataset.canvasAttached === "true") return;
    parent.dataset.canvasAttached = "true";

    const canvas = parent.querySelector(".services-lines");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function performDraw() {
      const rect = parent.getBoundingClientRect();
      const parentWidth = Math.floor(rect.width);
      const parentHeight = Math.floor(rect.height);

      if (parentWidth <= 0 || parentHeight <= 0 || parentWidth > 5000 || parentHeight > 5000) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = parentWidth * dpr;
      canvas.height = parentHeight * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const style = window.getComputedStyle(parent);
      const lineTop = 0;
      const pl = parseFloat(style.paddingLeft) || 0;
      const pr = parseFloat(style.paddingRight) || 0;
      const lineHeight = parentHeight;
      const colWidth = (parentWidth - pl - pr) / 12;
      const spacing = parentWidth < 600 ? 12 : 16;

      ctx.clearRect(0, 0, parentWidth, parentHeight);
      const strokeColor = style.getPropertyValue("--dark-blue").trim() || "#376eb6";
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 0.45;

      const drawHatch = (xStart, width) => {
        const xEnd = xStart + width;
        ctx.save();
        ctx.beginPath();
        ctx.rect(xStart, lineTop, width, lineHeight);
        ctx.clip();
        ctx.beginPath();

        for (let x = xStart; x < xEnd + lineHeight; x += spacing) {
          ctx.moveTo(x, lineTop);
          ctx.lineTo(x - lineHeight, lineTop + lineHeight);
        }

        ctx.stroke();
        ctx.restore();
      };

      drawHatch(pl, colWidth * 1);
      drawHatch(pl + colWidth * 11, parentWidth - pr - (pl + colWidth * 10));

      ctx.beginPath();
      ctx.moveTo(pl + colWidth * 1, lineTop);
      ctx.lineTo(pl + colWidth * 1, lineTop + lineHeight);
      ctx.moveTo(pl + colWidth * 11, lineTop);
      ctx.lineTo(pl + colWidth * 11, lineTop + lineHeight);
      ctx.stroke();
    }

    let timer;
    new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(performDraw, 50);
    }).observe(parent);

    performDraw();
  });
}

function initServices() {
  const blocks = document.querySelectorAll(BLOCK_SELECTOR);
  if (!blocks.length) return;

  function styleGroupCards(group) {
  const cards = Array.from(group.querySelectorAll(".services-card"));
  if (!cards.length) return;

  const featuredIndex = Math.floor(cards.length / 2);

  const activateCard = (card) => {
    cards.forEach((c) => {
      c.classList.remove("services-card--featured");
      c.classList.add("services-card--mini");
      if (!c.style.getPropertyValue("--mini-h")) {
        const h = 20 + Math.random() * 15;
        c.style.setProperty("--mini-h", `${h.toFixed(2)}%`);
      }
    });

    card.classList.remove("services-card--mini");
    card.classList.add("services-card--featured");
  };

  cards.forEach((card, idx) => {
    card.classList.remove("services-card--featured", "services-card--mini");
    card.style.removeProperty("--mini-h");

    if (idx === featuredIndex) {
      card.classList.add("services-card--featured");
    } else {
      card.classList.add("services-card--mini");
      const h = 20 + Math.random() * 15;
      card.style.setProperty("--mini-h", `${h.toFixed(2)}%`);
    }

    // card.onmouseenter = () => activateCard(card);
    card.onclick = () => activateCard(card);
  });
}





  const ID_MAP = {
    "group-panels-power": "Panels & Power",
    "group-ev-solar-smart": "EV, Solar & Smart",
    "group-lighting-services": "Lighting Services",
    "group-wiring-repairs": "Wiring & Repairs",
  };

  blocks.forEach((block) => {
    if (block.dataset.init === "true") return;
    block.dataset.init = "true";

    Object.keys(ID_MAP).forEach((groupId) => {
      const group = block.querySelector(`#${groupId}`);
      const key = ID_MAP[groupId];
      const items = SERVICES_DATA[key];

      if (!group || !Array.isArray(items)) return;

      const html = items
        .map(
          (item) => `
            <div class="services-card">
              <div class="services-card__image-wrapper">
                <img src="${item.imageUrl || ""}" alt="${item.title || ""}" loading="lazy">
              </div>
              <div class="services-card__h3_wrapper">
                <h3>${item.title || ""}</h3>
              </div>
            </div>
          `
        )
        .join("");

      group.innerHTML = html;
      styleGroupCards(group);

    });

    const groups = block.querySelectorAll(".services-card-group");

// initial state
groups.forEach((g) => {
  const isActive = g.id === "group-panels-power";
  g.style.cssText = "";
  g.classList.toggle("active", isActive);
  g.classList.toggle("inactive", !isActive);
  g.classList.remove("hidden");
});


const buttons = block.querySelectorAll(".services-menu__button");
buttons.forEach((btn) => {
  btn.classList.toggle("active", btn.getAttribute("data-service") === "group-panels-power");
});

block.addEventListener("click", (e) => {
  const btn = e.target.closest(".services-menu__button");
  if (!btn) return;

  e.preventDefault();
  const targetId = btn.getAttribute("data-service");
  if (!targetId) return;

  buttons.forEach((b) => b.classList.toggle("active", b === btn));

  groups.forEach((g) => {
    const isActive = g.id === targetId;
    g.style.cssText = "";
    g.classList.toggle("active", isActive);
    g.classList.toggle("inactive", !isActive);
    g.classList.remove("hidden");
  });
});



//     const groups = block.querySelectorAll(".services-card-group");
    
// // initial
// groups.forEach((g) => {
//   const isActive = g.id === "group-panels-power";
//   g.style.cssText = "";
//   g.classList.toggle("active", isActive);
//   g.classList.toggle("inactive", !isActive);
//   g.classList.remove("hidden");
// });

// // on click
// groups.forEach((g) => {
//   const isActive = g.id === targetId;
//   g.style.cssText = "";
//   g.classList.toggle("active", isActive);
//   g.classList.toggle("inactive", !isActive);
//   g.classList.remove("hidden");
// });



//     const buttons = block.querySelectorAll(".services-menu__button");
//     buttons.forEach((btn) => {
//       btn.classList.toggle(btn.getAttribute("data-service") === "group-panels-power");
//     });

//     block.addEventListener("click", (e) => {
//       const btn = e.target.closest(".services-menu__button");
//       if (!btn) return;

//       e.preventDefault();
//       const targetId = btn.getAttribute("data-service");
//       if (!targetId) return;

//       buttons.forEach((b) => b.classList.toggle("active", b === btn));

//       groups.forEach((g) => {
//         if (g.id === targetId) {
//           g.style.cssText = "display: grid !important; opacity: 1 !important; visibility: visible !important;";
//           g.classList.add("active");
//           g.classList.remove("hidden");
//         } else {
//           g.style.cssText = "display: none !important; opacity: 0 !important; visibility: hidden !important;";
//           g.classList.remove("active");
//           g.classList.add("hidden");
//         }
//       });
    // });
  });

  drawDiagonalBorders();

}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initServices, { once: true });
} else {
  initServices();
}
