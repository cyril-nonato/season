import styled from 'styled-components';
import { mediaQueries } from '../../theme/theme';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10rem;
  min-height: 80vh;

  @media only screen and (max-width: ${mediaQueries.windows}) {
    width: 70%;
  }

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    width: 95%;
  }
`;

export const Span = styled.span`
  text-align: center;
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  border-bottom: .2rem solid black;
  width: 100%;
`;

export const Descriptions = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;

  span {
    justify-self: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const PriceContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin: 3rem auto 0 auto;

`;