import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const Icon = styled(IoMdCheckmark)`
  fill: ${props => props.theme.colors.white};
  width: 18px;
  height: 18px;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: ${props => props.checked && props.theme.colors.green};
  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    filter: brightness(110%);
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
