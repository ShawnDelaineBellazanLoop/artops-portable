/**
 * ArtOps — DocFX Modern Template JS Layer
 * DocFX 2.78.5 · main.js · 2026-06-12
 *
 * Uses the docfx options object:
 *   https://dotnet.github.io/docfx/docs/template.html
 */
export default {
  /** Default to dark theme — product site is dark-first */
  defaultTheme: 'dark',

  /** Icon links in navbar */
  iconLinks: [
    {
      icon: 'github',
      href: 'https://github.com/ShawnDelaineBellazanLoop/artops-portable',
      title: 'ArtOps on GitHub'
    }
  ],

  /** Load Inter font from Google Fonts for premium typography */
  start: () => {
    // Inject Inter + JetBrains Mono from Google Fonts
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(fonts);

    // Add version badge to footer
    const footer = document.querySelector('footer');
    if (footer) {
      const badge = document.createElement('div');
      badge.style.cssText = 'text-align:center;margin-top:0.5rem;font-family:monospace;font-size:0.7rem;opacity:0.4;letter-spacing:0.05em;';
      badge.textContent = 'ArtOps v1.0.0 · PMCRO 2.0.0 · DocFX 2.78.5 · .NET 8';
      footer.appendChild(badge);
    }
  }
}
