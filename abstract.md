
# Modulo 1

## Aula 02
<b>Vale a pena utilizar React para qualquer aplicação?</b><>
Na visão do Mario Souto, sim! Como o react efetua diversas pré configurações (como por exemplo a facilidade de subir um servidorlocal, de configurar o package.json, o git, o deploy na vercel) facilita a criação e manutenção de qualquer aplicação.

## Aula 03
 - <b>Componentes:</b> criando e separando os componentes
 - <b>Logo em SVG:</b> criando arquivo em SVG para nossas fotos

## Aula 04
 - <b>lib lodash:</b> facilitando o trabalho com o JS
 - <b>Styled Components:</b> Utilizando objetos e funções dentro do CSS! Para obter uma props do styled component passamos uma função e podemos pegar todas as props. Por exemplo, dentro da `styled.h1 `\${(props) => console.log(props)}`\` 
 - <b>Theme:</b> o designer colocou no figma diversas cores e formatos de texto que utilizaremos em todo o projeto.
   - Para as cores, criamos uma pasta theme com o index.js contendo as cores primarias, secundárias e terciárias. Inclusive já cadastrando a cor de contraste do texto (branca) para as cores mais escuras
   - Criamos o TypographyVariant para os titulos, subtitulos e paragrafos
   - No GlobalStyle colocamos coisas bem gerais, como html e body (utilizaremos mais para fazer o reset no CSS na próxima aula)

## Aula 05
 - <b>Reset CSS:</b> todos navegadores vem com algumas formatações de css básicas. E eles são diferentes uns dos outros. A ideia do Reset é tirar essa formatação dos navegadores e criarmos as nossas
 - <b>lib normalize:</b> `yarn add styled-normalize` . Essa lib é antiga e muito útil para fazer com que os navegadores funcionem com o css equivalente.
 - criação do footer

## Aula 06
 - <b>Prop Types:</b> `yarn add prop-types` => criando tipos para as props a fim de evitar erros
 - <b>Component Text:</b> 
  - Dentro do nosso layout terão vários textos. O componente Text vai servir para usarmos em todos os textos de nosso site. Para isso precisamos passar dois parametros. Um deles é a tag que vamos utilizar. Então, por exemplo, se formos utiilizar a tag 'a', 'span', ou 'div', é só passar ela como props. E o outro parâmetro seria o ajuste responsivo, caso precise mudar de cor ou formatação. Além disso passamos a prop <b>children</b> que se refere ao texto que vai dentro da tag.

## Aula 07 
 - <b>Responsividade:</b> breakpoints ficaram muito famosos com o bootstrap. Geralmente definido em 6 breakpoints, que vai desde extra-small (xs = menor que 576px) até extra-extra-large (xxl = maior que 1400px). Nesse site especifico vamos apenas dividir em desktop e mobile.
 - <p>Object,keys</p> => transforma as keys do objeto em um array. 

## Aula 08
 - <b>Grid:</b> criação do conceito de Grids. Bem similar ao que o bootstrap utiliza.

## Aula 09
 - <b>Box Component:</b> criando um componente para centralizar o texto da home
 - <b>es-lint:</b> um corretor para deixar nosso código mais padronizado e limpo.
  - <code>yarn add eslint --save-dev</code>
  - <code>yarn eslint --init</code>
  - baixar o eslint plugin no vscode
## Extras

<b>Notação de colchetes</b>

 - Tenho o seguinte objeto `const breakpoints = { xs: 0 , sm: 480, md: 768, lg: 992 }`
 - Em outro lugar do código eu tenho outro objeto `mediaQueries = { xs: 'color: blue', md: 'color: white' }`
 - A key do objeto breakpoints e do objeto mediaQueries tem equivalencias, ou seja, os dois tem as keys 'sm' e 'md'
 - Eu preciso criar um objeto novo com a quantidade de objetos que tem o mediaQueries (ou seja, só dois, o xs e o md) mas eu quero passar os valores que estão no objeto breakpoints (que é o '480' e o '768').
 - Para isso primeiro eu preciso pegar apenas as keys do mediaQueries. Para fazer isso eu faço: `object.keys(mediaQueries)`. O resultado vai ser `[xs, md]`
 - Depois eu crio um função obtendo essas keys conforme o tópico acima e criando um novo objeto com o map. E agora utilizaremos a notação de colchetes para isso!
```javascript
  function breakpointMedia(cssByBreakpoints) { 
      const breakpointsNames = Object.keys(cssByBreakpoints);
      return breakpointsNames.map((breakpointsName) => 
        return `@media (min-width: ${breakpoints[breakpointsName]}px) {
          $(cssByBreakpoints[breakpointsName])
          }`
      )
  }
```
 - Então estamos percorrendo um array. No primeiro item do array, ao passar `${breakpoints[breakpointsName]}` estamos buscando o objeto breakpoints e passando como propriedade desse objeto breakpoint uma propriedade de outro objeto (que ao invocar essa função, invocaremos com breakpointMedia(mediaQueries)). Isso seria impossivel utilizando o breakpointMedia.mediaQueries . Pois a notação de pontos não consegue substituir uma propriedade por uma variável


# Modulo 2

## State e Modal

assim como no Angular utilizamos o *ngIf, no react podemos passar direto a condição pelos { } . Por exemplo `{ variavel && <modal/> }` . O modal só será exibido se a variável for true

O <b>estado</b> é algo comum no desenvolvimento e muito especial no React. O que precisamos alterar na tela (ou seja, quando é necessário renderizar novamente ou 're-renderizar) faz sentido usar o state.

O state serve para qualquer e alterar o estado de alguma coisa. Pensemos num modal. Ele tem o state false até alguém clicar em algum lugar que irá ativar esse modal. Ao clicar, ele muda de estado para true e exibe o modal na tela. Como o react utiliza do conceito de imutabilidade, sempre criaremos uma variável de estado e uma outra que irá setar esse estado.

## Aula 01 
 - Criação do Modal na mão, sem uso de lib (é normal utilizarmos lib quando criamos um modal)
  Na hora de fazermos os modais, além do pop up, criamos também uma camada que ficará em cima de todo o layout. É uma camada simples, sem nada, com um opacity que deixará a tela um pouco mais escura na hora que o pop up abrir.
 - `const [isModalOpen, setModalState] = React.useState(false);` 
  - Essa forma acima é a forma como iremos criar nossa variável sempre que precisarmos alterá-la e renderizar a tela novamente.
  - isModalOpen é a nossa variável
  - setModalState é a função que irá modificar nossa váriavel (o set segue o principio da imutabilidade)
  - o (false) é o valor inicial da nossa variável isModalOpen
 - Pensando antes de fazer 
  - Queremos criar uma pop-up que irá abrir quando eu clicar em um determinado botão 
  - Teremos que fazer 3 coisas principais
    - Criar um <b>componente 'modal'</b> (com todas propriedades css, html e js)
    - Utilizra o <b>onClick</b> event para chamar o modal
    - Utilizar do <b>state</b> com valores <b>booleanos</b>. 
  - HTML: `data- `. Nem id, nem class. Data é um atributo do html que serve como um dado qualquer que queremos passar pro JS. No nosso exemplo, nós utilizamos o `data-modal-safe-area = true`. E no onClick() pegamos o event `onClick(event)` e buscamos algo que considere essa tag que recebeu essa 'data' e todos seus filhos, com o `event.target.closest('[data-modal-safe-area]')` 


## Aula 02 - Lib framer-motion
 - utilizando a lib framer-motion
 - criando uma branch `git checkout -b <nomeDaBranch>` e fazendo pull request dentro do git.

## Aula 03 - Criando um form
 - Separando o form em dois componentes. 
  - O primeiro é o TextField que são as configurações do nosso input
    - Nele teremos o type (text), placeholder, nome, valor e o ´onChange´
    - no OnChange passamos uma função que lida com as mudanças de estado. Isso permite o usuário mudar o campo do input e digitar o que ele quiser. Pra fazer isso temos que criar um estado para os campos de input (no caso seria um objeto com apenas usuário e email) + pegar o atributo de nome do input e passar para essa variável o event.target.value (que é o que usuário está digitando)
  - O segundo é o Form. No `<form >` como de padrão passamos o onSubmit com o envet.preventDefault()..`<form onSubmit={(event) => event.preventDefault()}`

## Aula 04
 - utilização de outra lib de animação (react-lottie (um fork do @crello)) para utilizar no formulário
 - Fetch API + Promisse (assíncrona) e POST. Exemplo de sincronismo (Telefone = sincrono || Whatsapp = assíncrono). 
 - Criando + 2 useState para utilizar na FetchAPI => IsFormSubmitd (true e false) e submissionStatus (um objeto para saber se está parado, carregando, feito ou com erro)

## Aula 05
 - Lint => Incluindo o comando no package.json para facilitar o comando `"lint": "eslint --ignore-path .gitignore ."`. Agora é só digitar yarn lint e vai rodar o lint no projeto todo (desconsiderando o gitignore)
 - CI/CD (Continuous Integration & Continuous Deploy). O CI é


## Aula 06
  - Arquivo main.yml com as configurações do <b>Github Action</b> para fazer nosso <b>CI</b>.
    - caminho => Dentro do Git => aba Actions, workflow e logo no primeiro item, 'criando um workflow próprio' ao invés de usar um pronto para 'deno' ou 'node' por ex.
  - depois eu faço uma sugestão de alteração com um commit de pull request. E ai ele vai dar uma geral no código
  - Dentro das configurações e clicando em branchs eu posso cadastrar uma regra do tipo "Require status checks to pass before merging". E incluir o eslint e o vercel. Assim temos uma especie de teste sendo feita antes de fazer o merge. 
  - Portanto estamos fazendo o <b>CI (continuous integration)</b> com o Github Actions e o <b>cd (continuous deploy)</b> com a Vercel

## Aula 07
  - <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">Conventional commits:</a> uma filosofia de como devem ser feitos os commits. 
  - Existem algumas libs que ajudam a fazer essas convenções.

## Extras

