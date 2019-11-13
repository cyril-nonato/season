import styled from 'styled-components';
import { colors, mediaQueries } from '../../theme/theme';

export const Image = styled.div`
  display: block;
  height: 35rem;
  width: 100%;
  background-image: url(${props => props.bg});
  background-position: center;
  background-size: cover;
  transition: all .5s ease-in;
  overflow: hidden;

  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${colors.lightBlack};
    height: 100%;
    width: 100%;
    display: none;

  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  transition: all .3s ease-in-out;
  position: relative;
  overflow: hidden;
  border-radius: 2px;

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    margin: 0 1.5rem;
  }

  &:hover ${Image} {
    transform: scale(1.2);
  }
  
  &:hover ${Image}::before {
    display: block;
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;



export const H3 = styled.h3`
  margin-top: 2rem;
`;