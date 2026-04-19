const fs = require('fs');
const svgDefs = fs.readFileSync('D:/iCloudDrive/Claude/1-projects/agencia-web/sites/allrosa/svg-defs.html', 'utf8');

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>All Rosa — Confeitaria Fina</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&family=Cormorant:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
/* ============================================================
   TOKENS
   ============================================================ */
:root {
  --rose:          #D94A7C;
  --rose-soft:     #FFD0E4;
  --rose-deep:     #A83461;
  --pistache:      #D4F5D4;
  --pistache-deep: #4A7C59;
  --cream:         #F5E0C6;
  --cream-soft:    #FBEFDC;
  --bordo:         #3A1820;
  --paper:         #F7F1E8;
  --line:          #E2D4BE;
  --text:          #4a2e32;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.87, 0, 0.13, 1);
}

/* ============================================================
   RESET + BASE
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Manrope', sans-serif;
  background: var(--paper);
  color: var(--bordo);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img, svg { display: block; }
a { text-decoration: none; }

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo);
}
.reveal-left.visible { opacity: 1; transform: translateX(0); }

/* ============================================================
   NAV
   ============================================================ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  padding: 0 clamp(24px, 5vw, 72px);
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  transition: height 0.3s var(--ease-out-expo);
}
.nav.scrolled {
  height: 56px;
}
.nav-logo { display: flex; align-items: center; gap: 12px; }
.nav-cupcake {
  width: 36px; height: 36px;
  --lg-deep: var(--bordo); --lg-line: var(--bordo);
  --lg-rose: var(--rose); --lg-peach: var(--cream-soft);
  transition: transform 0.4s var(--ease-out-expo);
}
.nav-logo:hover .nav-cupcake { transform: rotate(-8deg) scale(1.08); }
.nav-brand-name {
  font-family: 'Fraunces', serif; font-weight: 500; font-size: 20px;
  color: var(--bordo); letter-spacing: .02em;
  display: flex; align-items: center; gap: .24em;
}
.nav-brand-name .dot {
  width: .12em; height: .12em; border-radius: 50%;
  background: var(--rose); display: inline-block; flex: none;
}
.nav-sub { font-size: 8px; letter-spacing: .4em; text-transform: uppercase; color: var(--rose-deep); margin-top: 1px; }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a {
  font-size: 10px; letter-spacing: .2em; text-transform: uppercase;
  color: var(--rose-deep); position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 1px; background: var(--rose);
  transition: width 0.3s var(--ease-out-expo);
}
.nav-links a:hover::after { width: 100%; }
.nav-links a:hover { color: var(--rose); }
.nav-cta {
  background: var(--rose); color: #fff;
  padding: 9px 20px;
  font-size: 10px; letter-spacing: .24em; text-transform: uppercase; font-weight: 600;
  display: inline-flex; align-items: center; gap: 8px;
  position: relative; overflow: hidden;
  transition: color 0.3s;
}
.nav-cta::before {
  content: ''; position: absolute; inset: 0;
  background: var(--rose-deep);
  transform: translateX(-101%);
  transition: transform 0.4s var(--ease-out-expo);
}
.nav-cta:hover::before { transform: translateX(0); }
.nav-cta span, .nav-cta svg { position: relative; z-index: 1; }
.nav-cta svg { width: 15px; height: 15px; }

/* ============================================================
   HERO
   ============================================================ */
.hero {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  min-height: 100svh;
  background: var(--rose-soft);
  position: relative;
  overflow: hidden;
}

/* PHOTO PANEL */
.hero-photo {
  position: relative;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  animation: curtainReveal 1.15s 0.05s var(--ease-out-expo) forwards;
}
@keyframes curtainReveal {
  to { clip-path: inset(0 0% 0 0); }
}
.hero-photo img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 30%;
  transform: scale(1.09);
  animation: photoSettle 2.2s 0.05s var(--ease-out-expo) forwards;
  will-change: transform;
}
@keyframes photoSettle {
  to { transform: scale(1); }
}
.hero-photo::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(to right, rgba(58,24,32,.18) 0%, transparent 60%),
              linear-gradient(to top, rgba(58,24,32,.32) 0%, transparent 50%);
}
.hero-photo-tag {
  position: absolute; bottom: 28px; left: 28px; z-index: 2;
  background: rgba(245,224,198,.92);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  color: var(--bordo);
  padding: 8px 18px;
  font-family: 'Manrope'; font-size: 9px; letter-spacing: .28em; text-transform: uppercase; font-weight: 600;
  display: flex; align-items: center; gap: 10px;
  opacity: 0; transform: translateY(12px);
  animation: fadeUp 0.8s 1.2s var(--ease-out-expo) forwards;
}
.hero-photo-tag::before {
  content: '';
  width: 6px; height: 6px; border-radius: 50%; background: var(--rose); flex: none;
}

/* COPY PANEL */
.hero-copy {
  padding: clamp(88px, 13vh, 150px) clamp(32px, 5vw, 72px) clamp(56px, 8vh, 100px);
  display: flex; flex-direction: column; justify-content: center; gap: 26px;
  position: relative; z-index: 1;
  background: var(--rose-soft);
}
.hero-copy::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><g fill='none' stroke='%23A83461' stroke-width='1' opacity='.06' stroke-linecap='round'><circle cx='35' cy='35' r='12'/><circle cx='35' cy='35' r='7'/><circle cx='35' cy='35' r='3'/><path d='M35 23 Q28 16 21 20 M35 23 Q42 16 49 20'/><path d='M35 47 Q28 54 21 50 M35 47 Q42 54 49 50'/><circle cx='105' cy='105' r='12'/><circle cx='105' cy='105' r='7'/><circle cx='105' cy='105' r='3'/><path d='M105 93 Q98 86 91 90 M105 93 Q112 86 119 90'/><path d='M105 117 Q98 124 91 120 M105 117 Q112 124 119 120'/></g></svg>");
  background-size: 140px 140px;
  animation: botanicDrift 40s linear infinite;
}
@keyframes botanicDrift { from { background-position: 0 0; } to { background-position: 140px 140px; } }

.hero-eyebrow {
  display: flex; align-items: center; gap: 14px;
  font-size: 10px; letter-spacing: .4em; text-transform: uppercase;
  color: var(--rose-deep); font-weight: 600;
  opacity: 0; transform: translateY(20px);
  animation: fadeUp 0.8s 0.4s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
}
.hero-eyebrow::before { content: ''; width: 28px; height: 1px; background: var(--rose-deep); flex: none; }
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
.hero-headline {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(48px, 5.8vw, 82px);
  line-height: .92; letter-spacing: -.025em; color: var(--bordo);
  font-variation-settings: 'opsz' 144;
  opacity: 0; transform: translateY(30px);
  animation: fadeUp 1s 0.52s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
}
.hero-headline em { font-style: italic; color: var(--rose-deep); font-weight: 400; display: block; }
.hero-sub {
  font-family: 'Cormorant', serif; font-style: italic; font-weight: 300;
  font-size: clamp(15px, 1.6vw, 19px); line-height: 1.65; color: var(--text); max-width: 400px;
  opacity: 0; transform: translateY(20px);
  animation: fadeUp 0.9s 0.66s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
}
.hero-actions {
  display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
  opacity: 0; transform: translateY(20px);
  animation: fadeUp 0.9s 0.78s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
}
.badge-green {
  background: var(--cream); color: var(--rose-deep);
  border: 1px solid rgba(168,52,97,.2);
  padding: 4px 12px; border-radius: 100px;
  font-size: 9px; letter-spacing: .22em; text-transform: uppercase; font-weight: 600;
  display: inline-flex; align-items: center; gap: 6px;
  opacity: 0; transform: translateY(16px);
  animation: fadeUp 0.9s 0.9s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
  width: fit-content;
}
.badge-green::before { content: '✦'; font-size: 6px; opacity: .7; }

/* Hero thumbnail strip */
.hero-thumbs {
  display: flex; gap: 8px;
  opacity: 0; transform: translateY(18px);
  animation: fadeUp 0.9s 1.05s var(--ease-out-expo) forwards;
  position: relative; z-index: 1;
}
.hero-thumb {
  width: 58px; height: 58px; overflow: hidden; flex: none;
  border: 2px solid transparent;
  outline: 1px solid rgba(217,74,124,.22);
  outline-offset: 2px;
  transition: outline-color 0.3s, transform 0.4s var(--ease-out-expo);
  cursor: pointer;
}
.hero-thumb:hover { outline-color: var(--rose); transform: translateY(-4px) scale(1.05); }
.hero-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease-out-expo); }
.hero-thumb:hover img { transform: scale(1.14); }

/* BUTTONS */
.btn {
  padding: 13px 26px;
  font-family: 'Manrope'; font-size: 10px; letter-spacing: .28em; text-transform: uppercase; font-weight: 600;
  border: none; cursor: pointer;
  display: inline-flex; align-items: center; gap: 9px;
  position: relative; overflow: hidden; transition: color 0.3s;
}
.btn svg { width: 17px; height: 17px; position: relative; z-index: 1; }
.btn span { position: relative; z-index: 1; }
.btn::before {
  content: ''; position: absolute; inset: 0;
  transform: translateX(-101%);
  transition: transform 0.45s var(--ease-out-expo);
}
.btn:hover::before { transform: translateX(0); }

.btn-rose { background: var(--rose); color: #fff; }
.btn-rose::before { background: var(--rose-deep); }

.btn-bordo { background: var(--bordo); color: var(--cream); }
.btn-bordo::before { background: var(--rose); }

.btn-cream { background: var(--cream); color: var(--pistache-deep); }
.btn-cream::before { background: var(--pistache); }

.btn-ghost-text {
  font-size: 10px; letter-spacing: .24em; text-transform: uppercase; font-weight: 500;
  color: var(--rose-deep); display: inline-flex; align-items: center; gap: 6px;
  transition: gap 0.3s var(--ease-out-expo);
}
.btn-ghost-text:hover { gap: 12px; color: var(--rose); }

/* (hero-right removed — photo panel replaces it) */

/* ============================================================
   DIVIDER
   ============================================================ */
.divider {
  display: flex; align-items: center; gap: 18px;
  padding: 0 clamp(24px, 5vw, 72px);
}
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--line); }
.divider-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--rose); flex: none; }

/* ============================================================
   MARQUEE
   ============================================================ */
.marquee-strip {
  background: var(--rose); overflow: hidden;
  padding: 14px 0;
  white-space: nowrap;
}
.marquee-track {
  display: inline-flex; align-items: center; gap: 0;
  animation: marqueeScroll 38s linear infinite;
  will-change: transform;
}
.marquee-track span {
  font-family: 'Manrope', sans-serif;
  font-size: 10px; font-weight: 600; letter-spacing: .32em; text-transform: uppercase;
  color: #fff; padding: 0 28px;
  opacity: .92;
}
.marquee-track span.sep {
  color: rgba(255,255,255,.45); opacity: 1; padding: 0 4px; letter-spacing: 0;
}
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}

/* ============================================================
   NOSSA HISTÓRIA
   ============================================================ */
.historia {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 520px;
  background: var(--pistache);
}
.historia-panel {
  background: var(--pistache-deep);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 24px; padding: 48px 28px;
  position: relative; overflow: hidden;
}
.historia-panel::before {
  content: ''; position: absolute; inset: 0;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23D4F5D4' stroke-width='1' opacity='.1' stroke-linecap='round'><circle cx='30' cy='30' r='10'/><circle cx='30' cy='30' r='6'/><circle cx='30' cy='30' r='3'/><path d='M30 20 Q24 14 18 18 M30 20 Q36 14 42 18'/><path d='M30 40 Q24 46 18 42 M30 40 Q36 46 42 42'/><circle cx='90' cy='90' r='10'/><circle cx='90' cy='90' r='6'/><circle cx='90' cy='90' r='3'/><path d='M90 80 Q84 74 78 78 M90 80 Q96 74 102 78'/><path d='M90 100 Q84 106 78 102 M90 100 Q96 106 102 102'/></g></svg>");
  background-size: 120px 120px; pointer-events: none;
}
.historia-panel::after { content: ''; position: absolute; inset: 18px; border: 1px solid rgba(212, 245, 212, .18); }
.historia-logo {
  width: 90px; height: auto;
  --lg-deep: var(--pistache); --lg-line: var(--pistache); --lg-rose: var(--rose); --lg-peach: var(--cream-soft);
  filter: drop-shadow(0 8px 18px rgba(0,0,0,.22));
  position: relative; z-index: 1;
  transition: transform 0.5s var(--ease-out-expo);
}
.historia-panel:hover .historia-logo { transform: scale(1.08) rotate(-4deg); }
.historia-panel-lbl {
  font-size: 9px; letter-spacing: .3em; text-transform: uppercase;
  color: var(--pistache); opacity: .5; position: relative; z-index: 1; text-align: center;
}
.historia-body {
  padding: clamp(48px, 7vh, 88px) clamp(40px, 5vw, 80px);
  display: flex; flex-direction: column; justify-content: center; gap: 22px;
}
.sec-eyebrow {
  font-size: 10px; letter-spacing: .36em; text-transform: uppercase; font-weight: 600;
}
.sec-title {
  font-family: 'Fraunces', serif; font-weight: 500;
  font-size: clamp(32px, 3.6vw, 48px); line-height: 1.02; letter-spacing: -.015em;
}
.sec-title em { font-style: italic; font-weight: 400; }
.historia-text {
  font-family: 'Cormorant', serif; font-style: italic; font-weight: 300;
  font-size: clamp(16px, 1.8vw, 20px); line-height: 1.65; color: var(--bordo);
  max-width: 560px; position: relative;
}
.historia-text::before {
  content: ''; display: block;
  width: 44px; height: 1px; background: var(--rose-deep); margin-bottom: 20px;
}

/* ============================================================
   PRODUTOS
   ============================================================ */
.produtos {
  background: var(--paper);
  padding: clamp(72px, 9vh, 110px) clamp(24px, 5vw, 72px);
}
.sec-header { margin-bottom: 52px; }
.sec-sub { font-family: 'Cormorant', serif; font-style: italic; font-size: 18px; color: var(--text); margin-top: 8px; }

/* Produtos carrossel */
.cards-carousel { position: relative; overflow: hidden; }
.cards-track {
  display: flex; gap: 20px;
  transition: transform 0.55s var(--ease-out-expo);
  will-change: transform;
}
.card {
  flex: 0 0 calc(33.333% - 14px);
  min-width: 0;
}

.card {
  background: var(--cream-soft);
  border: 1px solid var(--line);
  overflow: hidden;
  cursor: pointer;
}
.card-img-wrap {
  aspect-ratio: 1 / 1; overflow: hidden;
  background: repeating-linear-gradient(135deg, var(--cream) 0 12px, var(--cream-soft) 12px 24px);
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.card-img-wrap img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  transition: transform 0.7s var(--ease-out-expo);
}
.card:hover .card-img-wrap img { transform: scale(1.06); }
.card-img-lbl {
  font-size: 9px; letter-spacing: .18em; text-transform: uppercase;
  color: rgba(58,24,32,.3); background: var(--paper); padding: 4px 9px; border: 1px solid var(--line);
}
.card-badge {
  position: absolute; top: 12px; left: 12px;
  background: var(--pistache); color: var(--pistache-deep);
  padding: 3px 10px; border-radius: 100px;
  font-size: 8px; letter-spacing: .18em; text-transform: uppercase; font-weight: 600;
  transition: background 0.3s;
}
.card:hover .card-badge { background: var(--pistache-deep); color: var(--pistache); }

.card-body {
  padding: 20px 20px 22px;
  transition: background 0.4s;
}
.card:hover .card-body { background: var(--paper); }
.card-cat { font-size: 9px; letter-spacing: .22em; text-transform: uppercase; color: var(--rose-deep); margin-bottom: 5px; }
.card-name {
  font-family: 'Fraunces', serif; font-weight: 500; font-size: 22px;
  color: var(--bordo); line-height: 1.1; margin-bottom: 10px;
  transition: color 0.3s;
}
.card:hover .card-name { color: var(--rose-deep); }
.card-name em { font-style: italic; color: var(--rose-deep); font-weight: 400; }
.card-desc { font-family: 'Cormorant', serif; font-style: italic; font-size: 14px; line-height: 1.5; color: var(--text); margin-bottom: 16px; }
.card-foot { display: flex; justify-content: flex-end; align-items: center; padding-top: 14px; border-top: 1px solid var(--line); }
.card-price { font-family: 'Fraunces', serif; font-size: 18px; color: var(--bordo); }
.card-price small { font-family: 'Manrope'; font-size: 9px; opacity: .45; display: block; }
.card-order {
  font-size: 9px; letter-spacing: .22em; text-transform: uppercase; color: var(--rose); font-weight: 600;
  display: inline-flex; align-items: center; gap: 4px;
  padding: 7px 14px; border: 1px solid var(--rose);
  position: relative; overflow: hidden; transition: color 0.3s;
}
.card-order::before {
  content: ''; position: absolute; inset: 0; background: var(--rose);
  transform: scaleX(0); transform-origin: left; transition: transform 0.35s var(--ease-out-expo);
}
.card-order:hover::before { transform: scaleX(1); }
.card-order span { position: relative; z-index: 1; }
.card-order:hover { color: #fff; }

.prod-nav {
  display: flex; align-items: center; justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
.prod-dots { display: flex; gap: 10px; align-items: center; }
.prod-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--line);
  border: none; padding: 0; cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.prod-dot.active { background: var(--rose); transform: scale(1.4); }
.prod-arrow {
  width: 38px; height: 38px; border: 1px solid var(--line); background: transparent;
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
  color: var(--bordo);
}
.prod-arrow:hover { background: var(--rose); border-color: var(--rose); color: #fff; }
.prod-arrow svg { width: 14px; height: 14px; pointer-events: none; }

.produtos-cta { text-align: center; margin-top: 48px; }

/* ============================================================
   DEPOIMENTOS — SLIDER
   ============================================================ */
.depos {
  background: var(--pistache-deep);
  padding: clamp(72px, 9vh, 110px) 0;
  position: relative; overflow: hidden;
}
.depos::before {
  content: ''; position: absolute; inset: 22px;
  border: 1px solid rgba(212,245,212,.07); pointer-events: none; z-index: 0;
}
.depos-header {
  padding: 0 clamp(24px, 5vw, 72px);
  margin-bottom: 52px; position: relative; z-index: 1;
}
.depos .sec-eyebrow { color: var(--pistache); }
.depos .sec-title { color: var(--cream); }
.depos .sec-title em { color: var(--pistache); }

/* SLIDER */
.slider-wrap {
  position: relative; overflow: hidden;
  padding: 0 clamp(24px, 5vw, 72px);
}
.slider-track {
  display: flex; gap: 20px;
  transition: transform 0.6s var(--ease-out-expo);
  will-change: transform;
}
.depo-slide {
  flex: 0 0 calc(33.333% - 14px);
  border: 1px solid rgba(212,245,212,.14);
  padding: 28px;
  display: flex; flex-direction: column; gap: 14px;
  transition: border-color 0.3s, background 0.3s;
}
.depo-slide:hover {
  border-color: rgba(212,245,212,.35);
  background: rgba(255,255,255,.04);
}
.depo-mark {
  font-family: 'Fraunces', serif; font-style: italic;
  font-size: 52px; color: var(--pistache); line-height: .7;
}
.depo-text {
  font-family: 'Fraunces', serif; font-style: italic;
  font-size: 16px; line-height: 1.45; color: var(--cream);
  flex: 1;
}
.depo-attr {
  font-size: 9px; letter-spacing: .24em; text-transform: uppercase;
  color: var(--pistache); opacity: .6; margin-top: 4px;
}
.depo-wait {
  display: inline-flex; align-items: center; gap: 5px;
  background: rgba(212,245,212,.1); color: var(--pistache);
  padding: 3px 9px; border-radius: 100px;
  font-size: 8px; letter-spacing: .14em; text-transform: uppercase;
}

/* Slider controls */
.slider-controls {
  display: flex; align-items: center; justify-content: center;
  gap: 20px;
  padding: 36px clamp(24px, 5vw, 72px) 0;
  position: relative; z-index: 1;
}
.slider-dots { display: flex; gap: 8px; align-items: center; }
.slider-dot {
  width: 24px; height: 3px;
  background: rgba(212,245,212,.25);
  border: none; cursor: pointer; padding: 0;
  transition: background 0.3s, width 0.3s;
}
.slider-dot.active { background: var(--pistache); width: 40px; }
.slider-arrows { display: flex; gap: 10px; }
.slider-arrow {
  width: 44px; height: 44px;
  border: 1px solid rgba(212,245,212,.25);
  background: transparent; color: var(--pistache);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: border-color 0.3s, background 0.3s, color 0.3s;
}
.slider-arrow:hover { border-color: var(--pistache); background: var(--pistache); color: var(--pistache-deep); }
.slider-arrow svg { width: 18px; height: 18px; }

.depos-cta { text-align: center; margin-top: 52px; position: relative; z-index: 1; }

/* ============================================================
   FOOTER
   ============================================================ */
footer {
  background: var(--rose-deep);
  padding: clamp(56px, 7vh, 80px) clamp(24px, 5vw, 72px) 32px;
}
.footer-top {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 48px;
  padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,.12);
}
.footer-wm {
  font-family: 'Fraunces', serif; font-weight: 500; font-size: 42px;
  color: #fff; letter-spacing: .02em;
  display: flex; align-items: center; gap: .26em; line-height: 1;
}
.footer-wm .dot { width: .12em; height: .12em; border-radius: 50%; background: var(--rose-soft); display: inline-block; }
.footer-tw { display: flex; flex-direction: column; align-items: flex-start; gap: 7px; margin-top: 12px; max-width: 200px; }
.footer-rule { width: 100%; height: 1px; background: rgba(255,255,255,.3); }
.footer-tag { font-size: 9px; letter-spacing: .42em; text-transform: uppercase; color: rgba(255,255,255,.55); }
.footer-desc {
  font-family: 'Cormorant', serif; font-style: italic; font-weight: 300;
  font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.55);
  margin-top: 18px; max-width: 280px;
}
.footer-nav { display: flex; flex-direction: column; gap: 14px; padding-top: 6px; }
.footer-nav-lbl { font-size: 9px; letter-spacing: .32em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 4px; }
.footer-nav a { font-size: 13px; color: rgba(255,255,255,.68); letter-spacing: .03em; transition: color 0.2s; }
.footer-nav a:hover { color: #fff; }
.footer-right { display: flex; flex-direction: column; gap: 16px; }
.footer-lbl { font-size: 9px; letter-spacing: .3em; text-transform: uppercase; color: rgba(255,255,255,.4); }
.footer-wa {
  background: rgba(255,255,255,.15); color: #fff;
  border: 1px solid rgba(255,255,255,.3);
  padding: 12px 22px; font-size: 10px; letter-spacing: .24em; text-transform: uppercase; font-weight: 600;
  display: inline-flex; align-items: center; gap: 9px;
  transition: background 0.3s, border-color 0.3s;
}
.footer-wa:hover { background: rgba(255,255,255,.25); border-color: rgba(255,255,255,.5); }
.footer-wa svg, .footer-wa span { position: relative; z-index: 1; }
.footer-wa svg { width: 16px; height: 16px; }
.footer-social { display: flex; gap: 10px; }
.footer-social a {
  width: 40px; height: 40px; border: 1px solid rgba(255,255,255,.2);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.65); transition: border-color 0.3s, background 0.3s, color 0.3s;
}
.footer-social a:hover { border-color: rgba(255,255,255,.6); background: rgba(255,255,255,.12); color: #fff; }
.footer-social svg { width: 16px; height: 16px; }
.footer-bottom {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding-top: 24px; flex-wrap: wrap;
}
.footer-copy { font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.28); }
.footer-made { font-family: 'Cormorant', serif; font-style: italic; font-size: 13px; color: rgba(255,255,255,.22); }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 960px) {
  .nav-links { display: none; }
  .hero { grid-template-columns: 1fr; grid-template-rows: 55vw auto; }
  .hero-photo { min-height: 55vw; }
  .historia { grid-template-columns: 1fr; }
  .historia-panel { flex-direction: row; min-height: auto; padding: 28px 32px; }
  .card { flex: 0 0 calc(50% - 10px); }
  .depo-slide { flex: 0 0 calc(50% - 10px); }
  .footer-top { grid-template-columns: 1fr; }
}
@media (max-width: 580px) {
  .hero { grid-template-rows: 72vw auto; }
  .hero-photo { min-height: 72vw; }
  .hero-copy { padding: 40px 24px 48px; }
  .hero-thumbs { display: none; }
  .card { flex: 0 0 calc(100% - 0px); }
  .depo-slide { flex: 0 0 100%; }
}
</style>
</head>
<body>

${svgDefs}

<!-- NAV -->
<nav class="nav" id="nav">
  <a href="#" class="nav-logo">
    <svg class="nav-cupcake" viewBox="0 0 270.93334 270.93331" aria-label="All Rosa"><use href="#logomark"/></svg>
    <div>
      <div class="nav-brand-name">All <span class="dot"></span> Rosa</div>
      <div class="nav-sub">Confeitaria</div>
    </div>
  </a>
  <div class="nav-links">
    <a href="#historia">Nossa história</a>
    <a href="#produtos">Produtos</a>
    <a href="#depoimentos">Depoimentos</a>
  </div>
  <a href="https://wa.me/5535884422995" class="nav-cta">
    <svg><use href="#i-whatsapp"/></svg>
    <span>Pedir agora</span>
  </a>
</nav>

<!-- HERO -->
<section id="hero" class="hero">

  <div class="hero-photo">
    <img src="img/produto-bolo.jpg" alt="Bolo chiffon All Rosa" id="heroParallaxImg">
    <div class="hero-photo-tag">Torta de Morango</div>
  </div>

  <div class="hero-copy">
    <div class="hero-eyebrow">Confeitaria Fina</div>
    <h1 class="hero-headline">
      Cada detalhe,
      <em>declaração</em>
      de afeto.
    </h1>
    <p class="hero-sub">All Rosa é uma confeitaria fina que transforma ingredientes com cuidado em experiências que ficam na memória. Cada encomenda feita à mão, para você.</p>
    <div class="hero-actions">
      <a href="https://wa.me/5535884422995" class="btn btn-rose">
        <svg><use href="#i-whatsapp"/></svg>
        <span>Fazer meu pedido</span>
      </a>
      <a href="#produtos" class="btn-ghost-text">Ver nossos doces ↓</a>
    </div>
    <span class="badge-green">Artesanal · Feito à mão</span>
  </div>

</section>

<!-- MARQUEE -->
<div class="marquee-strip" aria-hidden="true">
  <div class="marquee-track">
    <span>Artesanal</span><span class="sep">·</span>
    <span>Feito à Mão</span><span class="sep">·</span>
    <span>Confeitaria Fina</span><span class="sep">·</span>
    <span>Encomendas Especiais</span><span class="sep">·</span>
    <span>Doces com Afeto</span><span class="sep">·</span>
    <span>Sabor & Memória</span><span class="sep">·</span>
    <span>Artesanal</span><span class="sep">·</span>
    <span>Feito à Mão</span><span class="sep">·</span>
    <span>Confeitaria Fina</span><span class="sep">·</span>
    <span>Encomendas Especiais</span><span class="sep">·</span>
    <span>Doces com Afeto</span><span class="sep">·</span>
    <span>Sabor & Memória</span><span class="sep">·</span>
  </div>
</div>

<!-- NOSSA HISTÓRIA -->
<section id="historia" class="historia">
  <div class="historia-panel">
    <svg class="historia-logo" viewBox="0 0 270.93334 270.93331" aria-label="All Rosa"><use href="#logomark"/></svg>
    <span class="historia-panel-lbl">All · Rosa</span>
  </div>
  <div class="historia-body">
    <div class="sec-eyebrow reveal" style="color:var(--pistache-deep)">Nossa História</div>
    <h2 class="sec-title reveal reveal-delay-1" style="color:var(--bordo)">Uma história feita de <em style="color:var(--rose-deep)">camadas.</em></h2>
    <p class="historia-text reveal reveal-delay-2">All Rosa nasceu do desejo de criar doces que fossem mais do que sobremesas — que fossem memórias. Com receitas desenvolvidas com cuidado e ingredientes selecionados, cada encomenda carrega o mesmo carinho de quando tudo começou: o de querer fazer bonito, gostoso e especial para quem você ama.</p>
  </div>
</section>

<div class="divider"><div class="divider-dot"></div></div>

<!-- PRODUTOS -->
<section id="produtos" class="produtos">
  <div class="sec-header">
    <div class="sec-eyebrow reveal" style="color:var(--pistache-deep)">Nossos Doces</div>
    <h2 class="sec-title reveal reveal-delay-1" style="margin-top:6px">Cada peça criada <em style="color:var(--rose-deep)">à mão.</em></h2>
    <p class="sec-sub reveal reveal-delay-2">Cada encomenda pensada nos mínimos detalhes.</p>
  </div>

  <div class="cards-carousel reveal">
    <div class="cards-track" id="prodTrack">

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-torta.jpg" alt="Torta de morango" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Tortas Finas</div>
          <div class="card-name">Torta de <em>morango</em></div>
          <p class="card-desc">Massa delicada, recheio cremoso com morangos frescos e cobertura suave.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-bolo.jpg" alt="Bolo chiffon de baunilha" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Bolos</div>
          <div class="card-name">Bolo <em>chiffon</em> de baunilha</div>
          <p class="card-desc">Textura aveludada, leve como nuvem, com creme de baunilha feito em casa.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-doces.jpg" alt="Copinho de cenoura" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Doces Finos</div>
          <div class="card-name">Copinho de <em>cenoura</em></div>
          <p class="card-desc">Bolo de cenoura com ganache artesanal, servido em porção individual.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-chocolate.jpg" alt="Chocolates finos" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Chocolates</div>
          <div class="card-name">Chocolate <em>artesanal</em></div>
          <p class="card-desc">Chocolate belga trabalhado à mão com recheios exclusivos. Para presentear com classe.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-brownie.jpg" alt="Brownie de chocolate" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Doces Finos</div>
          <div class="card-name">Brownie <em>intenso</em></div>
          <p class="card-desc">Casca crocante, interior macio e úmido. Chocolate do bom, sem concessões.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-chiffon2.jpg" alt="Bolo chiffon especial" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Bolos</div>
          <div class="card-name">Bolo de festa <em>especial</em></div>
          <p class="card-desc">Feito sob encomenda para celebrações que merecem o melhor da confeitaria artesanal.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-fudge.jpg" alt="Fudge de chocolate" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Doces Finos</div>
          <div class="card-name">Fudge de <em>chocolate</em></div>
          <p class="card-desc">Textura cremosa e derretente, sabor concentrado. O mimo perfeito para qualquer ocasião.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

      <div class="card">
        <div class="card-img-wrap">
          <img src="img/produto-caseirinhos.jpg" alt="Linha Caseirinhos" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-cat">Linha Caseirinhos</div>
          <div class="card-name">Caseirinhos <em>afetivos</em></div>
          <p class="card-desc">Linha exclusiva de bolos caseiros com aquele sabor de infância. Aconchego em cada fatia.</p>
          <div class="card-foot"><a href="https://wa.me/5535884422995" class="card-order"><span>Pedir →</span></a></div>
        </div>
      </div>

    </div>
  </div>

  <div class="prod-nav">
    <button class="prod-arrow" id="prodPrev" aria-label="Anterior">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <div class="prod-dots" id="prodDots"></div>
    <button class="prod-arrow" id="prodNext" aria-label="Próximo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>

  <div class="produtos-cta reveal">
    <a href="https://wa.me/5535884422995" class="btn btn-rose">
      <svg><use href="#i-whatsapp"/></svg>
      <span>Quero encomendar</span>
    </a>
  </div>
</section>

<div class="divider"><div class="divider-dot"></div></div>

<!-- DEPOIMENTOS -->
<section id="depoimentos" class="depos">
  <div class="depos-header">
    <div class="sec-eyebrow reveal">O que dizem por aí</div>
    <h2 class="sec-title reveal reveal-delay-1" style="margin-top:6px">Cada <em>detalhe</em> conta.</h2>
  </div>

  <div class="slider-wrap">
    <div class="slider-track" id="sliderTrack">
      <div class="depo-slide">
        <div class="depo-mark">❝</div>
        <p class="depo-text">Aguardando depoimento real do cliente — cada experiência é única e merece ser contada com suas próprias palavras.</p>
        <div class="depo-attr">— ⚠️ Nome · Ocasião</div>
        <span class="depo-wait">⚠ Aguardando cliente</span>
      </div>
      <div class="depo-slide">
        <div class="depo-mark">❝</div>
        <p class="depo-text">Aguardando depoimento real do cliente — cada experiência é única e merece ser contada com suas próprias palavras.</p>
        <div class="depo-attr">— ⚠️ Nome · Ocasião</div>
        <span class="depo-wait">⚠ Aguardando cliente</span>
      </div>
      <div class="depo-slide">
        <div class="depo-mark">❝</div>
        <p class="depo-text">Aguardando depoimento real do cliente — cada experiência é única e merece ser contada com suas próprias palavras.</p>
        <div class="depo-attr">— ⚠️ Nome · Ocasião</div>
        <span class="depo-wait">⚠ Aguardando cliente</span>
      </div>
      <div class="depo-slide">
        <div class="depo-mark">❝</div>
        <p class="depo-text">Aguardando depoimento real do cliente — cada experiência é única e merece ser contada com suas próprias palavras.</p>
        <div class="depo-attr">— ⚠️ Nome · Ocasião</div>
        <span class="depo-wait">⚠ Aguardando cliente</span>
      </div>
    </div>
  </div>

  <div class="slider-controls">
    <button class="slider-arrow" id="prevBtn" aria-label="Anterior">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <div class="slider-dots" id="sliderDots"></div>
    <button class="slider-arrow" id="nextBtn" aria-label="Próximo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>

  <div class="depos-cta reveal">
    <a href="https://wa.me/5535884422995" class="btn btn-cream">
      <span>Fazer parte dessas histórias →</span>
    </a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-wm">All <span class="dot"></span> Rosa</div>
      <div class="footer-tw">
        <div class="footer-rule"></div>
        <div class="footer-tag">Confeitaria</div>
      </div>
      <p class="footer-desc">Encomendas pelo WhatsApp. Doces artesanais feitos com cuidado para os seus momentos mais especiais.</p>
    </div>
    <nav class="footer-nav">
      <div class="footer-nav-lbl">Navegação</div>
      <a href="#historia">Nossa História</a>
      <a href="#produtos">Nossos Doces</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="https://wa.me/5535884422995">Fazer Pedido</a>
    </nav>
    <div class="footer-right">
      <div class="footer-lbl">Fale conosco</div>
      <a href="https://wa.me/5535884422995" class="footer-wa">
        <svg><use href="#i-whatsapp"/></svg>
        <span>Fazer pedido — WhatsApp</span>
      </a>
      <div class="footer-social">
        <a href="#" aria-label="Instagram"><svg><use href="#i-instagram"/></svg></a>
        <a href="https://wa.me/5535884422995" aria-label="WhatsApp"><svg><use href="#i-whatsapp"/></svg></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2026 All Rosa. Todos os direitos reservados.</div>
    <div class="footer-made">feito com carinho</div>
  </div>
</footer>

<script>
/* NAV scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, {passive: true});

/* Hero parallax */
const heroImg = document.getElementById('heroParallaxImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      heroImg.style.transform = 'scale(1) translateY(' + (y * 0.22) + 'px)';
    }
  }, { passive: true });
}

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal, .reveal-left');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* Slider */
const track = document.getElementById('sliderTrack');
const dotsWrap = document.getElementById('sliderDots');
const slides = track.querySelectorAll('.depo-slide');
let current = 0;
let perView = window.innerWidth <= 580 ? 1 : window.innerWidth <= 960 ? 2 : 3;
const total = Math.ceil(slides.length / perView);

function buildDots() {
  dotsWrap.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'slider-dot' + (i === current ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  }
}

function goTo(idx) {
  current = (idx + total) % total;
  const slideW = slides[0].offsetWidth + 20;
  track.style.transform = 'translateX(-' + (current * perView * slideW) + 'px)';
  dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

buildDots();

window.addEventListener('resize', () => {
  perView = window.innerWidth <= 580 ? 1 : window.innerWidth <= 960 ? 2 : 3;
  goTo(0);
  buildDots();
});

/* auto-advance */
setInterval(() => goTo(current + 1), 5000);

/* Produtos carrossel */
(function() {
  const track = document.getElementById('prodTrack');
  const dotsEl = document.getElementById('prodDots');
  if (!track) return;
  const cards = track.querySelectorAll('.card');
  let perView = window.innerWidth < 600 ? 1 : window.innerWidth < 980 ? 2 : 3;
  const total = cards.length;
  const pages = Math.ceil(total / perView);
  let cur = 0;

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('button');
      d.className = 'prod-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Página ' + (i + 1));
      d.addEventListener('click', () => goProd(i));
      dotsEl.appendChild(d);
    }
  }

  function goProd(idx) {
    cur = (idx + pages) % pages;
    const cardW = cards[0].offsetWidth + 20;
    track.style.transform = 'translateX(-' + (cur * perView * cardW) + 'px)';
    dotsEl.querySelectorAll('.prod-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  buildDots();
  document.getElementById('prodPrev').addEventListener('click', () => { goProd(cur - 1); resetAuto(); });
  document.getElementById('prodNext').addEventListener('click', () => { goProd(cur + 1); resetAuto(); });

  window.addEventListener('resize', () => {
    const nv = window.innerWidth < 600 ? 1 : window.innerWidth < 980 ? 2 : 3;
    if (nv !== perView) { perView = nv; cur = 0; buildDots(); goProd(0); }
  });

  let autoTimer = setInterval(() => goProd(cur + 1), 4000);
  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => goProd(cur + 1), 4000); }
  const carousel = track.closest('.cards-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
    carousel.addEventListener('mouseleave', () => { autoTimer = setInterval(() => goProd(cur + 1), 4000); });
  }
})();
</script>
</body>
</html>`;

fs.writeFileSync('D:/iCloudDrive/Claude/1-projects/agencia-web/sites/allrosa/index.html', html);
console.log('Built. Size:', (html.length / 1024).toFixed(1) + 'KB');
