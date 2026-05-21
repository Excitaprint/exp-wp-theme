(() => {
  const target = document.querySelector(".coupon-1");
  if (!target) return;

  // New logic
  const isMobile = window.matchMedia("(max-width: 428px)").matches;

  let WIDTH_PCT = 0.28;
  let HEIGHT_PCT = 0.115;
  let FONT_SIZE = "24px";

  if (isMobile) {
    WIDTH_PCT = 0.6;
    HEIGHT_PCT = 0.07;
    FONT_SIZE = "16px";
  }

  // const HEIGHT_PCT = 0.12;
  const DROP = 12;
  const RADIUS = 4;
  const LEFT = 0;
  const color =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent-a")
      .trim() || "#f43c1e";

  // Dimensions or placement?
  const w = target.offsetWidth;
  const h = target.offsetHeight;
  if (!w || !h) return;

  // Badge placement math -- keep same
  const badgeW = w * WIDTH_PCT;
  const badgeH = h * HEIGHT_PCT;
  const x = LEFT;
  const y = 0; // vertical center on top border

  const pivotX = x + badgeW / 2;
  const pivotY = y + (badgeH + DROP) / 2;

  const canvas = document.createElement("canvas");
  canvas.className = "coupon-badge-canvas";
  canvas.width = w;
  canvas.height = h;
  canvas.style.position = "absolute";
  canvas.style.inset = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "3";
  canvas.style.left = "-15px"; // Positioning from parent geometry
  canvas.style.top = "-15px"; // Positioning from parent geometry
  canvas.style.transformOrigin = `${pivotX}px ${pivotY}px`;
  canvas.style.transform = "rotate(-3deg)";

  const label = document.createElement("div");
  label.className = "coupon-badge-label";
  label.textContent = "Limited Time Offer!";
  label.style.fontFamily = "var(--font-a)";
  label.style.color = "var(--bright-white)";
  label.style.paddingBottom = "12px";
  label.style.position = "absolute";
  label.style.left = `${x + badgeW / 2 - 15}px`; // Match parent geo coordinates or make var
  label.style.top = `${y + (badgeH + DROP) / 2 - 15}px`; // Match parent geo coordinates or make var
  label.style.transform = "translate(-50%, -50%) rotate(-3deg)";

  label.style.transform = "translate(-50%, -50%) rotate(-3deg)";
  label.style.transformOrigin = `${pivotX}px ${pivotY}px`;
  label.style.zIndex = "4";
  label.style.color = "#fff";
  label.style.fontWeight = "700";
  label.style.fontSize = FONT_SIZE; // Variable; see declarative statements at top of file
  label.style.pointerEvents = "none";

  label.style.display = "flex";
label.style.alignItems = "center";
label.style.justifyContent = "center";
label.style.textAlign = "center";
label.style.whiteSpace = "nowrap";


  target.appendChild(label);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Quad points: TL, TR, BR(lower), BL
  const pts = [
    [x, y],
    [x + badgeW, y],
    [x + badgeW, y + badgeH + DROP],
    [x, y + badgeH],
  ];

  const len = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay);
  const insetToward = (px, py, qx, qy, d) => {
    const L = len(px, py, qx, qy) || 1;
    return [px + ((qx - px) / L) * d, py + ((qy - py) / L) * d];
  };

  ctx.beginPath();

  // Start at TL inset toward TR
  {
    const [sx, sy] = insetToward(
      pts[0][0],
      pts[0][1],
      pts[1][0],
      pts[1][1],
      RADIUS,
    );
    ctx.moveTo(sx, sy);
  }

  for (let i = 0; i < 4; i++) {
    const p0 = pts[i];
    const p1 = pts[(i + 1) % 4];
    const p2 = pts[(i + 2) % 4];

    const [ex, ey] = insetToward(p1[0], p1[1], p0[0], p0[1], RADIUS); // into corner from prev edge
    const [nx, ny] = insetToward(p1[0], p1[1], p2[0], p2[1], RADIUS); // out of corner to next edge

    ctx.lineTo(ex, ey);
    ctx.quadraticCurveTo(p1[0], p1[1], nx, ny);
  }

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  target.appendChild(canvas);
})();

// Start squiggles script

// const applyCanvasMask = (targetDiv, humpCount = 6) => {
//   if (!targetDiv) {
//     return;
//   }

//   const w = targetDiv.offsetWidth;
//   const h = targetDiv.offsetHeight;

//   if (!w || !h) {
//     return;
//   }

//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");

//   if (!ctx) {
//     return;
//   }

//   canvas.width = w;
//   canvas.height = h;

//   const humpWidth = w / humpCount;
//   const humpHeight = 24;

//   ctx.beginPath();
//   ctx.moveTo(0, h - humpHeight);

// for (let i = 0; i < humpCount; i++) {
//   const x = i * humpWidth;
//   const cp1x = x + humpWidth / 4;
//   const cp2x = x + (3 * humpWidth) / 4;
//   const endX = x + humpWidth;
//   const controlY = i % 2 === 0 ? h : h - humpHeight * 2;

//   ctx.bezierCurveTo(cp1x, controlY, cp2x, controlY, endX, h - humpHeight);
// }

// ctx.lineTo(w, h);
// ctx.lineTo(0, h);

//   ctx.closePath();
//   ctx.fill();

//   const maskUrl = canvas.toDataURL();
//   targetDiv.style.webkitMaskImage = `url(${maskUrl})`;
//   targetDiv.style.maskImage = `url(${maskUrl})`;
//   targetDiv.style.webkitMaskRepeat = "no-repeat";
//   targetDiv.style.maskRepeat = "no-repeat";
//   targetDiv.style.webkitMaskSize = "100% 100%";
//   targetDiv.style.maskSize = "100% 100%";
//   targetDiv.style.webkitMaskPosition = "top left";
//   targetDiv.style.maskPosition = "top left";
// };

// const getHumpCount = () => (window.innerWidth < 600 ? 6 : 8);

// const applyMasks = () => {
//   const targets = document.querySelectorAll(".wp-block-coupon .squiggles");
//   const humpCount = getHumpCount();

//   targets.forEach((target) => {
//     applyCanvasMask(target, humpCount);
//   });
// };

// let timeout;
// window.addEventListener("resize", () => {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     applyMasks();
//   }, 200);
// });

// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", applyMasks);
// } else {
//   applyMasks();
// }
