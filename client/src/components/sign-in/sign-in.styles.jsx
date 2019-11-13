import styled from 'styled-components';

import {Link} from 'react-router-dom';
import { mediaQueries, colors } from '../../theme/theme';

export const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  margin-bottom: 5rem;
  min-height: 80vh;

  @media only screen and (max-width: ${mediaQueries.windows}) {
    width: 40%;
  }

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    width: 70%;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    width: 90%;
  }
`;

export const H3 = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  margin-top: 2rem;
  font-size: 1.7rem;
  display: inline-block;
`


export const SignUpLink = styled(Link)`

  &:link,
  &:visited {
    color: ${colors.darkBlue};
  }

`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export const Whitespace = styled.div`
  padding: .5rem;
  font-size: 1.6rem;
`;

export const Error = styled.p`
  padding: 1rem;
  font-size: 1.6rem;
  color: red;
  display: flex;
  justify-content: center;
`;
