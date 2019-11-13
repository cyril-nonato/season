import styled, {css} from 'styled-components'
import { colors } from '../../theme/theme';

const show = css`
  opacity: 1;
  visibility: visible;
`;

const hide = css`
  opacity: 0;
  visibility: hidden;
`;

const showOrHide = props => {
  if(props.toggle) {
    return show
  }
  return hide
};

export const Content = styled.div`
  height: 85%;
  overflow-y: auto;
  padding: 1rem;
`;

export const H4 = styled.h4`
  font-size: 1.6rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${colors.black};
`;

export const Span = styled.span`
  text-align: center;
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
`;

export const Triangle = styled.div`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: ${colors.white};
  height: 1rem;
  width: 4rem;
  position: absolute;
  top: -2%;
  right: 5%;
`

export const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 7rem;
  height: 35rem;
  width: 25rem;
  background-color: ${colors.white};
  z-index: 100;
  transition: all .3s ease-in;
  box-shadow: -2px 8px 10px ${colors.lightBlack};
  ${showOrHide}
  border-radius: 5px;

  a:link,
  a:visited {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -25%);
  }
`;
