
  let currentUrl = "";

  function openOverlay(url) {
    currentUrl = url;
    const overlay = document.getElementById("overlay-frame");
    const iframe = document.getElementById("overlay-iframe");
    iframe.src = url;
    overlay.style.display = "flex";
  }

  function closeOverlay() {
    document.getElementById("overlay-frame").style.display = "none";
  }

  function refreshOverlay() {
    const iframe = document.getElementById("overlay-iframe");
    iframe.src = ""; // Force refresh
    iframe.src = currentUrl;
  }

