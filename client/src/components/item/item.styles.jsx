import styled, { css } from 'styled-components'
import { mediaQueries } from '../../theme/theme';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: ${mediaQueries.windows}) {
    width: 60%;
  }

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    width: 80%;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    width: 95%;
  }
`;

const contextStyles = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 100%;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(5, 8rem) 2rem;
`;

export const Image = styled.img`
  height: 100%;
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  justify-self: center;
`;

export const Status = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  ${contextStyles}
`;

export const Memory = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  ${contextStyles}
`;

export const Battery = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  ${contextStyles}
`;

export const Price = styled.div`
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  ${contextStyles}
`;

export const ButtonContainer = styled.div`
  grid-row: 5 / 6;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;

  button {
    padding: 1.5rem 2.5rem;
  }
`

export const Description = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const Value = styled.span`
  font-size: 1.6rem;
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  border-bottom: .2rem solid black;
`;

export const LoadComments = styled.p`
  grid-row: 6 / 7;
  grid-column: 1 / 3;

  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

export const CommentsContainer = styled.div`
  grid-row: 6 / 7;
  grid-column: 1 / 3;
`;


// export const StarContainer = styled.div`
//   grid-row: 5 / 6;
//   grid-column: 1 / 2;

//   width: 100%;



// `

// export const Star = styled.img`
//   height: 100%;
//   color: black;
//   z-index: -1;
// `;

export const GridComment = styled.div`

`