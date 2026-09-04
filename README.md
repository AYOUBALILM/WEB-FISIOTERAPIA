# Centro de Fisioterapia Ana Seva

Web premium — Av. de Logroño, 38 — Casetas, Zaragoza — 976 97 98 58

Stack: Next 15 · App Router · TypeScript · Tailwind 4 · Motion · Radix · Lucide

## Estructura

```
app/
  layout.tsx (SEO + LocalBusiness JSON-LD + fonts Geist + Newsreader)
  page.tsx
  sitemap.ts / robots.ts / manifest.ts
components/
  navbar/  hero/  mobile-cta/  ui/
lib/
  content.ts  (única fuente editable)
  config.ts   (contacto, maps)
  utils.ts
public/images/{hero,team,clinic,treatments}
```

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificar antes de push
npm run lint
```

## Contenido editable

Toda la info en `lib/content.ts` — ver `[VERIFICAR CON ANA]` para datos pendientes.
Contacto centralizado en `lib/config.ts`.

Nunca inventar tratamientos, horarios, precios ni reseñas.

## Deploy

Preparado para Netlify con `netlify.toml` (Next Runtime).
Conectar repo GitHub en app.netlify.com → deploy automático en cada push.

## Fases

- [x] FASE 1: arquitectura + design system + navbar + mobile-cta
- [ ] FASE 2: Hero editorial
- [ ] FASE 3: Tratamientos
- [ ] FASE 4: Equipo + reseñas
- [ ] FASE 5: Booking / No sé qué necesito
- [ ] FASE 6: SEO
- [ ] FASE 7: Mobile QA
- [ ] FASE 8: Performance + A11y
- [ ] FASE 9: QA visual
- [ ] FASE 10: Netlify deploy
