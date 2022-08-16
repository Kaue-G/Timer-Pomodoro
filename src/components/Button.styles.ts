import styled, { css } from 'styled-components';

export type ButtonVariant = 'pryimary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  pryimary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  ${({ variant }) =>
    css`
      background-color: ${buttonVariants[variant]};
    `}
`;
