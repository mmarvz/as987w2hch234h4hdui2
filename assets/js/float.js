let currentUrl = "";

// Overlay open function
function openOverlay(url) {
  currentUrl = url;
  const overlay = document.getElementById("overlay-frame");
  const iframe = document.getElementById("overlay-iframe");
  iframe.src = url;
  overlay.style.display = "flex";
}

// Overlay close function
function closeOverlay() {
  document.getElementById("overlay-frame").style.display = "none";
}

// Refresh iframe with the same URL
function refreshOverlay() {
  const iframe = document.getElementById("overlay-iframe");
  iframe.src = ""; // Force refresh
  iframe.src = currentUrl;
}

// Inject the floating buttons
function insertFloatingButtons() {
  const container = document.getElementById("floating-container");
  container.innerHTML = `
    <div class="floating-buttons">
      <input type="checkbox" class="checkbox" id="toggle-menu" />
      <span class="button-menu"></span>

      <button class="option-a option" onclick="openOverlay('float/sheet/index.html')" title="[Form] Monitor Supplies and Equipment">&nbsp;♔</button>
      <button class="option-b option" onclick="openOverlay('https://forms.gle/afk7YdLU9Ut9DYL98')" title="[Form] Report Housekeeping Service">&nbsp;♗</button>
      <button class="option-c option" onclick="openOverlay('https://forms.gle/VmXHeV2TQV2qjywP7')" title="[Form] Submit an Activity">&nbsp;♘</button>
      <button class="option-d option" onclick="openOverlay('https://forms.gle/L5weYpG5r3qKQfjb7')" title="[Form] Request Change Schedule">&nbsp;♖</button>
      <button class="option-e option" onclick="openOverlay('https://forms.gle/W6b1UPCaEvQTkJQm8')" title="[Form] Add New Employee">&nbsp;♙</button>
      <button class="option-f option" onclick="openOverlay('float/pricelist/index.html')" title="Test 2">&nbsp;&nbsp;♤</button>
      <button class="option-g option" onclick="openOverlay('float/notepad/index.html')" title="Test 1">&nbsp;&nbsp;♡</button>
      <button class="option-h option" onclick="openOverlay('float/latecalculator.html')" title="Tardiness Calculator">&nbsp;&nbsp;♧</button>
      <button class="option-i option" onclick="openOverlay('http://pc.ushareit.com/')" title="Transfer Files">&nbsp;&nbsp;♢</button>
    </div>
  `;
}

// Run on page load
window.addEventListener("DOMContentLoaded", insertFloatingButtons);