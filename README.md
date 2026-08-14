# Aplicativo de Apoio ao Autismo — Site Oficial

Landing page da startup de tecnologia assistiva "Aplicativo de Apoio ao Autismo" (nome
provisório). Apresenta o ecossistema de apoio à comunicação, rotina, regulação sensorial,
alimentação e acompanhamento familiar/escolar/profissional.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens em `src/index.css` via `@theme`)
- Componentes de UI inspirados em shadcn/ui sobre Radix UI (Tabs, Accordion, Tooltip, Dialog,
  Carousel)
- Framer Motion (scroll-reveal, parallax, marquee)
- React Hook Form + Zod (formulário de interesse)
- Lucide React (ícones)

## Instalação e execução

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173` (ou na porta configurada).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`.

## Estrutura

```
src/
  components/       # Seções e componentes de UI (Header, Hero, FeaturesTabs, FAQ, Footer...)
  components/ui/     # Primitivos (Tabs, Accordion, Button, Input...)
  components/screens/ # Mockups de tela do aplicativo, usados dentro do PhoneMockup
  data/               # Conteúdo estruturado (funcionalidades, FAQ)
  hooks/              # Hooks (useCountUp)
  lib/                # Utilitários e constantes (links de navegação, avisos legais)
```

## Notas de conteúdo

- Não há integrações reais de cadastro/download ainda. O formulário de interesse valida os
  dados no navegador (Zod) e está preparado para receber uma chamada real de backend — ver o
  `TODO` em `src/components/InterestForm.tsx`.
- Dados exibidos em painéis (família, escola, profissionais, alimentação) são exemplos
  ilustrativos, sinalizados visualmente como tal.
- O aplicativo não diagnostica, não trata e não substitui acompanhamento profissional — os
  avisos legais aparecem no rodapé e nas seções relevantes.

## Deploy

Projeto compatível com deploy automático na Vercel (detecta Vite: build `npm run build`,
output `dist`, sem variáveis de ambiente obrigatórias nesta fase). Publique enviando o
repositório via `git push` — o upload manual pela interface web do GitHub tem limite de
arquivos e não lida bem com pastas aninhadas como `src/`.
