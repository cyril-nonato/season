import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr;
  grid-auto-rows: 15rem;
  font-size: 1.8rem; 
`;

export const Index = styled.span`
  justify-self: center;
  align-self: center;

`

export const Image = styled.img`
  height: 100%;
  justify-self: center;
`;

export const Name = styled.span`
  justify-self: center;
  align-self: center;
  text-align: center;
  text-transform: capitalize;
`;

export const Price = styled.span`
  justify-self: center;
  align-self: center;
`;

export const QuantityContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
`;

export const QuantitySpan = styled.span`
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const QuantityValue = styled.span`
  margin: 0 .5rem;
`

export const Remove = styled.div`
  justify-self: center;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`