/* HEYY ARCADE loader: tiny; pulls the games only when someone taps Play. */
const BASE = new URL('../games/', import.meta.url);
const V = '2';
let p = null;
function load() {
  if (!p) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = new URL('arcade.css?v=' + V, BASE).href;
    const css = new Promise((r) => { l.onload = r; l.onerror = r; setTimeout(r, 2500); });
    document.head.appendChild(l);
    p = Promise.all([import(new URL('arcade.js?v=' + V, BASE).href), css]).then(([m]) => m).catch((e) => { p = null; throw e; });
  }
  return p;
}
function open(id) { load().then((m) => m.openArcade(id || '')).catch(() => {}); }
document.addEventListener('click', (e) => {
  const b = e.target.closest && e.target.closest('[data-play]');
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  open(b.dataset.play);
}, true);
const m = location.hash.match(/^#play(?:-(\w+))?$/);
if (m) { const go = () => open(m[1]); document.readyState === 'complete' ? go() : addEventListener('load', go, { once: true }); }
// warm the cache when the Gaming section comes near (idle, low priority)
const g = document.getElementById('gaming');
if (g && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => {
    if (es.some((x) => x.isIntersecting)) {
      io.disconnect();
      (window.requestIdleCallback || ((f) => setTimeout(f, 1200)))(() => {
        ['arcade.js', 'arcade.css'].forEach((f) => { const l = document.createElement('link'); l.rel = 'prefetch'; l.href = new URL(f + '?v=' + V, BASE).href; document.head.appendChild(l); });
      });
    }
  }, { rootMargin: '600px 0px' });
  io.observe(g);
}
