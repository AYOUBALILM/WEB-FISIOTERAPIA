# Centro de Fisioterapia Ana Seva

Web premium — Av. de Logroño, 38 — Casetas, Zaragoza — 976 97 98 58

Stack: Next 15 · App Router · TypeScript · Tailwind 4 · Framer Motion · Radix · Lucide

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar antes de push
npm run lint
```

## Contenido editable

Toda la info en `lib/content.ts` y `lib/config.ts` (tel, WhatsApp, dirección, horarios, reseñas).

## Deploy

Preparado para Netlify con `netlify.toml` (Next Runtime).
1. Crea repo en GitHub (ver abajo)
2. Conecta en https://app.netlify.com/start → Import from GitHub → `ana-seva`
3. Build: `npm run build` / Publish: `.next` (auto)

## GitHub

```bash
git remote add origin https://github.com/TU_USUARIO/ana-seva.git
git push -u origin main
```

Deploy automático en cada push.
