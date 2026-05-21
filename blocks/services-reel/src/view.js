document.addEventListener("DOMContentLoaded", () => {
    const reelContainer = document.querySelector('.services_reel-reel-wrapper');
    if (!reelContainer) return;

    const totalCards = 6; 

    const cardsMarkup = Array.from({ length: totalCards }, (_, i) => i + 1)
        .map(num => `
            <div class="services_reel-card">
            </div>
        `).join('');

        // const cardsHidden = grabCSSClass
        // add onClick / onTap listener
        // { start func = Show More }
        // Link to full page on tap again:
        // How to easily in JS? State or if statement? 
        // Great feature! Not avail on normal page

    reelContainer.innerHTML = cardsMarkup;
});

// function drawDiagonalBorders() {
//   const parents = document.querySelectorAll(BLOCK_SELECTOR);

//   parents.forEach((parent) => {
//     if (parent.dataset.canvasAttached === "true") return;
//     parent.dataset.canvasAttached = "true";

//     const canvas = parent.querySelector(".services-lines");
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     function performDraw() {
//       const rect = parent.getBoundingClientRect();
//       const parentWidth = Math.floor(rect.width);
//       const parentHeight = Math.floor(rect.height);

//       if (parentWidth <= 0 || parentHeight <= 0 || parentWidth > 5000 || parentHeight > 5000) return;

//       const dpr = Math.min(window.devicePixelRatio || 1, 3);
//       canvas.width = parentWidth * dpr;
//       canvas.height = parentHeight * dpr;

//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);

//       const style = window.getComputedStyle(parent);
//       const lineTop = 0;
//       const pl = parseFloat(style.paddingLeft) || 0;
//       const pr = parseFloat(style.paddingRight) || 0;
//       const lineHeight = parentHeight;
//       const colWidth = (parentWidth - pl - pr) / 12;
//       const spacing = parentWidth < 600 ? 12 : 16;

//       ctx.clearRect(0, 0, parentWidth, parentHeight);
//       const strokeColor = style.getPropertyValue("--dark-blue").trim() || "#376eb6";
//       ctx.strokeStyle = strokeColor;
//       ctx.lineWidth = 0.45;

//       const drawHatch = (xStart, width) => {
//         const xEnd = xStart + width;
//         ctx.save();
//         ctx.beginPath();
//         ctx.rect(xStart, lineTop, width, lineHeight);
//         ctx.clip();
//         ctx.beginPath();

//         for (let x = xStart; x < xEnd + lineHeight; x += spacing) {
//           ctx.moveTo(x, lineTop);
//           ctx.lineTo(x - lineHeight, lineTop + lineHeight);
//         }

//         ctx.stroke();
//         ctx.restore();
//       };

//       drawHatch(pl, colWidth * 1);
//       drawHatch(pl + colWidth * 11, parentWidth - pr - (pl + colWidth * 10));

//       ctx.beginPath();
//       ctx.moveTo(pl + colWidth * 1, lineTop);
//       ctx.lineTo(pl + colWidth * 1, lineTop + lineHeight);
//       ctx.moveTo(pl + colWidth * 11, lineTop);
//       ctx.lineTo(pl + colWidth * 11, lineTop + lineHeight);
//       ctx.stroke();
//     }

//     let timer;
//     new ResizeObserver(() => {
//       clearTimeout(timer);
//       timer = setTimeout(performDraw, 50);
//     }).observe(parent);

//     performDraw();
//   });
//   drawDiagonalBorders();
// }
