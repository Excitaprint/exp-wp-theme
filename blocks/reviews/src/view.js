const applyCanvasMask = (targetDiv, humpCount = 6) => {
  if (!targetDiv) {
    return;
  }

  const w = targetDiv.offsetWidth;
  const h = targetDiv.offsetHeight;

  if (!w || !h) {
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  canvas.width = w;
  canvas.height = h;

  const humpWidth = w / humpCount;
  const humpHeight = 24;

  ctx.beginPath();
  ctx.moveTo(0, humpHeight);

  for (let i = 0; i < humpCount; i++) {
    const x = i * humpWidth;
    const cp1x = x + humpWidth / 4;
    const cp2x = x + (3 * humpWidth) / 4;
    const endX = x + humpWidth;
    const controlY = i % 2 === 0 ? 0 : humpHeight * 2;

    ctx.bezierCurveTo(cp1x, controlY, cp2x, controlY, endX, humpHeight);
  }

ctx.lineTo(w, 0);
ctx.lineTo(0, 0);

  ctx.closePath();
  ctx.fill();

  const maskUrl = canvas.toDataURL();
  targetDiv.style.webkitMaskImage = `url(${maskUrl})`;
  targetDiv.style.maskImage = `url(${maskUrl})`;
  targetDiv.style.webkitMaskRepeat = "no-repeat";
  targetDiv.style.maskRepeat = "no-repeat";
  targetDiv.style.webkitMaskSize = "100% 100%";
  targetDiv.style.maskSize = "100% 100%";
  targetDiv.style.webkitMaskPosition = "top left";
  targetDiv.style.maskPosition = "top left";
};

const getHumpCount = () => (window.innerWidth < 600 ? 6 : 8);

const applyMasks = () => {
  const targets = document.querySelectorAll(".wp-block-reviews .squiggles");
  const humpCount = getHumpCount();

  targets.forEach((target) => {
    applyCanvasMask(target, humpCount);
  });
};

let timeout;
window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    applyMasks();
  }, 200);
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyMasks);
} else {
  applyMasks();
}
