import styled from 'styled-components';

export const CommentsContainer = styled.div`
  padding: 3rem 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`; 

export const Input = styled.input`
  width: 60%;
  border: none;
  font-size: 1.4rem;
  padding: .75rem 1rem;
  box-shadow: 0 3px 3px #ccc;
  margin-right: 2rem;
  transition: transform .3s ease-in-out;

  &:focus {
    transform: translateY(-2px);
  }
  
  &::-webkit-input-placeholder{
    color: #ccc;
  }

  &:-moz-placeholder {
    color: #ccc;
  }
`

export const NoComments = styled.p`
  text-align: center;
  font-size: 1.6rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`