/* ============================================================
   HEYYANIXX — EDIT THIS FILE TO UPDATE THE SITE
   ------------------------------------------------------------
   Everything you'd want to change lives here: links, contact,
   your work, services and prices, store, gaming card, Lab.
   Keep the quotes and commas. "—" means "not filled in yet".
   ============================================================ */

export const LINKS = {
  instagram: "https://www.instagram.com/heyyy.anixx_/",
  youtube:   "https://www.youtube.com/@smart_anish69",
};

/* Where "Work With Me" and store "Buy" requests go.
   email: requests open as a prefilled email to this address.
   whatsappUsername: shown as a copy chip ("Search this username on WhatsApp").
   instagramDM: the Instagram DM link offered as the second option.
   Leave email empty and the site says plainly that requests aren't connected yet. */
export const CONTACT = {
  email: "contact@heyyanixx.de5.net",
  whatsappUsername: "@heyyy.anixx_",
  instagramDM: "https://ig.me/m/heyyy.anixx_",
};

export const PROFILE = { photo: "assets/ig/profile.jpg" };

/* Read from the public Instagram profile on 27 Oct 2026. */
export const INSTAGRAM = {
  handle: "heyyy.anixx_",
  name: "Aɴɪsʜ...🎧",
  role: "Editor",
  bio: "AND IN THE END WHAT MATTERS IS WHO STAYED !!! ❤️‍🩹",
  posts: 6,
  followers: 9744,
  following: 2,
  photo: "assets/ig/profile.jpg",
};

/* Read from the public YouTube channel on 27 Oct 2026. */
export const YOUTUBE = {
  name: "Smart_anish⁶⁹",
  handle: "@Smart_anish69",
  tagline: "Welcome to my Gaming World!",
  subscribers: 140,
  videos: 21,
  avatar: "assets/yt/avatar.jpg",
  banner: "assets/yt/banner.jpg",
};

/* Free Fire MAX — from the in-game profile. "—" = not given yet. */
export const GAMING = {
  game: "Free Fire MAX",
  ign: "HEYYANIXX",
  uid: "740580468",
  guild: "The Mafia",
  level: 72,
  rank: "Heroic",
  likes: 13260,
  years: "7+",
  clashSquad: "Season 39 · ★45",
  badges: ["7 Years Old", "Adshot Artist", "Dawn Valor"],
  style: "Free-style",
  weaponClass: "Rifler",
  loadout: ["Desert Eagle", "M1887"],
  language: "English",
  // numbers on the 3D player card (front: level + likes; back: Clash Squad, emblems)
  csSeason: 39,
  csStars: 45,
  heroicEmblem: 28,
  rifler: 10,
  avatar: "assets/ff/avatar-crown.webp", // crown avatar cropped from the in-game banner
};

export const CATEGORIES = [
  { id: "video",     label: "Video Editing" },
  { id: "cinematic", label: "Cinematic" },
  { id: "ai",        label: "AI" },
  { id: "photo",     label: "Photo" },
  { id: "gaming",    label: "Gaming" },
  { id: "web",       label: "Web / UI" },
];

const IG = "https://www.instagram.com/";
const YT = "https://www.youtube.com/";

/* SELECTED WORK + YT WORKS. Instagram items fill SELECTED WORK (autoplaying portrait grid);
   YouTube items fill the YT WORKS section (live streams 16:9, Shorts 9:16), opening in an embedded player.
   Each tile = one project card (PROJECT 001 …).
   type "image" | "video" (video src = short muted preview).
   link = the real post/video. platform = "YouTube" | "Instagram".
   role / tools only when known — leave them out otherwise.
   size: "wide" | "tall" | "square". ig: true = also in the 3D Instagram ring. */
export const WORK = [
  { category: "video", title: "Aroma Restaurant, Dumka — Promo Edit", sub: "Real local business promo · unpaid practice project", type: "video", kind: "Promo",
    src: "assets/work/aroma-dumka-promo-loop.mp4", full: "assets/work/aroma-dumka-promo.mp4", poster: "assets/work/aroma-dumka-promo.jpg",
    size: "tall", platform: "Promo", role: "Edit", alt: "Aroma Restaurant storefront in Dumka at night",
    description: "70-second vertical promo for Aroma Restaurant in Dumka, Jharkhand: street shots of the area, speed-ramp transitions, 3D text titles and the decorated birthday / anniversary interior. Done unpaid, for experience. Tools: CapCut · Alight Motion · Higgsfield AI." },
  { category: "ai", title: "BHOOL BHULAIYAA — AI Trailer Edit", sub: "AI cinematic trailer edit · YouTube Short", type: "image",
    src: "assets/yt/0GZ_yNXh6Mk.jpg", size: "tall", platform: "YouTube", views: 436, role: "Edit", tools: "AI · Mobile editing",
    link: YT + "shorts/0GZ_yNXh6Mk" },
  { category: "cinematic", title: "Tere Bin Main", sub: "Sad cinematic performance · Korean aesthetic · by @RealFeel9", type: "image",
    src: "assets/yt/eAUeW2c1oPw.jpg", size: "tall", platform: "YouTube", views: 1200, role: "Edit",
    link: YT + "shorts/eAUeW2c1oPw" },
  { category: "video", title: "Solo Leveling", sub: "Anime edit · YouTube Short", type: "image",
    src: "assets/yt/yUQYXQEFRn0.jpg", size: "tall", platform: "YouTube", views: 540, role: "Edit",
    link: YT + "shorts/yUQYXQEFRn0" },
  { category: "gaming", title: "Rank Push Live — Bronze to Grandmaster", sub: "Free Fire MAX live stream · 1:12:53", type: "image",
    src: "assets/yt/wwK6DgEI8WM.jpg", size: "wide", platform: "YouTube", role: "Player · Streamer",
    link: YT + "watch?v=wwK6DgEI8WM" },
  { category: "video", title: "New Year 2026 · Mandar Hills", sub: "Travel / birthday reel · Instagram", type: "video", ig: true, kind: "Reel",
    src: "assets/ig/DS9KDjuEecm-loop.mp4", poster: "assets/ig/DS9KDjuEecm.jpg", size: "tall", platform: "Instagram", role: "Edit",
    description: "New Year 2026 | Birthday Vibes | Mandar Hills, Jharkhand 🌄🎂✨", link: IG + "reel/DS9KDjuEecm/", igOrder: 6 },
  { category: "gaming", title: "PAL PAL × FREE FIRE", sub: "Free Fire edit · YouTube Short", type: "image",
    src: "assets/yt/xzlmgLROBfE.jpg", size: "tall", platform: "YouTube", views: 1600, role: "Edit",
    link: YT + "shorts/xzlmgLROBfE" },
  { category: "ai", title: "Gemini AI Prompt", sub: "AI photo editing · YouTube Short", type: "image",
    src: "assets/yt/zJ_TIsO28W8.jpg", size: "tall", platform: "YouTube", views: 1200, tools: "Gemini",
    link: YT + "shorts/zJ_TIsO28W8" },
  { category: "photo", title: "🧿🤍", sub: "Portrait edit · Instagram", type: "image", ig: true, kind: "Post",
    src: "assets/ig/Dbc7en-IQZi.jpg", size: "tall", platform: "Instagram", alt: "Edited portrait against the sky", role: "Photo edit",
    link: IG + "p/Dbc7en-IQZi/", igOrder: 1 },
  { category: "gaming", title: "No Custom HUD Challenge", sub: "Free Fire MAX · collab with BROKEN FF · YouTube Short", type: "image",
    src: "assets/yt/l3anKZF1QXg.jpg", size: "tall", platform: "YouTube", views: 181, role: "Player",
    link: YT + "shorts/l3anKZF1QXg" },
  { category: "video", title: "SWITCH 🔥", sub: "Transition edit · Instagram", type: "video", ig: true, kind: "Reel",
    src: "assets/ig/DbNoxPTOkfq-loop.mp4", poster: "assets/ig/DbNoxPTOkfq.jpg", size: "tall", platform: "Instagram", role: "Edit",
    link: IG + "reel/DbNoxPTOkfq/", igOrder: 3 },
  { category: "gaming", title: "4v4 Custom Live — Full Tryhard", sub: "Free Fire MAX live stream · 28:15", type: "image",
    src: "assets/yt/DJcfQkASsuo.jpg", size: "wide", platform: "YouTube", role: "Player · Streamer",
    link: YT + "watch?v=DJcfQkASsuo" },
  { category: "video", title: "EDIT 🔥", sub: "Reel edit · Instagram", type: "video", ig: true, kind: "Reel",
    src: "assets/ig/DbNMY9hpi3s-loop.mp4", poster: "assets/ig/DbNMY9hpi3s.jpg", size: "tall", platform: "Instagram", role: "Edit",
    link: IG + "reel/DbNMY9hpi3s/", igOrder: 4 },
  { category: "video", title: "Style 🔥", sub: "Style reel · Instagram", type: "video", ig: true, kind: "Reel",
    src: "assets/ig/DbNJlgiI70i-loop.mp4", poster: "assets/ig/DbNJlgiI70i.jpg", size: "tall", platform: "Instagram", role: "Edit",
    link: IG + "reel/DbNJlgiI70i/", igOrder: 5 },
  { category: "video", title: "Travel reel", sub: "Travel edit · Instagram", type: "video", ig: true, kind: "Reel",
    src: "assets/ig/DazdUSCIaof-loop.mp4", poster: "assets/ig/DazdUSCIaof.jpg", size: "tall", platform: "Instagram", role: "Edit",
    description: "Follow for more travel content ❤️ What is your dream destination? 😍", link: IG + "reel/DazdUSCIaof/", igOrder: 2 },
  // Original portfolio categories stay visible before new pieces are uploaded.
  // These are honest placeholders, not invented projects or stats.
  { category: "cinematic", title: "Coming soon", type: "image", src: null, size: "wide" },
  { category: "ai", title: "Coming soon", type: "image", src: null, size: "square" },
  { category: "photo", title: "Coming soon", type: "image", src: null, size: "wide" },
  { category: "gaming", title: "Coming soon", type: "image", src: null, size: "square" },
  { category: "web", title: "Coming soon", type: "image", src: null, size: "wide" },
];

/* LET'S CREATE — services and prices (₹). price: shown exactly as written.
   quote: true = "Custom quote" instead of a price. */
export const SERVICES = [
  { id: "video", icon: "🎬", name: "Video Editing", items: [
    ["Reels / Shorts", "₹499+"], ["YouTube video", "₹999+"], ["Cinematic edits", "₹1,499+"], ["Gaming montage", "₹999+"], ["Advanced / long-form editing", "₹2,499+"] ] },
  { id: "aivideo", icon: "🤖", name: "AI Video Editing", items: [
    ["AI-enhanced reels", "₹799+"], ["AI cinematic video", "₹1,499+"], ["AI character / video concepts", "₹1,999+"] ] },
  { id: "photo", icon: "📸", name: "Photo Editing", items: [
    ["Professional retouch", "₹299+"], ["Cinematic photo edit", "₹499+"], ["AI photo manipulation", "₹699+"], ["Premium poster", "₹999+"] ] },
  { id: "prompts", icon: "🧠", name: "AI Prompts", items: [
    ["Custom image prompt", "₹199+"], ["Advanced cinematic prompt", "₹299+"], ["Prompt packs", "₹499+"], ["Custom AI workflow", "₹999+"] ] },
  { id: "books", icon: "📚", name: "Books & Digital Products", items: [
    ["Prompt ebook", "₹199–499"], ["Editing guide", "₹299–699"], ["AI creator guide", "₹499–999"], ["Premium creator bundle", "₹999+"] ] },
  { id: "web", icon: "🌐", name: "AI Web Design", items: [
    ["Landing page", "₹2,999+"], ["Portfolio website", "₹4,999+"], ["Business website", "₹7,999+"], ["Premium interactive website", "₹12,999+"] ] },
  { id: "agents", icon: "🛰️", name: "AI Agents", items: [
    ["Simple AI chatbot", "₹2,999+"], ["Custom AI assistant", "₹5,999+"], ["Business automation agent", "₹9,999+"], ["Advanced AI workflow", "₹14,999+"] ] },
  { id: "automation", icon: "⚡", name: "AI Automation", quote: true, items: [
    ["Lead collection"], ["Customer enquiry automation"], ["Content workflows"], ["Email automation"], ["Social media workflows"], ["Business dashboards"] ] },
  { id: "rooms", icon: "🎮", name: "Paid Custom Rooms / Join the Squad", quote: true, items: [
    ["Paid Free Fire custom rooms"], ["Join my paid team / squad"] ] },
];

/* STORE — "Buy" opens the request flow (no checkout on the site). */
export const STORE = [
  { name: "Prompt Packs", price: "₹499+", note: "Ready-to-use AI image & cinematic prompts", icon: "🧠" },
  { name: "Editing Presets", price: "Price on request", note: "Looks and presets from my edits", icon: "🎚️" },
  { name: "AI Workflows", price: "₹999+", note: "Step-by-step custom AI workflows", icon: "⚙️" },
  { name: "Ebooks", price: "₹199–999", note: "Prompt ebook · Editing guide · AI creator guide", icon: "📚" },
  { name: "Templates", price: "Price on request", note: "Project and edit templates", icon: "🧩" },
  { name: "Creator Bundles", price: "₹999+", note: "Premium creator bundle", icon: "🎁" },
];

/* AI LAB — demo/process/study: a URL (or "#hero" for this site) or null = Coming soon. */
export const LAB = [
  { name: "AI Character Generator", text: "Turning ideas into consistent AI characters.", demo: null, process: null, study: null },
  { name: "3D Portfolio Experiment", text: "This website — real-time 3D, built to feel like a creator's world.", demo: "#hero", process: null, study: null },
  { name: "AI Video Workflow", text: "AI-assisted cinematic edits, like the Bhool Bhulaiyaa trailer edit.", demo: YT + "shorts/0GZ_yNXh6Mk", process: null, study: null },
  { name: "AI Agent", text: "Assistants that answer, sort and follow up for a business.", demo: null, process: null, study: null },
  { name: "Web Experiment", text: "Interactive web pieces and UI motion tests.", demo: null, process: null, study: null },
  { name: "Prompt Engineering", text: "Prompts that get cinematic results, like my Gemini AI prompt short.", demo: YT + "shorts/zJ_TIsO28W8", process: null, study: null },
];

/* About → MY SETUP. Only facts you gave. */
export const SETUP = {
  title: "ASUS TUF Gaming A15 — where the work happens",
  video: "assets/setup/wallpaper.mp4",
  poster: "assets/setup/wallpaper.webp",
  chips: ["ASUS TUF A15", "Editing", "AI", "Gaming", "3D"],
};

/* 360° IDENTITY — from the character sheets. Frames go round in this order. */
export const IDENTITY = {
  alias: "Mafia Anish",
  fits: ["black", "yellow", "white"],
  angles: ["front", "r34", "rprof", "back", "lprof", "l34"],
  expressions: ["neutral", "smile", "serious", "left", "right", "up", "down"],
  path: (fit, name) => `assets/id/${fit}-${name}.webp`,
};

/* Your logo. Set src to e.g. "assets/logo.png" (transparent PNG/WebP) and
   it appears in the loader and hero with a 3D spin. null = hidden. */
export const LOGO = { src: null };

/* NEED HELP? — FAQ. Only facts you've given; policies say "discuss on request". */
const ASK = "Discuss on request; every project is quoted individually.";
export const FAQ = [
  { q: "What services do you offer?", a: "Video editing, AI video editing, photo editing, AI prompts, books & digital products, AI web design, AI agents and AI automation — plus paid Free Fire custom rooms and spots on my squad." },
  { q: "What are your starting prices?", a: "Reels / Shorts from ₹499, YouTube videos from ₹999, gaming montages from ₹999, cinematic edits from ₹1,499, photo retouch from ₹299, custom image prompts from ₹199, landing pages from ₹2,999 and AI chatbots from ₹2,999. The full list is in Let's Create. AI automation and custom rooms are quoted per project." },
  { q: "How do I request a quote?", a: "Tap Let's create (or any Request button), answer six quick questions, then send the request by email or Instagram DM. I reply personally." },
  { q: "How do I contact you?", a: "Email contact@heyyanixx.de5.net, Instagram @heyyy.anixx_, or WhatsApp — search the username @heyyy.anixx_ in WhatsApp." },
  { q: "Do you do paid custom rooms? Can I join the squad?", a: "Yes — paid Free Fire custom rooms and spots on my paid team. Request it through Work With Me and I'll send a quote." },
  { q: "How do I buy from the store?", a: "Tap Buy on a product. Your order request comes to me by email or Instagram DM and I reply personally." },
  { q: "How long does a project take?", a: ASK },
  { q: "How do I pay?", a: ASK },
  { q: "Do you offer refunds?", a: ASK },
  { q: "How many revisions do I get?", a: ASK },
  { q: "Where can I see your work?", a: "Selected Work on this site, my YouTube channel @Smart_anish69 and my Instagram @heyyy.anixx_." },
];

/* Background music: OFF by default; loads only when the visitor turns sound on.
   Original instrumental synthesized in code for this site (pads, sub bass, hats,
   piano motif) — no samples, no third-party licence. 80 s seamless loop, 96 kbps.
   Set src to null to remove music (UI sounds still follow the same toggle). */
export const MUSIC = { src: "assets/audio/bgm-once.mp3", title: "HEYYANIXX — Night Gold (original instrumental)", playSeconds: 22 };

/* TOOLKIT — the app icons in the EDITING halo and the 04 AI Lab universe.
   Each entry: { name, icon }. `icon` is optional: a key from ICONS in src/toolkit.js, or an object
   { abbr: "Pr", bg: ["#2b0b4f","#12002b"], fg: "#ea7bff" } or { glyph: "star4", bg: [...] }.
   An entry with no name renders as an unnamed glyph cube (no tooltip). Icons are drawn by the site — no logo files. */
export const TOOLS = {
  /* Confirmed by Heyyanixx, 27 Oct 2026. */
  editing: [
    { name: "Premiere Pro" },
    { name: "After Effects" },
    { name: "Photoshop" },
    { name: "CapCut" },
    { name: "Alight Motion" },
    { name: "Lightroom" },
    { name: "DaVinci Resolve" },
  ],
  /* AI tools: not confirmed yet — unnamed generic glyph cubes until the person sends the real list. */
  ai: [
    { name: "", icon: { glyph: "star4", bg: ["#3a2c12", "#120d05"], fg: "#e3b65a" } },
    { name: "", icon: { glyph: "burst", bg: ["#3b0d2e", "#14040f"], fg: "#ff7ad9" } },
    { name: "", icon: { glyph: "wave", bg: ["#22104a", "#0a0420"], fg: "#b48cff" } },
    { name: "", icon: { glyph: "play", bg: ["#4a1010", "#1a0404"], fg: "#ff6b5a" } },
    { name: "", icon: { glyph: "sail", bg: ["#0f2a3d", "#04101a"], fg: "#7cd4ff" } },
    { name: "", icon: { glyph: "star4", bg: ["#2e2410", "#0f0b04"], fg: "#fff1c9" } },
  ],
};
