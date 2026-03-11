export function applyBrandTheme() {
    const color = import.meta.env.VITE_BRAND_COLOR;
    const background = import.meta.env.VITE_BACKGROUND_COLOR;
  
    if (!color) return;
  
    const style = document.createElement("style");
  
    // .bg-n-background { background-color: ${background} !important; }
    style.innerHTML = `
      .bg-n-brand { background-color: ${color} !important; }
      .text-link { color: ${color} !important; }
      .text-n-brand { color: ${color} !important; }
      .border-n-brand { border-color: ${color} !important; }
    `;
  
    document.head.appendChild(style);
  
    console.log("Brand color:", color);
  }