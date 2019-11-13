import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: .5fr 1fr 2fr 1fr;
  grid-gap: .5rem;
  font-size: 1.8rem;
  margin-top: 1rem;
`;

export const Index = styled.span`
  justify-self: center;
  align-self: center;
  grid-column: 1 / 2;
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
  grid-column: 2 / 3;
`;

export const QuantityContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  grid-column: 3 / 4;
`;

export const QuantitySpan = styled.span`
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const QuantityValue = styled.span`
  margin: 0 .5rem;
`;



export const Remove = styled.div`
  justify-self: center;
  align-self: center;
  grid-column: 5 / 6;

  &:hover {
    cursor: pointer;
  }
`