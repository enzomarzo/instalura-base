import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

//definindo a variável de texto no desktop
const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

//definindo o texto mobile
const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

//exportando para utilizarmos em outros lugares
export const TextStyleVariants = {
  smallestException,
  paragraph1,
};

//texto base que vai ser um span e receber uma cor que passarmos na props.
const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

//nossa função principal => ela recebe vários parametros e mais as props)
export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

//por default, se não passarmos nada na hora de chamar nosso componente, recebermos um span estilizado com paragraph1 
Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

//apenas tipando os textos para sabermos o que precisa passar na hora de criar esse texto.
Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};
