import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const ErrorImage = styled.img`
  width: 25%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const ShortDescription = styled.p`
  font-size: 4rem;
  color: red;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const LongDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;