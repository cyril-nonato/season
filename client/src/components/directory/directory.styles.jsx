import styled from 'styled-components';
import { mediaQueries } from '../../theme/theme';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${mediaQueries.windows}) {
    grid-template-columns: 1fr 1fr 1fr;
  };

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr 1fr;
  };

  @media only screen and (max-width: ${mediaQueries.phone}) {
    grid-template-columns: 1fr;
  }
`;