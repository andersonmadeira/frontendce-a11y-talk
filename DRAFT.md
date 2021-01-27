# Rascunho

## Plano geral

### Fundamentos

- o que é acessibilidade e por quê é importante?

De acordo com o relatório da OMS : https://www.who.int/teams/noncommunicable-diseases/disability-and-rehabilitation/world-report-on-disability

- foco da apresentação: deficientes visuais
- base pra a11y: html semântico
- geralmente acessibilidade já é gratuita
- sempre testar com screen readers
- cuidado com o contraste
- cores no style guide
- evitar animações excessivas
- evitar gráficos complexos
- exemplos de tornar elementos customizados acessíveis
- como JS é necessário para criar UI realmente acessíveis
- melhorias graduais na UI ajudam a criar UI mais acessíveis
- Nem sempre o design tem que ditar a implementação
- atributos aria
  - modificam a accessibility tree
  - adicionar semântica onde não existe
  - modificar semântica existente
  - até expressar padrões ou components de UI que não é possível com HTML puro. Ex. Tree tag
  - adiciona rótulos e descrição. botão somente imagem 
  - não mudam aparência, comportamento, foco, manipulação de eventos de teclado

- Focus: Conteúdo fora da tela (ex. sidebars) ainda capturam foco. Experiência confusa para pessoas que dependem no uso do teclado com TAB. Ainda mais se a sidebar for complexa. Prevenir que elementos escondidos peguem o foco do teclado:

### Prática

- Exemplos

### Ferramentas

Que podem ser usadas pra checar por problemas de acessibilidade:

- Checar problemas de acessibilidade: https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en
- Lighthouse
- Para incluir em pipelines de CI/CD: https://github.com/dequelabs/axe-core
- Chrome DevTools - Accessibility
- VoiceOver

### Foco da talk

- 15% pop mundial: 1 Bi pessoas
- quem constrói UI
- semântica
- atributos ARIA
- usar um screen reader com exemplos ruins
- melhorá-los com uso de atributos ARIA
- falar de foco
- teste manual de acessibilidade
- verificando com Chrome DevTools
- teste automático com Lighthouse
- lições pra nos ajudar a melhorar acessibilidade

## Referências

- https://www.24a11y.com/2019/what-a-year-of-learning-and-teaching-accessibility-taught-me
- https://24ways.org/2019/making-a-better-custom-select-element
- Rob Dodson - a11y casts
  - https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g
- Chrome DevTools Accessibility Reference - https://developers.google.com/web/tools/chrome-devtools/accessibility/reference