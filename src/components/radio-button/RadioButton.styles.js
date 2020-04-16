import styled from 'styled-components';

export const RadioButtonContainer = styled.div`
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
`;

export const RadioButtonElement = styled.input``;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  padding-left: 8px;
`;
