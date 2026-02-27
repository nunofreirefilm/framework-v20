# Especificação de Layout - Aria Studio

Este documento contém a especificação exaustiva e detalhada para a construção da página da Aria Studio. A base de design aprovada em `index.html` e `style.css` (tema dark premium, tipografia Clash Display + General Sans, botões magnéticos e canvas background com noise) orientou todas as decisões abaixo. 

Também foi incluída uma seção dedicada ao portfólio via Instagram e conceitos com animações em vídeo, conforme solicitado.

---

## Variáveis Globais Aprovadas
- **Cores**: Background `#030303`, Text `#ffffff`, Muted `#888888`, Border `rgba(255, 255, 255, 0.1)`.
- **Tipografia**: Heading: `Clash Display` (200 a 700), Body: `General Sans` (300 a 600).
- **Vibe**: Premium, Minimalista, Tecnológico, High-end.

---

## Seção 1: Navbar e Hero (Aprovado e Refinado)

### Arquétipo e Constraints
- **Arquétipo**: Type Hero
- **Constraints**: Canvas Background, Text Reveal, Floating Element, Responsive Columns
- **Justificativa**: O uso monumental da tipografia combinado com o canvas background reativo ao mouse cria um impacto imediato que comunica autoridade, enquanto o ícone 3D flutuante entrega a modernidade da Aria.

### Conteúdo
- Logo: `images/logo_1.png` na navbar.
- Headline: Transformamos imagem em posicionamento.
- Subheadline: Vídeo em autoridade, estratégia e resultado para profissionais e marcas que precisam ser vistos e escolhidos.
- CTA: Falar com a ARIA STUDIO
- Ícone Flutuante: `images/icone_1.png`

### Layout
- **Navbar**: `position: fixed; top: 0; width: 100%; padding: 2rem 4vw; display: flex; justify-content: space-between; z-index: 100;`
- **Hero Wrapper**: `min-height: 100vh; display: flex; align-items: center; padding: 8rem 4vw; max-width: 1440px; margin: 0 auto; position: relative;`
- A coluna da esquerda ocupa 60% com os textos e a coluna da direita contém a graphic flutuante.

### Tipografia
- **Headline**: Clash Display, Uppercase, `font-weight: 600`, `letter-spacing: -0.01em`, tamanho `clamp(3rem, 8vw, 8rem)`. A palavra "posicionamento." tem `-webkit-text-stroke: 1px #888888; color: transparent; font-style: italic;`.
- **Subheadline**: General Sans, `font-weight: 400`, cor `#888888`, tamanho `clamp(1.1rem, 1.5vw, 1.3rem)`.
- **Botões**: Uppercase, `letter-spacing: 0.05em`.

### Cores
- Como estabelecido no `style.css`.
- Hover no botão Primary (`.btn-primary`): Background se mantém, mas o ícone faz um translate.

### Elementos Visuais e Animações
- **Background**: Noise overlay + Radial gradient em canvas JS seguindo o mouse (já codificado).
- **Text Reveal**: As linhas do título sobem escondidas atrás de um mask container (`transform: translateY(110%)` para `0`), duração 1.2s com cubic-bezier. Stagger de 0.2s entre linhas.
- **Logo e botão navbar**: Fade Down ao carregar (`duration: 1000ms`).
- **Floating Icon**: `images/icone_1.png` mix-blend-mode: screen, opacity `0.08`, em animação infinita de float (`translateY` de -30px e `rotate` de 2deg em ciclo de 10s).
- **Video Concept (Background sutil - Opcional para o futuro)**: Para adicionar ainda mais dinamismo, pode-se colocar um vídeo em loop (Video Silenciado) muito sutil e escuro (opacity 5%) nos fundos das seções seguintes para manter o hook visual sem conflitar com o hero.

---

## Seção 2: O que fazemos (Serviços)

### Arquétipo e Constraints
- **Arquétipo**: Bento Box
- **Constraints**: Glassmorphism, Hover Lift, Wave Stagger (Scroll)
- **Justificativa**: O bento box organiza grande volume de informação sem parecer pesado. O uso do glassmorphism mescla os cartões no ambiente dark elegante.

### Conteúdo
- **Título**: Estratégias Visuais Completas
- **Subtítulo**: Criamos estratégias visuais para quem precisa ser visto, lembrado e escolhido.
- **Serviço 1 (01)**: Gravação de vídeos profissionais. Para médicos, empresários, empresas e marcas que querem se posicionar com clareza e credibilidade.
- **Serviço 2 (02)**: Posicionamento no Instagram. Conteúdos estratégicos que constroem autoridade, não apenas likes.
- **Serviço 3 (03)**: Gerenciamento de redes sociais. Planejamento, consistência e comunicação alinhada ao seu objetivo de negócio.
- **Serviço 4 (04)**: Tráfego pago. Conteúdos certos, para as pessoas certas, com foco em resultado.
- **Serviço 5 (05)**: Criação de sites. Páginas que comunicam valor, posicionamento e conversão.
- **Rodapé**: Outros formatos: Vídeos institucionais, video clipes, lives e conteúdos especiais para lançamentos e campanhas.

### Layout
- **Wrapper**: `max-width: 1440px; padding: 8rem 4vw; margin: auto;`
- **Grid Principal**: CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap de `1.5rem`.
- Os itens variam de tamanho. O Serviço 3 ocupa `grid-column: span 2`. O Serviço 5 é um destaque de `grid-column: span 3`.

### Tipografia e Cores
- **Item Number**: Clash Display, `#888888`, border inferior fina.
- **Títulos**: Clash Display, `clamp(1.25rem, 1.5vw, 1.75rem)`, `#ffffff`.
- **Paragrafos**: General Sans, `0.95rem`, `#888888`.
- **Card bg**: `rgba(255, 255, 255, 0.02)` com border `rgba(255, 255, 255, 0.05)`. Hover mode: `rgba(255, 255, 255, 0.05)`, border `0.15`.

### Efeitos de Interação
- Ao acionar hover no cartão, `transform: translateY(-5px)` + leve iluminação interna nos fundos (`box-shadow` inset super difusa).
- Elementos entram na tela via AOS `fade-up` com stagger de `100ms` a `200ms`.

---

## Seção 3: Nosso Diferencial (A Experiência Viva)

### Arquétipo e Constraints
- **Arquétipo**: Scroll Cinematico / Split Animado
- **Constraints**: Video Loop Autoplay, Sticky Element, Scroll Progress text reveal
- **Justificativa**: Por ser uma produtora de vídeo sofisticada (Aria Studio), um vídeo realístico em loop ao fundo junto com um sticky text reforça a qualidade e a visão tangível da cinematografia (direção e intenção).

### Conteúdo
- **Título**: Por que escolher a Aria Studio?
- **Intro**: Não é só sobre gravar vídeos. É sobre como você é percebido, como se posiciona e como converte no digital. Em cada entrega, aplicamos:
- **01. Vídeo com estratégia**: Não gravamos por gravar. Cada vídeo nasce com um objetivo claro de autoridade, posicionamento ou conversão.
- **02. Entendimento de imagem e narrativa**: Transformamos conhecimento, serviço ou marca em uma mensagem clara, moderna e atrativa.
- **03. Especialistas em posicionamento**: Foco em médicos, empresários e empresas que precisam comunicar confiança e profissionalismo.
- **04. Estética, direção e intenção**: Imagem bonita chama atenção. Imagem estratégica gera resultado.

### Layout
- Layout Split 50/50. 
- **Lado Esquerdo (Sticky Container)**: Ocupa toda a altura da viewport (`height: 100vh`, `position: sticky; top: 0;`). Possui o Título ("Por que escolher a Aria Studio?") e um vídeo animado/loop conceitual da produção (se não houver um vídeo provido, será usado um overlay escuro granulado para simular filme).
- **Lado Direito (Scroll Container)**: Rola livremente sobre o lado esquerdo de forma parallax. As explicações e a intro aparecem aqui.

### Interação e Visual
- **Vídeo de Fundo**: Colocado de fato no lado esquerdo com `object-fit: cover` e overlay gradient linear `rgba(3,3,3,1) to rgba(3,3,3,0)` lateral para mesclar com o texto a direita. 
- **Tipografia Scroll**: Os tópicos 01 a 04 ficam com 20% de opacidade e recebem highlight (`opacity: 1`) apenas ao cruzarem o target do centro da tela (`IntersectionObserver`).
- Transição de tópicos suavizada com `cubic-bezier(0.16, 1, 0.3, 1)` em `800ms`.

---

## Seção 4: Portfólio no Instagram (Concept Novo Integrado)

### Arquétipo e Constraints
- **Arquétipo**: Scroll Horizontal / Drag Interface
- **Constraints**: Cursor Customizado (Drag), Zoom Focus Hover, Infinite Load simulado, Overlapping Layers
- **Justificativa**: Apresentar os trabalhos reais provindos do Instagram usando um UI moderno, livre de iframes engessados do Meta, criando um carrossel visual super refinado.

### Conteúdo
- **Big Headline Decorativa**: "ÚLTIMOS PORTFÓLIO" vazado transversal.
- Card 1, 2, 3, 4, 5 simulando os últimos feeds estáticos fotográficos do Instagram.
- **Super CTA Integrado**: Siga @aria7studio. 
  - Link Instagram Pessoal: [Aria Studio Reels/Posts](https://www.instagram.com/aria7studio?igsh=MWsyaHF0eWtxbm0zbQ%3D%3D&utm_source=qr)

### Layout
- **Secção Full Bleed**: Ocupa 100vw, fugindo do max-width clássico para expansão da arte.
- **Container Marquee**: Carousel de cartões em formato retrato (proporcional reels 9:16 ou fotos 4:5). 
- Margens laterais negativas para fazer `Bleed Sides`. Altura da secção em torno de `800px` `padding: 10rem 0;`.

### Efeitos de Interação
- Ao fazer hover no contêiner do carrossel, o cursor muda sutilmente (Ex: um bolinha "Drag to explore").
- Ao fazer hover nos cartões das fotos simuladas: 
  - `transform: scale(0.98)` em `clip-path`
  - Filtro em preto e branco sai (`filter: grayscale(100%)` volta para `grayscale(0%)`).
  - Botão magnético "Ver no Instagram" aparece centralizado com backdrop blur no cartão.

---

## Seção 5: Para Quem É

### Arquétipo e Constraints
- **Arquétipo**: Single Focus + Accordion (List Hover)
- **Constraints**: Dark Mode Total (Texturas noise mais fortes), Stagger Reveal, Scale In no Hover
- **Justificativa**: Como a lista de "quem é" é muito direta, criar focos gigantes que mudam de estado ao interagir passa o nível sofisticado da marca.

### Conteúdo
- **Título**: A Aria Studio é para você que entende que imagem é ativo.
- Linhas:
  1. Profissionais que querem se posicionar como referência.
  2. Médicos que desejam autoridade no digital.
  3. Empresários que querem crescer com estratégia.
  4. Empresas que precisam de presença e comunicação forte.

### Layout
- Título gigante no topo (`text-align: center`), tamanho `clamp(2rem, 4vw, 3rem)`.
- Lista em flexbox, coluna centralizada (`max-width: 900px`). Cada item da lista apresenta uma linha border.

### Visual e Animações
- **Estados Padrão**: Letras no item em `#555` com `font-size: clamp(1.5rem, 3vw, 3rem)`.
- **Hover no item**: Letras vão para `#ffffff`, o padding aumenta levemente criando um afastamento (`transform: translateX(10px)` e `letter-spacing: 2px`).
- Inserir um sutil som de "woosh" subjacente ou simplesmente uma transição visual incrivelmente elástica `transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)`.

---

## Seção 6: CTA Final e Contato

### Arquétipo e Constraints
- **Arquétipo**: Dominant Spotlight Hero Final
- **Constraints**: Radial Gradient Animado Traseiro, Typography Giant Reveal
- **Justificativa**: O desfecho deve ser epifânico. Um retorno à vibe do hero principal para fechar a conversa.

### Conteúdo
- **Título**: Não vendemos vídeos. Construímos presença.
- **Texto Secundário**: Seu conteúdo precisa trabalhar por você — mesmo quando você não está online. Vamos criar sua imagem estratégica? Entre em contato e descubra como o vídeo pode elevar seu posicionamento no digital.
- **Call to Action**: Falar com a ARIA STUDIO

### Layout e Formatação
- **Container**: `min-height: 80vh`, `display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;`
- Centralizado absolutamente.

### Cores e Background
- Um Spotlight gradient sutil branco emergindo do rodapé `background: radial-gradient(circle at bottom, rgba(255,255,255,0.05) 0%, transparent 60%);`.
- Título em Clash Display, Text-stroke outline similar ao início.

### Botão Final
- Mesmo padrão de `.btn-primary.magnetic-btn`, porém em tamanho mais avantajado (`padding: 1.5rem 3rem`, `font-size: 1.1rem`).
- Animação pulsante cíclica e sutil via CSS para chamar a atenção de clique:
  `box-shadow: 0 0 40px rgba(255,255,255, 0.1)`.

---

## Considerações Finais de Responsividade (Geral)
- **Mobile (Até 768px)**: 
  - Textos `clamp` cuidam da maioria. Títulos de H2 caem para 2rem.
  - Bento Box vira 1 coluna direta.
  - O Canvas de fundo é travado (freeze animation ou baixa taxa de pixels) p/ salvar bateria do celular ou usar um gradiente CSS fixo.
  - Carrossel no Instagram se torna `overflow-x: auto; flex-wrap: nowrap; snap-type: x mandatory`.
- **Tablet (Até 1024px)**:
  - Bento Box grid vai para 2 colunas.
  - Side-by-side no "Diferencial" cai para single column flow.

---
*Status: Pronto para Desenvolvimento*
