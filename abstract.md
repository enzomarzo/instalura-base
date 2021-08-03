
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