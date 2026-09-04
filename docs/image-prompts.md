# Image Prompts — Sistema Centralizado

## MASTER IMAGE PROMPT (reutilizable)
```
[SUBJECT] in Ana Seva physiotherapy center, Casetas Zaragoza — light wood floor, white walls, teal logo on frosted glass, [LOCATION detail] — editorial lifestyle photography, 35mm lens, f/3.2, natural warm window light + soft overhead, shallow depth of field, real skin texture, neutral sportswear (black/grey/teal/cream), calm human expression, cinematic composition with [COMPOSITION], [MOOD], color palette warm beige + teal #0E8A8A, wooden texture, photorealistic, ultra-detailed, 8k — [NEGATIVE PROMPT]
```

**Negative:** `plastic skin, deformed hands, extra fingers, warped anatomy, cartoon, illustration, oversaturated, blue medical, purple tech, glassmorphism, text in image, logo, watermark, stock smile, catalog pose, futuristic, hospital generic`

**Variables:** `GEMINI_API_KEY` (no exponer en frontend, usar .env.local)

---

## 1. HERO — `hero-volver-a-moverte.jpg` — 16:9, 2400x1350, sujeto tercio derecho
```
A female physiotherapist (30s, dark hair in bun, black zip jacket with Ana Seva teal logo) gently guiding a woman (30s, beige activewear) in a side-lying mobility exercise on a light grey treatment bed, right third of frame, large negative space left for headline, Ana Seva center background with frosted glass logo, light wood floor, morning natural light from window left, shallow DOF, documentary editorial, calm trust — negative
```
Uso: Hero full-bleed, texto izquierda.

## 2. FISIOTERAPIA — `fisioterapia-manos.jpg` — 4:3, 1600x1200, primer plano
```
Close-up of therapist hands performing gentle manual therapy on a lower back, lying prone on white sheet, teal towel roll, soft window light, wood floor bokeh, 50mm macro, real skin pores, serene
```
Uso: Servicios / Fisioterapia.

## 3. PILATES — `pilates-sala.jpg` — 16:9, 2000x1125, gran angular suave
```
Empty Pilates multifunctional room, 6 dark grey mats with teal balls and black rings, TRX black/red hanging from ceiling rail, wall of grey/yellow/blue balls, light wood floor, large mirror left, soft overhead, editorial architecture, calm
```
Uso: Pilates sección (ya tienes foto real, usar como referencia para generar variante limpia).

## 4. ANA — `ana-retrato.jpg` — 4:5, 1200x1500, vertical
```
Ana, Spanish female physiotherapist 35-40, natural smile, black jacket with Ana Seva logo, arms crossed relaxed, white wall with teal logo behind, large window light right, 85mm portrait, shallow DOF, documentary, trustworthy
```
Uso: Conoce a Ana.

## 5. EQUIPO — `equipo-4.jpg` — 3:2, 1800x1200, grupo
```
Four female physiotherapists (20s-40s, diverse, natural, black/orange/beige activewear) standing close, arm around shoulder, genuine smile, white wall with large Ana Seva logo, Christmas lights bokeh subtle, 35mm, warm
```
Uso: Equipo (ya tienes foto real, generar variante sin navidad para evergreen).

## 6. CENTRO — `centro-recepcion.jpg` — 4:3, 1600x1200
```
Reception of Ana Seva: light wood chairs, round table with plant, white glossy counter with teal logo on frosted glass, large windows, morning light, 24mm architecture, clean minimal
```
Uso: Instalaciones.

## 7. TRATAMIENTO — `tratamiento-radiofrecuencia.jpg` — 4:3
```
Therapist using radiofrequency device on woman abdomen postparto, device on metal trolley, soft clinical light, shallow DOF, professional, calm
```
Uso: Tratamientos.

## 8. MOVIMIENTO — `movimiento-pilates-accion.jpg` — 16:9
```
Woman in teal activewear doing pilates balance on large silver ball, one leg extended, teal mat, bright studio, 35mm, dynamic but controlled, editorial
```
Uso: Pilates acción / CTA.

## 9. CONTACTO — `contacto-cercania.jpg` — 4:3
```
Therapist and patient sitting at white desk, both smiling naturally, reviewing notes, window light, plant on table, shallow DOF, human connection
```
Uso: CTA final / Contacto.

---
**Generación:** `GEMINI_API_KEY` en `.env.local` → `npx tsx scripts/generate-images.ts` (crear si API disponible). Si no, usar fotos reales existentes en `public/images` como referencia visual.
