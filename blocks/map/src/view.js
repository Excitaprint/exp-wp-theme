(() => {
  document
    .querySelectorAll(".map-iframe")
    .forEach((iframe) => {
      iframe.style.pointerEvents = "none";
    });
})();
