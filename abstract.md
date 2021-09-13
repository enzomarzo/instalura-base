
# Modulo 1

## Aula 02
<b>Vale a pena utilizar React para qualquer aplicação?</b>

Na visão do Mario Souto, sim! Como o react efetua diversas pré configurações (como por exemplo a facilidade de subir um servidorlocal, de configurar o package.json, o git, o deploy na vercel) facilita a criação e manutenção de qualquer aplicação.

## Aula 03
<b>Componentes:</b> criando e separando os componentes

<b>Logo em SVG:</b> criando arquivo em SVG para nossas fotos

## Aula 04
<b>lib lodash:</b> facilitando o trabalho com o JS

<b>Styled Components:</b> Utilizando objetos e funções dentro do CSS! Para obter uma props do styled component passamos uma função e podemos pegar todas as props. Por exemplo, dentro da `styled.h1 `\${(props) => console.log(props)}`\` 

<b>Theme:</b> o designer colocou no figma diversas cores e formatos de texto que utilizaremos em todo o projeto.
  - Para as cores, criamos uma pasta theme com o index.js contendo as cores primarias, secundárias e terciárias. Inclusive já cadastrando a cor de contraste do texto (branca) para as cores mais escuras
  - Criamos o TypographyVariant para os titulos, subtitulos e paragrafos
  - No GlobalStyle colocamos coisas bem gerais, como html e body (utilizaremos mais para fazer o reset no CSS na próxima aula)

## Aula 05

<b>Reset CSS:</b> todos navegadores vem com algumas formatações de css básicas. E eles são diferentes uns dos outros. A ideia do Reset é tirar essa formatação dos navegadores e criarmos as nossas

<b>lib normalize:</b> `yarn add styled-normalize` . Essa lib é antiga e muito útil para fazer com que os navegadores funcionem com o css equivalente.

<b>criação do footer</b>

## Aula 06

<b>Prop Types:</b> `yarn add prop-types` => criando tipos para as props a fim de evitar erros

<b>Text Component:</b> Dentro do nosso layout terão vários textos. O componente Text vai servir para usarmos em todos os textos de nosso site. Para isso precisamos passar dois parametros. Um deles é a tag que vamos utilizar. Então, por exemplo, se formos utiilizar a tag 'a', 'span', ou 'div', é só passar ela como props. E o outro parâmetro seria o ajuste responsivo, caso precise mudar de cor ou formatação. Além disso passamos a prop <b>children</b> que se refere ao texto que vai dentro da tag.

## Aula 07 

<b>Responsividade:</b> breakpoints ficaram muito famosos com o bootstrap. Geralmente definido em 6 breakpoints, que vai desde extra-small (xs = menor que 576px) até extra-extra-large (xxl = maior que 1400px). Nesse site especifico vamos apenas dividir em desktop e mobile.

<b>Object, keys</b> => transforma as keys do objeto em um array. 

## Aula 08
<b>Grid:</b> criação do conceito de Grids. Bem similar ao que o bootstrap utiliza.

## Aula 09
<b>Box Component:</b> criando um componente para centralizar o texto da home
<b>es-lint:</b> um corretor para deixar nosso código mais padronizado e limpo.
- <code>yarn add eslint --save-dev</code>
- <code>yarn eslint --init</code>
- baixar o eslint plugin no vscode

## Extras modulo 1

<b>Notação de colchetes</b>


Tenho o seguinte objeto `const breakpoints = { xs: 0 , sm: 480, md: 768, lg: 992 }`

Em outro lugar do código eu tenho outro objeto `mediaQueries = { xs: 'color: blue', md: 'color: white' }`

A key do objeto breakpoints e do objeto mediaQueries tem equivalencias, ou seja, os dois tem as keys 'sm' e 'md'

Eu preciso criar um objeto novo com a quantidade de objetos que tem o mediaQueries (ou seja, só dois, o xs e o md) mas eu quero passar os valores que estão no objeto breakpoints (que é o '480' e o '768').

Para isso primeiro eu preciso pegar apenas as keys do mediaQueries. Para fazer isso eu faço: `object.keys(mediaQueries)`. O resultado vai ser `[xs, md]`

Depois eu crio um função obtendo essas keys conforme o tópico acima e criando um novo objeto com o map. E agora utilizaremos a notação de colchetes para isso!
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

Então estamos percorrendo um array. No primeiro item do array, ao passar `${breakpoints[breakpointsName]}` estamos buscando o objeto breakpoints e passando como propriedade desse objeto breakpoint uma propriedade de outro objeto (que ao invocar essa função, invocaremos com breakpointMedia(mediaQueries)). Isso seria impossivel utilizando o breakpointMedia.mediaQueries . Pois a notação de pontos não consegue substituir uma propriedade por uma variável


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
  - <b>SVG</b> => É um vetor que podemos criar em programas como o ilustrator ou no próprio Figma. Ele é uma linguagem XML padronizada e recomendada pela W3C. Ele é mais flexível e escalável que imagens com formatos png ou jpg, pois uma imagem em SVG nós conseguimos alterar coisas como o width, o heigth, o preenchimento interno e o contorno da imagem.
  - <b>lazy loading e animação</b> As versões mais modernas dos navegadores (creio que do final de 2019 para cá) já aceitando o atributo `loading="lazy"` da tag `img` do HTML.
    - Uma forma de fazer isso na mão é utilizando duas funcões do JS. Uma é a `getBoundingClientRect()` que é um método do `Element`. Esse método serve para entender o tamanho de um elemento e a sua posição dentro do campo de visualização do usuário no browser (que é o viewport). Se fizermos a comparação do getBoundingClientRect() com o atributo window.innerHeight -  que serva para identificar o tamanho da nossa tela de visualização, ou seja, `imagemSelecionada.getBoudingClientRect() < window.innerHeight`, sabemos se essa imagem está sendo visualizada pelo cliente ou não.

  
# Modulo 3

## Aula 01 - Link / Rotas

Criando as páginas de FAQ e Sobre

<b>Rotas</b> => utilizando o `Link` no Next => component `NextLink` da biblioteca link do Next

## Aula 02 - GetStaticProps

API com NextJS: via .fetch e via GetStaticProps

Podemos fazer via <b>Fecth</b>, no jeito padrão => Criamos uma variável via useState do React e depois utilizamos o UseEffect e passamos o retorno que estamos recebendo da API para essa variável do useState. 

O <b>useEffect</b> abstrai a ideia do ciclo de vida do component. Antes do useEffect o React utilizava coisas especificas de cada ciclo de vida (que ainda é possível utilizar também, quando trabalhamos com classes), como 'didMount' 'didUpdate' e 'willUnmount', assim como no Angular utilizamos o OnInit, OnChange, AfterInit, onDestroy e etc.

É por isso que quando consumimos uma API, via fetch, geralmente utilizamos o useState e o useEffect. o UseState serve para armazenar e alterar o estado de alguma variável. E o useEffect serve para que possamos fazer algo (no caso com essa variável) depois do DOM ter renderizado.

Fecth + UseState + UseEffect é uma forma padrão de buscar API pelo React. Mas com o Next podemos utilizar o <b>GetStaticProps</b>. A diferença é que no fetch normal nós renderizamos a páginas e depois buscamos a informação e no GetStaticProps antes de renderizar a página o next se encarrega de já mostrar essa info de servidor. Isso é feito no build e não no load da página.

```javascript
// Modo REACT - exemplo de fetch 
// consumo de API (com useState e useEffect)
export default function FAQPage(props) {
  const [faqCategories, setFaqCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
      const response = await res.json();
      return response.data;
    })
      .then((faqCategoriesFromServer) => {
        setFaqCategories(faqCategoriesFromServer);
      });
  });
}

// Modo NEXT.JS - exemplo de fetch
// consumo de API com getStaticProps
export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });
```

## Aula 03 - SEO
semantica do HTML é importante para SEO

Colocando as metatags dinamicas no HEAD e criando o Robots.

## Aula 04 - Context/Redux

O redux é uma biblioteca que faz com que consigamos utilizar o gerenciamento de estado por toda a aplicação. Ao invés de passar uma props pra 10 componentes diferentes e algumas vezes ainda de forma aninhada, podemos centralizar tudo isso em um lugar só.

O context API é um modo moderno de utilizar o gerenciamento de estado, que é mais facil de ser utilizado que o redux.

No projeto utilizamos o conceito de <b>High Order Function</b>. De forma meio grosseira, o Javascript chama de callback o High Order Function (HOF). Pelo que eu entendo callback é a função que está ali só aguardando ser chamada em outra função. E high order function é a função que chama o callback.

## Aula 06 - Server side ou estático ?

Duas coisas importantes quando pensamos em tornar o site mais estático ou mais dinâmico é <b>perfomance</b> e <b>custo</b>. Imagina que a cada atualização do usuário precisamos fazer uma requisição no servidor. E agora imaginamos que nossa aplicação tem 10 mil usuários por dia atualizando e mexendo em várias coisas. Quando a aplicação ganha mais escala temos que tomar cuidado em não fazer requisições loucamente e em não gerar builds imensos.

Em aplicações maiores conseguimos utilizar alguns recursos interessantes do Next. Um deles é o do próprio `getStaticPaths()` que vimos anteriormente e que trabalha junto com o getStaticProps() para gerar páginas dinamicamente. Um dos atributos que podemos mudar é o `fallback: true`. fazendo isso o Next deixa de gerenciar os caminhos não encontrados (not found / 404) e nós temos que colocar essa regra. Outro parametro, mas dessa vez direto no `getStaticProps()` é o `revalidate: (Number)`, que podemos passar no number quantos milissegundos queremos que atualizar essa informação com o servidor. 

## Aula 07 - Next Config

<b>site.com.br/</b> Essa barra deve ser obrigatória ou não? Se não deixarmos obrigatória o analytics, por exemplo, vai entender que o site.com.br é um acesso e o site.com.br/ é outro acesso. E isso pra equipe de marketing acaba dificultando um pouco a análise. Por isso é interessante padronzar isso.

Para fazer isso, criamos o arquivo next.config.js e passamos o parâmetro `trailingSlash: true`

## Extras

como trabalhar com open source com
 - entrar no código do git e fazer um fork no projeto
 - efetuar o git clone locamente
  
`git commit --amend` (mudar a descrição do ultimo commit)

### Async / Await e Promises 

Promise está relacionado com processamento assincrone. Interessante que na definição do Mozzila eles colocam que essa promessa pode estar disponível <b>´agora, no futuro ou nunca´</b>

```Javascript
//função que vai receber um ID
function getUserByID(userID) { 
  const userData = fetch('https://api.meusite.com.br/user/$userID)   // buscando nossa API
    .then(response => response.json())
    .then(data => data.name))   
}
```
Then é um método da Promise. Quando efetuamos o `fetch` estamos fazendo uma requisição em alguma API. A resposta dessa requisição é uma `promise`. O método then recebe uma função callback (que geralmente criamos a função com `response => response.json()`) que retorna uma outra promise. No caso estamos transformando a promisse em arquivo JSON para depois recebe-lá como um objeto.

O <b>async/await</b> chegou no JS no ES2017. A idéia foi simplificar as requisições assíncronas. A ideia foi abstrair as promisess para tornar a leitura do código mais fácil. A palavra-chave `await` recebe uma Promise e transforma essa Promise em um valor de retorno ou lança uma exceção se der erro.

```javascript
async function getUserByID(userID) { 
  const response = await fetch('https://api.meusite.com.br/user/$userID);
  const userData = await response.json()
  return userData.name; // no return não utilizamos o await.
}
```

### UseEffect

Vamos supor que precisamos fazermos uma requisição de uma API via fetch e temos alguns botões que ao clicar atualiza essa chamada co outra requisição. Se fizermos isso pelo react com o useState, ao clicar no botão o react vai se perder. Isso porque ele vai renderizar a página novamente e vai refazer a classe, então ela vai chamar o primeiro fetch de novo e depois o segundo fetch que renderiza de novo pro primeiro fetch e assim gerando um loop infinito. 

Para evitar isso, o react criou o hook do <b>useEffect<b>. Passaremos o fetch dentro desse useEffect. E passamos um outro parametro que é um array no qual dentro dele terá(ão) a(s) variável(is) que queremos avisar pro react para ficar de olho. Quando essa variável mudar, ai sim o react re-renderiza a página. Se passarmos um array vazio o react vai só renderizar uma única vez. 

### Enviando e-mail com MailChimp

A mistura de Next e Vercel torna o cadastro de newsletter bem fácil. Eu realizei um teste com a API da MailChimp. Fiz isso com ajuda <a target="_blank" href="https://leerob.io/blog/mailchimp-next-js">desse blog</a>. De forma simples foi possivel captar o email e enviar para o mailchimp.


### Spread Operator

Ele serve para transformar um array ou objeto em itens soltos. Como uma string também é iterável, também é possível usar spread operator com strings. Uma grande utilidade do spread é para não só criar, copiar um novo array ou objeto. Se a gente simplesmente fizer `newArray = oldArray` e fizer um push no newArray, vai alterar também o oldArray, porque os dois apontam pro mesmo lugar. Mas utilizando o spread operator `new Array = [...oldArray]` estamos apontando para um lugar diferente. Isso faz muito sentido pensando em imutabilidade.

```javascript
let array = [10 , 30 , 50 , 100, 20, 9, 25]

console.log(Math.max(array))    // NaN (considera o array como um unico item)
console.log(Math.max(...array)) // 100 (considera cada item)
```

```javascript
let array1 = ['Enzo', 'Cioffi']
let array2 = ['meu', 'nome']

console.log(...array1, 'de Marzo', 'é o', ...array2);
//Enzo Cioffi de Marzo é o meu nome
//sem o spread, ficariam vários arrays.
```

# Modulo 04 - Testes

## Aula 01 - Cypress

Cypress é uma biblioteca de testes. 

Get starting:

1 Baixar =>`yarn add cypress eslint-plugin-cypress --dev`
2 Incluindo o cypress no eslintrc.js
```javascript
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
```
3 Colocar o caminho do site no cypress.json
{
  "baseUrl": "http://localhost:3000",
  "video": false
}

E ai começamos a programar os testes. 

## Aula 02

Uma forma bem facil de criar formulários com React é utilizando libs como formik ou a React Hook Form. Nessa aula, uma das coisas que o Mario faz é ensinar como o Formik cria o formulário

Crud é uma responsabilidade do back-end. Isso porque é papel do back fazer requisições para o banco de dados. Mas na hora de consumirmos uma API, geralmente fazemos via requisição HTTP e utilizamos algum dos principais métodos http (geralmente get e post e algumas vezes delete). O <b>Postman</b> é um site que ajuda muito a fazer esses testes de requisição (pra não ter que testar via fetch) 

<b>JWT: </b> uma padronização segura e fácil que gera uma chave com a sessão do usuário. 

### o que preciso reforçar

- useRef
- useContext (Context API) e Redux

