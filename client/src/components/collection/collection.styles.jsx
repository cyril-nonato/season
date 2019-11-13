import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  margin: 0 1rem;
  border-bottom: .2rem solid black;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
  margin-top: 1rem;


  @media only screen and (max-width: ${mediaQueries.windows}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    grid-template-columns: 1fr;
  }

`;

export const ShowMoreLink = styled(Link)`

  &:link,
  &:visited {
    margin-top: 1rem;
    text-align: right;
    font-size: 1.8rem;
    color: black;
    display: block;
    text-decoration: none;
  }
`