# Especificação de Layout - O Guia Simples dos Peptídeos

Este documento é a especificação exata e detalhada para a construção de todas as seções da página. A linguagem visual estabelecida no Hero é de um ambiente moderno, com estética "ciência simplificada" (Dark Mode, Neon Cyan, Neon Purple, Glassmorphism, Partículas).

## Tipografia Global
- **Fontes**: Sora (Heading) + Inter (Body) - Futurista e legível.
- **Cores Principais**:
  - Dark Mode BG: `#05050A`
  - Neon Cyan: `#00F0FF`
  - Neon Purple: `#8A2BE2`
  - Text Main: `#FFFFFF`
  - Text Muted: `rgba(255, 255, 255, 0.65)`
  - Glass BG: `rgba(255, 255, 255, 0.03)`
  - Glass Border: `rgba(255, 255, 255, 0.08)`

---

## Seção 1: Hero

### Arquétipo e Constraints
- **Arquétipo**: Spotlight (Baseado em Foco)
- **Constraints**: Particle System (Mídia), Glassmorphism (Efeitos), Gradient Radial (Cor)
- **Justificativa**: Cria um ambiente imersivo, de "laboratório do futuro", focando a atenção na placa de vidro central.

### Conteúdo
- **Headline**: O Guia Simples dos Peptídeos
- **Subheadline**: Entenda o que são, para que servem e por que todo mundo está falando sobre eles. Sem linguagem difícil, sem termos científicos confusos e sem promessas irreais.
- **CTA**: QUERO ENTENDER OS PEPTÍDEOS

### Layout
- **Container**: Flexbox, `min-height: 100vh`, `align-items: center`, `justify-content: center`.
- **Card Central (Glass)**: `max-width: 900px`, `padding: 80px 60px`, `border-radius: 24px`.
- **Spotlight Background**: Pseudo-elemento fixo no topo com `radial-gradient` de cyan e purple.

### Tipografia
- **Headline**: `font-family: 'Sora'`, `font-size: clamp(2.5rem, 6vw, 4.5rem)`, `letter-spacing: -0.03em`, weight 800. A palavra "Peptídeos" tem texto com gradiente Cyan.
- **Subheadline**: `font-family: 'Inter'`, `font-size: clamp(1.1rem, 2vw, 1.3rem)`, color text-muted, `max-width: 600px`.
- **Badge**: Uppercase, 0.85rem, `letter-spacing: 2px`, peso 700.

### Cores e Efeitos
- **Botão CTA**: Background `#00F0FF`, color `#05050A`, `box-shadow: 0 0 20px rgba(0, 240, 255, 0.4)`.
- **Glass Card**: bg `rgba(255,255,255,0.03)`, `backdrop-filter: blur(20px)`, `border: 1px solid rgba(255,255,255,0.08)`, `box-shadow: 0 30px 60px rgba(0,0,0,0.4)`.

### Animações e Interatividade
- **Partículas**: 5 div elements absolutas com `animation: floatLoop 20s infinite linear`, opacity 0.3 a 0.5.
- **Hover CTA**: `transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 30px rgba(0,240,255,0.6)`. Efeito hover-fill do pseudo-elemento bright slide.

### Responsividade
- Em mobile, card central com padding de `50px 30px`.

---

## Seção 2: O Problema

### Arquétipo e Constraints
- **Arquétipo**: Split Assimétrico (Baseado em Divisão)
- **Constraints**: 3D Element/CSS Abstract (Mídia), Fade Up Progressivo (Movimento)
- **Justificativa**: Divide o intelectual (texto) do lúdico (gráfico da molécula abstracta), mantendo o balanço visual 40/60.

### Conteúdo
- **Título**: Você já ouviu falar em peptídeos, mas nunca entendeu direito o que são?
- **Parágrafo 1**: Sente que todo mundo comenta sobre isso — médicos, profissionais da saúde, influenciadores — e você fica com a sensação de estar “por fora”?
- **Parágrafo 2**: A verdade é que peptídeos não são um assunto novo, mas só agora estão sendo explicados ao público comum. Enquanto muita gente confunde com hormônios, acha perigoso ou ignora, outras pessoas estão se informando e tomando decisões conscientes sobre saúde, estética e bem-estar.
- **Destaque**: A informação básica muda tudo.

### Layout
- **Container**: `max-width: 1200px`, `padding: 120px 5%`.
- **Grid**: `grid-template-columns: 1fr 1.2fr; gap: 80px`. O lado esquerdo tem o visual (molécula), o lado direito tem o texto.

### Tipografia
- **Título**: `font-size: clamp(2rem, 4vw, 3rem)`, Sora 700, margin-bottom 24px.
- **Body**: `font-size: 1.15rem`, Inter 400. Cor text-muted.
- **Destaque**: `font-size: 1.25rem`, Inter 600, color Cyan (`#00F0FF`), com `border-left: 3px solid #8A2BE2`, `padding-left: 20px`.

### Elementos Visuais
- **Molécula (Visual Esquerda)**: Orb central com blur (`filter: blur(80px)`), background Purple (`#8A2BE2`). Nodes de vidro (backdrop-filter) conectados por linhas com gradiente.

### Animações e Interatividade
- **Textos**: Inicialmente `opacity: 0, transform: translateY(30px)`. Ao scroll viewport atingir 15%, dispara `Fade Up 800ms ease-out` com staggered `delay: 150ms`.
- **Molécula**: `animation: floatLoop 15s infinite reverse linear`. O Orb tem `animation: pulseOrb 8s infinite alternate ease-in-out`.

### Responsividade
- Mobile: `grid-template-columns: 1fr`. O texto sobe para a linha 1 e a molecula vai para baixo (grid-row: 2) para melhor contexto.

---

## Seção 3: A Solução

### Arquétipo e Constraints
- **Arquétipo**: Scroll Storytelling (Baseado em Fluxo)
- **Constraints**: Text Reveal on Scroll (Movimento), Overflow Visible (Layout), Gradiente Conico Soft (Cor)
- **Justificativa**: A explicação do núcleo conceitual (o que são) merece uma revelação textual cadenciada à medida que o usuário faz scroll, criando um momento de foco absoluto.

### Conteúdo
- **Título**: Afinal, o que são peptídeos?
- **Conteúdo**: De forma simples: peptídeos são pequenas cadeias de aminoácidos que funcionam como mensageiros no nosso corpo. Eles “avisam” as células sobre o que fazer: produzir mais colágeno, ajudar na recuperação, participar de processos metabólicos e influenciar funções naturais do organismo. Você não precisa entender bioquímica para compreender isso. Este eBook traduz um assunto complexo para uma linguagem 100% humana.

### Layout
- **Espaçamento**: `padding: 150px 0`, em um wrapper de de scroll trigger com `height: 200vh`.
- **Posicionamento**: Box central de sticky content (`position: sticky, top: 20vh`). `text-align: center`. `max-width: 800px`, centrado.

### Cores e Tipografia
- **Título**: Sora 800, `font-size: clamp(2.5rem, 5vw, 4rem)`. Texto Branco absoluto e bottom margin de `40px`.
- **Conteúdo**: Inter 500, `font-size: clamp(1.2rem, 2.5vw, 1.8rem)`, `line-height: 1.6`. A cor inicia apagada com opacidade `0.2` (`rgba(255,255,255,0.2)`) e as palavras iluminam com opacity `1` mediante progresso do scroll.

### Interatividade e Tratamento Específico
- **Scroll Hijacking/Storytelling**: À medida que o body desloca dentro das `200vh`, uma máscara de opacidade viaja ao longo das palavras (efeito de revelação progressiva).
- As palavras-chave como **"mensageiros"** e **"100% humana"** ao serem iluminadas ganham cor `#00F0FF` (Cyan) com neon glow, revelando-se de forma dramática.

### Responsividade
- Altura do wrapper no mobile com `150vh`. Fonte de `1.2rem` com menos leading (`line-height: 1.5`).

---

## Seção 4: O que você vai aprender

### Arquétipo e Constraints
- **Arquétipo**: Bento Box (Baseado em Grid)
- **Constraints**: Glassmorphism (Efeito), Noise Texture (Textura interna dos cards), Hover Lift/Glow (Interação)
- **Justificativa**: O bento box quebra a monotonia das listas de bullets tridicionais, dando um peso de "dashboard tech/premium" que aumenta a percepção de valor.

### Conteúdo
- **Título**: O que você vai descobrir nas páginas deste eBook
- **Itens**:
  1. O que são peptídeos (sem termos técnicos)
  2. Por que eles não são hormônios
  3. Para que eles vêm sendo usados hoje e por que ganham tanta atenção
  4. O que é mito e o que é verdade
  5. Para quem esse assunto faz sentido
  6. O que observar antes de se aprofundar mais

### Layout Exato
- **Container Master**: `padding: 100px 5%`.
- **Grid Container**: `display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 220px; gap: 24px; max-width: 1200px; margin: 0 auto`.
- **Cells**:
  - Item 1 e 2: Ocupam `grid-column: span 2`. (Quadrados rectangulares horizontais grandes de foco na fundação)
  - Item 3: Ocupa `grid-column: span 4` em full bar horizontal, foco central pesado.
  - Item 4, 5, 6: No layout desktop exigirão uma quebra de CSS puro (`grid-column: span 4/3` não suportado mas fazemos subgrid 3 columns). Ou para facilidade, o Master Grid pode ter 6 colunas, item 4/5/6 ocupam `span 2`.

### Estética do Card
- Background `#111116`, border `1px solid rgba(255,255,255,0.05)`, border-radius `24px`.
- Adição de Pattern Abstract Background SVG (opacidade 5%) nos cantos direitos dos cards.
- **Tipografia**: Inter 500, `font-size: 1.125rem`, `#FFFFFF`.

### Animações
- **Initial Load**: Cards com `opacity:0`, `transform: scale(0.95)`, trigger as Viewport atinge 20%, entram com durações staggered em 100ms. Easing elástico subtil.
- **Hover**: Cursor move-se o card soergue 4px (`transform: translateY(-4px)`). A border corna-se Cyan suave (`rgba(0, 240, 255, 0.4)`). Box shadow acentua o brilho e confere elevação em Z axis.

---

## Seção 5: Diferencial e Público

### Arquétipo e Constraints
- **Arquétipo**: Split Horizontal com Sticky Element (Layout Fixado)
- **Constraints**: Mixed Font Weights (Tipografia), Off-Grid Element (Layout), Linha Decorativa Animada (Movimento)
- **Justificativa**: Ter o título fixo num lado (sticky) enquanto o foco de leitura viaja suavemente dá um tom de refinamento editorial em ambiente digital moderno (Editorial Tech).

### Conteúdo
- **Título**: Por que esse eBook é diferente?
- **Conteúdo**: (Dividido em paragráfos para ritmo)
  1. Ele não tenta te impressionar, tenta te esclarecer.
  2. Não é um tratado científico, não é um curso avançado e não traz promessas milagrosas.
  3. É um primeiro passo, um guia introdutório, uma leitura rápida e clara. Feito para pessoas curiosas sobre saúde, e para quem quer parar de "achar" e começar a entender com segurança.

### Layout
- **Padding principal**: `140px 5%`.
- **Display Flex**: `gap: 10vw`. Flex box (esquerda = 40%, direita = 60%).
- **Lado Esquerdo**: Título e position content em sticky (`position: sticky; top: 30vh`).

### Tipografia
- Título: Uso de pesos mistos. "Por que esse eBook é" (Sora, weight 300, color branco opacidade 80%), e "diferente?" (Sora, weight 800, color `#8A2BE2`).
- Corpo (Direita): Inter de grandes proporções (`font-size: 1.35rem; line-height: 1.8`). Margin-bottom a valer entre cada bloco da direita (`50px`), forçando um escrol cadenciado.

### Decorativo e Movimento
- À esquerda dos blocos de texto, temos um Divider Line (`border-left: 1px solid rgba(255,255,255,0.1)`). Quando os blocos estão na view com trigger de centro de ecrã, a opacidade do bloco transita de `.4` para `1`, e um cursor glow traceja a mesma linha iluminando.

---

## Seção 6: Oferta e Preço

### Arquétipo e Constraints
- **Arquétipo**: Framed Content / Isolated Element (Densidade: Minimal Foco Total)
- **Constraints**: Neon Border Glow (Efeitos), Glow Orb Background (Cores), High Contrast Typography
- **Justificativa**: Em CTAs de transação central, a oferta tem de gritar "valor puro e duro, oportunidade" isolada do resto do conteúdo explicativo para não desviar a atenção.

### Conteúdo
- **Título**: Por que custa apenas R$ 27,90?
- **Conteúdo**: Porque esse material foi pensado como produto de entrada. A ideia não é complicar, é abrir a porta. Por menos que o preço de um almoço, você terá clareza, informação confiável e segurança para buscar mais conhecimento. Leitura rápida e conteúdo direto que você pode ler no celular, tablet ou computador.

### Layout
- **Ambiente**: Super espaçoso (`padding: 160px 0`), flexbox com full center alinhement.
- O card da oferta tem 600px max-width centralizado (`margin: 0 auto`), box isolado e sem grid extra.

### Cores, Estética e Preço Absurdo
- Background card não é transparente (glass puro como no Herp), mas escuro pesado (`#08080C`) para contrapor as glow borders intensas (conferindo segurança/privacidade/confiabilidade).
- **Mascara Gradiente Border**: `background: linear-gradient(135deg, #00F0FF, #8A2BE2)` mas confinado apenas a uma linha de espessura de 2px via border e gradient-clip de padding, como uma borda mágica e activa.
- **Preço R$ 27,90**: Sora Black (900), `100px` font size (ou `clamp(3.5rem, 8vw, 6rem)`). E tem um `text-shadow: 0px 4px 60px rgba(0,240,255,0.5)`, e `letter-spacing: -2px`. Ele vibra em Neon.

### Movimento
- Sem scroll effects que causem enjôo antes do click, a caixa aparece sólida (`Fade em 1s base zero delay`) e fica estabilizada para click no CTA secundário (nesta secção devia haver botão idêntico de finalização se o utilizador quiser já).

---

## Seção 7: Final End e CTA Secundário Maxed

### Arquétipo e Constraints
- **Arquétipo**: Hero Dominante Isolado e Dense Text
- **Constraints**: Radial Bottom Glow (Cores), Hover Magnetic Pulse (Interação)
- **Justificativa**: Quando a argumentação fecha, o ecrã deve voltar à solenidade imersiva para garantir o último momento mágico e o derradeiro trigger para acção.

### Conteúdo
- **Título**: O conhecimento muda a forma como você enxerga tudo
- **Conteúdo**: Depois desse eBook, você vai entender de verdade quando alguém falar sobre peptídeos. Vai saber diferenciar informação de achismo e parar de se sentir perdido(a). Ignorar o tema não faz ele desaparecer. Entender faz você ter controle. Garanta agora seu acesso imediato.
- **CTA**: QUERO ENTENDER OS PEPTÍDEOS

### Layout
- Simples e brutal. `max-width: 800px`, texto sempre alinhado ao centro. Altura de padding bottom em 250px para respirar o bottom footer (`padding: 180px 5% 250px 5%`).

### Estilo
- **Typography Final Statement**: Sora 700 (`clamp(2rem, 4vw, 3rem)`). O texto corpo com `font-size: 1.15rem`, sendo o fecho ("Entender faz você ter controle.") a `font-weight: 700` explícito com brilho extra.
- Botão "QUERO ENTENDER OS PEPTÍDEOS" ganha uma aura de "Pulse Animation" via CSS keyframe de border ring (shadow expanding infinite em glow purple e cyan). O botão clama para ser tocado.
- Fundo: Radial Gradient no eixo central inferior, projectando um feixe de luz misto (purple cyan) para cima através da estrutura para finalizar o stage 0.

---
Mágico e cirúrgico. Este documento providencia todo o fundamento para a implementação técnica pixel perfect da AI numa etapa de desenvolvimento.
