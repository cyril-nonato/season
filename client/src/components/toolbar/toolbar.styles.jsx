import styled, {css, keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../theme/theme';

const slotIn = keyframes`
  from {
    transform: translateY(-5rem);
  }

  to {
    transform: translateY(0);
  }
`;

const toolbarFixed = css`
  position: fixed;
  top: 0;
  left: 0;
  animation: ${slotIn} .5s linear;
`;

const toolbarRelative = css`
  position: relative;
`;

const checkScrollYPos = props => {
  if(props.scrollY > 75) {
    return toolbarFixed;
  }
  return toolbarRelative;
}

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  padding: 1.5rem 3rem;
  width: 100%;
  background-color: ${colors.grey};
  ${checkScrollYPos};

`;

export const ToggleContainer = styled.div`
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleIcon = styled.span`
  height: .25rem;
  width: 2.5rem;
  background-color: black;
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: black;
    display: inline-block;
    top: -.6rem;
  }

  &::after {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: black;
    display: inline-block;
    top: .6rem;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 2.5rem;
  margin-right: 1rem;
  font-weight: bolder;

  &:visited,
  &:link {
    text-decoration: none;
    color: ${colors.darkBlue};
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 1.5rem;
  display: flex;
`;

export const Item = styled.li`
`;

export const Link = styled(NavLink)`

  &:link,
  &:visited {
    text-decoration: none;
    padding: 1rem 1rem;
    color: #000;
  }

  &.active {
    text-decoration: underline;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  height: 2.5rem;
  width: auto;
  margin: auto;
`;

export const NumItem = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
`;