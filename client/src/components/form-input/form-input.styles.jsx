import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem 0;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #999;
  padding: .5rem 0;
  font-size: 1.7rem;
  display: inline-block;
  width: inherit;
  font-family: inherit;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
    text-transform: capitalize;
  }

  &:placeholder-shown ~ label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }
`;

export const Label = styled.label`
  transform: translateY(1rem);
  transition: all .3s;
  display: block;
  font-size: 1.7rem;
  text-transform: capitalize;
`;