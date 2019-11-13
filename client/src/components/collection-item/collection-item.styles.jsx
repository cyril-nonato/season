import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/theme';

export const Image = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  height: 25rem;
  margin: 0 auto;
  overflow: hidden;

`;

export const Card = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: ${colors.white};
  transition: all .3s ease-in;
  margin-bottom: 1rem;

  &:hover button {
    opacity: 1;
    visibility: visible;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Title = styled(Link)`
  font-size: 1.6rem;
  text-transform: capitalize;
  text-align: center;
  font-weight: bold;

  &:link,
  &:visited {
    color: ${colors.darkBlue};
  }
`;


export const Price = styled.div`
  padding: 1rem 0;
  text-align: center;
  font-size: 1.4rem;
`;
