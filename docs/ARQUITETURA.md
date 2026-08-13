# Arquitetura — Kazan Consultoria

## Visão geral

Site institucional tipo **vitrine**. Primeiro recorte: **uma única página**. **Next.js** (App Router) + TypeScript. Origem: **GitHub**. Hospedagem: **Vercel**.

**Marca:** Kazan (wordmark no chrome; *Kazan* no headline do Sobre). **Pessoa:** Prof. Kaio Kazan / Kaio Henrique Dias. **Projeto:** Nexo360 (distinto da consultoria).

## Estrutura

```
/
├── app/layout.tsx
├── app/page.tsx
├── app/globals.css
├── app/components/cta-buttons.tsx
├── app/components/video-placeholder.tsx
├── public/images/
├── ref/
│   ├── 1.png … 7.png
│   ├── design.schema.json
│   └── design.json
├── docs/ARQUITETURA.md
├── docs/COPY.md
├── next.config.ts
├── package.json
├── README.md
└── .gitignore
```

## Log de Decisões

| Data       | Decisão                                      | Motivo                                                                 |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| 2026-08-13 | Começar com HTML/CSS/JS estático             | Pedido de estrutura inicial com arquivos base, sem comprometer stack.  |
| 2026-08-13 | Um único `index.html` como ponto de entrada  | Site ainda sem sitemap nem páginas definidas.                          |
| 2026-08-13 | Idioma `pt-BR` e título "Kazan Consultoria"  | Nome do workspace e contexto do projeto.                               |
| 2026-08-13 | Propósito: vitrine institucional             | Sem captação sofisticada, CMS ou área logada no primeiro recorte.      |
| 2026-08-13 | Primeiro recorte: uma página                 | Sitemap e rotas ficam para depois, se fizerem sentido.                 |
| 2026-08-13 | Repositório no GitHub                        | Fonte da verdade do código; base para o deploy.                        |
| 2026-08-13 | Hospedagem na Vercel                         | Deploy contínuo a partir do GitHub; serve estático sem runtime.        |
| 2026-08-13 | Paleta da marca no `css/globals.css`         | Fundo branco, texto preto, roxo e verde como secundárias.              |
| 2026-08-13 | Copy da vitrine em `docs/COPY.md`            | Uma página, seções de landing; hero com a frase de transformação.      |
| 2026-08-13 | Ordem: Hero → oferta → processo → porquê → vídeos Kaio → sobre → Nexo360 → parcerias → CTA | Promessa e oferta antes da biografia; prova e autoridade no meio/fim. |
| 2026-08-13 | Headline do Sobre = Prof. Kaio *Kazan*       | Kazan entra no título da dobra, em Playfair; não substitui o wordmark do chrome. |
| 2026-08-13 | Dois blocos de vídeo, dois projetos          | Um bloco da consultoria (Kaio); outro do Nexo360.                      |
| 2026-08-13 | Wordmark do header = só “Kazan”              | Sem tagline, sem “Consultoria”, sem nome da pessoa no chrome.          |
| 2026-08-13 | Página tem header e footer                   | Landing profissional precisa de quadro; nav por âncoras (uma página).  |
| 2026-08-13 | Header esconde na descida, volta na subida   | Fora do `.fold` (senão o isolate prende o z-index); scrolled = `#fff` sólido. |
| 2026-08-13 | CTA do header = primary                      | Mesmo roxo + ícone do sistema; ghost fica só no hero (“Falar conosco”). |
| 2026-08-13 | Lead do Sobre: representante, não sócio      | Sai “Sócio e”; o cartão publicitário/professor permanece.              |
| 2026-08-13 | Tipografia: DM Sans em todo o projeto        | Uma família só; pesos 400–700 via Google Fonts.                        |
| 2026-08-13 | Primeira dobra no padrão Graphy              | Header 3 eixos, hero centralizado, degradê suave, CTAs pill.           |
| 2026-08-13 | Hero sem foto da peça de marca               | Paleta e formas entram no fundo; retrato fica para o Sobre.            |
| 2026-08-13 | Stack: Next.js 16 (App Router) + TypeScript  | Mesmo fluxo dos outros projetos; Vercel detecta Next nativamente.      |
| 2026-08-13 | `allowedDevOrigins` com `10.0.0.5`           | Next 16 bloqueia HMR/chunks via IP da rede; só vale em `next dev`.     |
| 2026-08-13 | Dobra 2 = faixa de credenciais               | Escaneável; história fica no Sobre.                                    |
| 2026-08-13 | Credenciais fora da vitrine                  | Faixa removida; papéis ficam no Sobre.                                 |
| 2026-08-13 | Dobra processo = duas fases lado a lado      | Fase 1 sem custo; Fase 2 implementação. Âncora `#como-trabalhamos`.    |
| 2026-08-13 | Landing completa até o footer                | Dobras restantes: porquê, vídeos Kaio, Sobre, Nexo360, parcerias, CTA. |
| 2026-08-13 | Sobre condensado na UI                       | Lead + pilares + 4 marcos + missão; os 7 corpos ficam no COPY.         |
| 2026-08-13 | Nexo360 fora da lista de parcerias           | Tem dobra própria; lista = Lab Studio, Unimar, Univem, FAIP.           |
| 2026-08-13 | Tipografia: só DM Sans                       | Playfair saiu do sistema; headline do Hero sem itálico nem degradê.    |
| 2026-08-13 | Oferta: 6 cards sem wash e sem hover          | Grade 3×2 plana; ícone + título + texto, sem palco roxo.                |
| 2026-08-13 | Sem casca cinza nas duas fases               | Palco `#eef0f3` sai; panes e cards assentam no canvas da dobra.         |
| 2026-08-13 | Motion da Reunião 1 em CSS puro              | Call entra em fade; briefing/diagnóstico com texto digitando, sem card. |
| 2026-08-13 | Pasta de referências visuais                 | A página cresceu por peça; falta um norte de composição para a vitrine. |
| 2026-08-13 | Norte visual em `ref/design.json`            | Extraído das 7 refs (WayPilot-style); schema em `ref/design.schema.json`. |
| 2026-08-13 | Playfair em `--font-serif`, sem uso          | Disponível para 1 palavra de acento; ainda não aplicada.               |
| 2026-08-13 | Header, CTA, oferta e FAQ ficam              | Header claro; CTA roxo; 6 cards; FAQ fora deste recorte.               |
| 2026-08-13 | Hero na composição da `ref/1.png`            | Wash + grid, badge, Playfair em execução. Sem decks nem halo.           |
| 2026-08-13 | CTA + footer na composição da `ref/7.png`    | Wash no #contato; footer carvão, topo arredondado, 4 colunas.          |
| 2026-08-13 | Vídeos Kaio fora da vitrine, por enquanto    | Dobra “Desmistificando nossos projetos” sai da página; copy permanece. |
| 2026-08-13 | Badge do hero: fundo roxo animado, sem borda | Anima o fill (conic), não o texto; anel branco saiu.                   |
| 2026-08-13 | Porquê em grade 3+2                          | Fileira de 5 apertava os títulos; 3 em cima, 2 centrados embaixo.       |
| 2026-08-13 | Sombra da foto do Sobre acompanha o sticky   | Wash saiu do `::before` da seção; glow vai no `box-shadow` da própria foto. |
| 2026-08-13 | Nexo360: copy no centro, baralhos nas laterais | Dois 9:16 empilhados à esquerda, dois à direita; vídeo centrado abaixo. |
| 2026-08-13 | Logos originais no hover do carrossel        | Cinza em repouso; cor do arquivo no hover. Fundo preto do asset aparece. |
| 2026-08-13 | Baralho Nexo360 abre no scroll               | Cartas se afastam com `view()`; a de trás aparece mais. Sem JS.         |
| 2026-08-13 | Leque do Nexo360 mais aberto no scroll       | Back sai a 72%/36%; frente sobe a 24%/32%. Mesmo gesto nos dois lados. |
| 2026-08-13 | Fase 1 clara = carrossel de notificações     | Troca vertical compacta; centro maior, cima e baixo quase encostados.   |
| 2026-08-13 | Fase 1 escura = leitura → proposta           | Loop no tempo (não `view()`); a sequência cabe no pane e chega na proposta. |
| 2026-08-13 | Fase 2 card 1 = envio em arco                | Cliente → materiais no arco → Kaio; foto do Sobre no avatar.           |
| 2026-08-13 | Fase 2 card 2 = materiais viram estrutura    | Os 3 pacotes saem do inbox e encaixam num layout (topo + duas colunas). |
| 2026-08-13 | Fase 2 card 3 = diagnóstico + estratégias    | Varredura no layout; selos Posicionamento / Oferta / Canal sobre os pacotes. |
| 2026-08-13 | Fase 2 card 4 = loop monitorar → ajustar     | Órbita contínua; o material do meio sofre o nudge do ajuste.           |
| 2026-08-13 | Entrada dispara uma vez, não no scrub        | IntersectionObserver; a dobra toca 0.75s e fica. Hero e footer parados. |
| 2026-08-13 | Baralhos do Nexo360 ocultos no mobile         | Até 720px a dobra fica copy + vídeo; leque só a partir do tablet.      |
| 2026-08-13 | Header mobile = hambúrguer                   | Nav e Agendar entram no drawer; Escape fecha; marca fica no bar.      |

## Ferramentas

| Camada        | Escolha                        | Nota                                                                 |
| ------------- | ------------------------------ | -------------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router)        | `app/page.tsx` é a landing.                                          |
| Linguagem     | TypeScript                     | Alinhado aos outros projetos.                                        |
| Fonte         | `next/font` (DM Sans + Playfair) | DM Sans em uso; Playfair em `--font-serif`, sem seletor. |
| Local         | `npm run dev`                  | `next dev` (Turbopack).                                              |
| Origem        | GitHub                         | Push na branch de produção dispara o deploy.                         |
| Hospedagem    | Vercel                         | Preset Next.js; build `next build`.                                  |
| Conteúdo      | Arquivos no repositório        | CMS só se outra pessoa precisar editar sem tocar código.             |

A landing continua sendo uma página. O Next.js entra pelo fluxo (dev, build, Vercel), não porque haja rotas ou área logada neste recorte.

## Identidade visual

Tokens em `app/globals.css`, extraídos da peça de marca (Prof. Kaio Henrique Dias):

| Token            | Hex       | Papel                                      |
| ---------------- | --------- | ------------------------------------------ |
| `--color-bg`     | `#ffffff` | Fundo                                      |
| `--color-text`   | `#0d0d1f` | Texto (preto da peça, não `#000`)          |
| `--color-text-muted` | cinza  | Subheadline e texto de apoio               |
| `--color-purple` | `#4b2395` | Secundária — títulos de apoio, CTA, anéis  |
| `--color-purple-light` / `--color-purple-deep` | derivados | Degradê em “Transforme” e “execução” |
| `--color-green`  | `#b3d431` | Secundária — acentos, ícones, divisórias   |
| `--font-sans`    | DM Sans   | Família em uso                                 |
| `--font-serif`   | Playfair  | Carregada; nenhum texto usa ainda              |
| `--radius-pill`  | `999px`   | Botões da primeira dobra                   |

Repo público/privado, domínio e canal de contato ficam para depois.

## Marca

| Papel     | Nome                 | Onde aparece                                      |
| --------- | -------------------- | ------------------------------------------------- |
| Nome      | Kazan                | Wordmark no chrome; *Kazan* no headline do Sobre   |
| Pessoa    | Prof. Kaio Kazan     | Headline do Sobre; assinatura ainda Kaio Henrique Dias |
| Pessoa    | Kaio Henrique Dias   | Assinatura, footer, COPY completo                  |
| Projeto   | Nexo360              | Seção própria + bloco de vídeos dele              |

A consultoria e o Nexo360 são projetos diferentes. Vídeos da consultoria estão fora da vitrine por enquanto; o Nexo360 tem placeholder de vídeo sem legenda.

## Arquitetura da página

Chrome + nove blocos de conteúdo. Copy em `docs/COPY.md`.

**Chrome**

- Header — wordmark à esquerda, âncoras ao centro, CTA primary à direita. Fixed; scrolled = fundo sólido.
- Footer — bloco carvão, 4 colunas, cantos superiores arredondados

**Primeira dobra**

Composição da `ref/1.png`: canvas com wash lilás/verde + grid de pontos, badge de eyebrow com fill roxo animado (texto estático, sem anel), **execução** em Playfair itálico, dois CTAs (ghost + roxo). Sem cards laterais nem halo. Header permanece o atual. Sem retrato.

O parágrafo “Sou Kaio Henrique Dias…” ficou de fora desta dobra para não competir com a headline; entra no Sobre.

**Segunda dobra (na página)**

O que fazemos: intro centrada com Playfair em *prática*, lead em duas opacidades, grade 3×2 com ícone em tile (sem fundo de card nem hover) + fecho com *gerar resultados*. Âncora `#o-que-fazemos`.

**Terceira dobra (na página)**

Como trabalhamos: intro + duas fases sem casca cinza. Headline (rótulo + Playfair); Fase 1 em dois panes — claro = carrossel de notificações (Briefing, Diagnóstico, Estratégia; centro em destaque), escuro = leitura das qualidades + proposta como produto; Fase 2 com 4 cards — envio em arco, materiais na estrutura, diagnóstico + estratégias sobre o layout, loop monitorar → ajustar. Âncora `#como-trabalhamos`.

A faixa de credenciais saiu da vitrine.

**Quarta — Por que trabalhar conosco**

Intro mista (*conosco*, lead em duas opacidades). Grade no mesmo envelope da oferta: 3+2 (dois de baixo centrados), ícone em tile roxo-soft + título, sem palco nem número. Fecho com *investimento*. Os cinco pontos do COPY permanecem.

**Vídeos Kaio** — fora da página, por enquanto. Copy permanece em `docs/COPY.md`.

**Quinta — Sobre** (`#sobre`)

Duas colunas. Headline: Prof. Kaio *Kazan*. Lead curricular em duas opacidades, três pilares em pill branca com ícone inline, quatro marcos em hairline, citação em palco com *Estratégia* em Playfair. Foto: `public/images/foto-bio-kazan-v1.webp`, cover no palco sticky. Recorte condensado; os 7 corpos ficam no COPY.

**Sexta — Nexo360** (`#nexo360`)

Canvas da dobra 1: wash lilás/verde + grid de pontos, recortado por hairline. Copy centrada; baralho 9:16 com v1–v2 à esquerda e v3–v4 à direita; vídeo embaixo, centrado, sem legenda.

**Sétima — Parcerias**

Ritmo da `ref/2.png`: *parcerias* em Playfair, lead em duas opacidades, carrossel infinito com névoa branca nas bordas (logos no cinza 0.42). Fecho com *impacto*. Sem Nexo360 na lista.

**Oitava — CTA** (`#contato`)

*Comece agora* (agora em Playfair) + corpo do COPY + os mesmos dois botões da hero (ghost + roxo). Wash lilás claro, centro quase branco.

**Footer**

Bloco carvão, cantos superiores arredondados, 4 colunas: Marca, Página, Projetos, Contato. Sem ícones sociais até haver URL.

**Conteúdo (página viva)**

1. Hero
2. O que fazemos
3. Processo
4. Por que trabalhar conosco
5. Sobre
6. Nexo360
7. Parcerias
8. CTA final + footer

Princípio: biografia, oferta e processo aparecem uma vez cada. Vídeos não se misturam entre consultoria e Nexo360. Header e footer não competem com o Hero.

Âncoras: O que fazemos · Como trabalhamos · Sobre · Nexo360. CTA e header apontam `#contato`.

## Perguntas em Aberto

- Qual é a face oficial na vitrine: Prof. Kaio Kazan, Kaio Henrique Dias, ou os dois?
- Arquivos 9:16 do baralho do Nexo360 (v1–v4 no palco; ordem/recorte ok?)
- Vídeos Kaio voltam para a vitrine? Quando, e em qual posição (depois do porquê, depois do Sobre, outra)?
- URL dos vídeos do Nexo360
- Canal de contato (WhatsApp / e-mail) no footer
- Analytics entra neste recorte?
- Os 4 passos da Fase 2 ganham texto de apoio, ou o título sozinho basta?
- Os rótulos das qualidades no pane escuro (Onde está / O que trava) são o vocabulário certo, ou entram nomes de mercado (posicionamento, oferta, canal)?
