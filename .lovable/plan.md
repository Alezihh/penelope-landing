## Redesign: clean, branco e romântico

Vamos transformar a landing atual (dark, dourado, denso) em uma versão clara, arejada e emocional — mantendo toda a estrutura de copy, seções e CTAs existentes. Só muda a pele visual e a composição.

### Direção visual

- **Paleta Cherry Blossom (clara)**
  - Fundo principal: `#fffafc` (off-white com leve rosado)
  - Superfícies/cards: `#ffffff` com sombras suaves
  - Rosa pétala (primário): `#e88aab`
  - Rosa profundo (acento/CTA hover): `#c45c7c`
  - Rosa claro (badges, divisores): `#fef0f5` / `#f8c8d8`
  - Texto principal: `#2a1a22` (quase preto, com toque quente)
  - Texto secundário: `#7a5a66`
- **Tipografia**
  - Títulos: **Lora** (serif romântica, pesos 500/600/700, com itálico em destaques)
  - Corpo / UI: **Nunito Sans** (300/400/600)
- **Atmosfera**
  - Fundo branco com gradientes radiais bem sutis em rosa pétala nas bordas
  - Pétalas/florais decorativos discretos (SVG) em cantos de seções
  - Divisores finos em rosa, ornamento central tipo "❦" ou linha + ponto
  - Sombras suaves e difusas (nada dourado, nada glow forte)
  - Bordas mais arredondadas (radius 1rem+) e muito whitespace

### Layout (coluna única, narrativa fluida)

Mantém as seções atuais, mas reordenadas em uma única coluna centrada (max-width ~720–880px para texto, imagens podendo respirar até ~1100px):

1. **Nav** minimalista — logo "A Copa da Nossa História" em Lora itálico + CTA rosa
2. **Hero** — headline grande em Lora, subheadline leve, imagem do casal com moldura suave e badge "Edição Limitada Copa 2026"
3. **Promessa emocional** — parágrafo curto centralizado + ornamento
4. **A Jornada do Casal** (Fases da Copa) — timeline vertical em coluna única, cada fase como um card branco com ícone rosa
5. **O Produto** — mockups do álbum em destaque, com legendas em itálico
6. **Comparativo "Presentes comuns × A Copa da Nossa História"** — duas colunas simples dentro do container
7. **Prova social / depoimentos** — cards brancos suaves
8. **Escassez** — contador de vagas restantes com tipografia romântica (não agressivo)
9. **FAQ** — accordion clean
10. **Oferta final** — imagem emocional + CTA grande rosa, garantia
11. **Footer** discreto

### Mudanças técnicas

- **`src/styles.css`**
  - Substituir todo o bloco `:root` por tokens claros (background branco, primary rosa, etc.) em `oklch`
  - Remover/atualizar utilitários `text-gradient-gold`, `glass`, `glass-gold`, `shadow-gold`, `shimmer-text` → trocar por equivalentes rosa/clean (`text-gradient-rose`, `soft-card`, `shadow-soft`, `divider-rose`)
  - Trocar import de fontes para Lora + Nunito Sans
  - Atualizar `--font-display` e `--font-sans`
  - Background `body` com gradientes radiais rosa muito suaves
- **`src/routes/index.tsx`**
  - Refatorar JSX para layout single-column (container central `max-w-3xl` para texto, `max-w-5xl` para seções com imagem)
  - Trocar classes dark (`bg-black`, `text-white`, `glass-gold`, `shimmer-text`…) pelas novas (`bg-background`, `text-foreground`, `soft-card`, `text-gradient-rose`)
  - Reaproveitar as 4 imagens já geradas (hero-couple, album-open, album-product, final-couple) — sem regenerar
  - Adicionar SVGs decorativos inline (pétalas/ornamentos) em pontos-chave
  - Manter toda a copy, contador de escassez, FAQ e CTAs
- **Sem mudanças** em rotas, dados, lógica ou dependências novas

### Fora de escopo
- Não mexer em backend, rotas adicionais, integrações ou copy
- Não regenerar as imagens existentes (elas funcionam bem em fundo claro com moldura)
