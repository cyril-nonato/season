import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 3px 3px #ccc;
  padding: .5rem 1rem;
  transition: transform .3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const NameAndTimeAgoContainer = styled.div`
  margin: 1rem 0; 
`;

export const Name = styled.span`
  font-size: 1.6rem;
  margin-right: 1rem;
  font-weight: bold;
`;

export const TimeAgo = styled.span`
  color: #ccc;
  font-size: 1.4rem;
`;

export const Comment = styled.p`
  font-size: 1.5rem;
`