// DOM Layout Debug Script 
// Overflow Debuggin Script
// Viewport Overflow Detector Script
//
// Written by Codex for CRM Electric WP Theme
//
// Identifies overflowing elements and encircles in red

const vw = document.documentElement.clientWidth;

[...document.querySelectorAll("*")].forEach((el) => {
  const r = el.getBoundingClientRect();
  if (r.width > vw || r.right > vw || r.left < 0) {
    console.log(el, {
      width: r.width,
      left: r.left,
      right: r.right,
      viewport: vw,
    });
    el.style.outline = "2px solid red";
  }
});