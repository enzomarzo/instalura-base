import { css } from 'styled-components';
import { breakpointsMedia } from './breakpointsMedia';

//Essa função serve para definirmos via 'props' atributos do CSS especificos que queremos alterar
//a condicional que verificar se a propValue é um object é porque estamos passando os breakpoints (que são as midiaQueries). Os breakpoints
//são objetos (que contem o sm, md, lg e etc). Mas a leitura de CSS não lê objetos - exemplo: textAling: right;. 
//ou seja, o css só lê strings, então temos que transformar o objeto em string para que o css possa ler.
//E, no final, se retornar uma string então é só ler [propname]: props[propname], que seria, por exemplo, textAlign: right

//JAVASCRIPT => Estamos utilizando o conceito de CLOSURE.
//A função propToStyle recebe um parametro que definimos como propName. Vamos por exemplo chamar essa função com propToStyle('margin')
//ela retorna uma outra função que utiliza de seu escopo e só vale dentro dela (isso é o conceito de Closure). 
//essa função vai retorna as props (pois o styled.component recebe uma função com props)

//e dentro dessa função temos outar função que recebe a prop.

//exemplo: 
//propToStyle(textAlign) => o parametro que estamos passando é o textAlign
//E ai precisamos acessar o props.textAlign e fazemos isso por meio da notação de colchetes

export function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'object') {
      return css`
        ${breakpointsMedia({
    ...(propValue.xs && {
      xs: { [propName]: propValue.xs },
    }),
    ...(propValue.sm && {
      sm: { [propName]: propValue.sm },
    }),
    ...(propValue.md && {
      md: { [propName]: propValue.md },
    }),
    ...(propValue.lg && {
      lg: { [propName]: propValue.lg },
    }),
    ...(propValue.xl && {
      xl: { [propName]: propValue.xl },
    }),
  })}
      `;
    }

    return {
      [propName]: props[propName],
    };
  };
}