# Monster Energy — Landing Page

## Integrantes

- [Marcio Ribeiro Julião](https://github.com/Marcio-Juliao)

## Sobre o produto

O projeto consiste em uma landing page navegável para apresentar e vender a marca Monster Energy como produto fictício para fins acadêmicos. A aplicação é 100% client-side, desenvolvida em React com TypeScript, e apresenta identidade visual própria, hero section, benefícios, produtos, prova social, FAQ e CTAs funcionais.

## Jornada de construção

### Ideia inicial

A ideia surgiu da necessidade de criar uma landing page para um produto com identidade visual forte e reconhecimento de mercado. Monster Energy foi escolhida por ter branding agressivo, cores marcantes (preto e verde neon), e uma variedade de produtos que permite demonstrar diferentes layouts e seções de uma landing page completa.

### Pesquisa e referências

- Site oficial Monster Energy (monsterenergy.com) — para referência de layout, cores e tipografia
- Sites de marcas de bebidas energéticas (Red Bull, Rockstar) — para comparação de estrutura de landing pages
- Dribbble e Behance — para inspiração de efeitos visuais, como glitch text, parallax e partículas
- Documentação do Tailwind CSS v4 — para utilitários de layout e responsividade

### Ferramentas utilizadas

- **React 19** + **TypeScript 5.7** — framework e tipagem
- **Vite 8** — build tool e dev server
- **Tailwind CSS v4** — estilização utilitária
- **OpenCode (MiMo V2.5 Free)** — Modelo da Xiaomi assistente de IA para desenvolvimento e refatoração
- **VS Code** — editor de código
- **Figma** — referência de design (via plugin Figma Make)
- **GitHub** — versionamento e entrega

### Uso de IA

**Modelo utilizado:** Claude (via OpenCode)

- **Estrutura do projeto:** A IA ajudou a organizar a estrutura de pastas (components/, pages/, data/, types.ts) e definir o roteamento client-side com `useState`
- **Componentes:** A IA gerou a maioria dos componentes (Nav, Footer, ProductCard, CaffeineComparison) com base em especificações de layout
- **Efeitos visuais:** A IA implementou efeitos de parallax, partículas canvas, glitch text, scroll reveal e tilt 3D nos cards
- **Análise de performance:** A IA identificou problemas de performance (backdrop-filter, box-shadow animation, canvas sem pausa) e sugeriu correções
- **Correções de design:** Quando o resultado visual não ficou bom (cursor personalizado, glitch feio), a IA fez as correções solicitadas
- **Decisões onde NÃO seguimos a IA:** Mantivemos o produto como Monster Energy (marca real) quando a atividade pedia produto fictício — decidimos tratar como "fictício para fins acadêmicos"

### Evolução da solução

1. **V1 — Versão limpa:** Layout funcional com 8 produtos, hero section, navbar, footer e páginas de shop/story
2. **V2 — Versão modernizada:** Adição de efeitos pesados (partículas, glitch, parallax, cursor personalizado, tilt 3D)
3. **Refinamento:** Remoção do cursor personalizado (estava feio), ajuste do glitch para aberrações cromáticas sutis, troca de imagem do banner Ultra White
4. **Atividade:** Adição das seções obrigatórias — How It Works, Testimonials (prova social) e FAQ
5. **Consolidação:** Fusão da V2 como versão oficial na branch main

### Resultado final

O resultado é uma landing page completa com 3 páginas navegáveis (Home, Shop, Story), 8 produtos Monster Energy, efeitos visuais modernos, e todas as seções exigidas pela atividade (hero, benefícios, como funciona, prova social, FAQ, CTA funcional).

**O que faríamos diferente com mais tempo:**
- Trocar o produto por um fictício 100% original
- Adicionar animações de página mais suaves com React Router
- Implementar um modal de compra fictícia no CTA
- Adicionar modo escuro/claro
- Otimizar imagens com WebP e lazy loading
