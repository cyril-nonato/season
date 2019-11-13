import styled from 'styled-components'
import { colors, mediaQueries } from '../../theme/theme'
import { Link } from 'react-router-dom'


export const Container = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${colors.darkBlack};
  
`;

export const DivOuter = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-gap: 1rem;
  color: ${colors.white};
  padding-top: 8rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding-top: 6rem;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    grid-template-columns: 1fr;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const DivInner = styled.div`

`;

export const H4 = styled.h4`
  font-size: 1.8rem;
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  margin-top: 4rem;

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    margin-top: 1rem;
  }
`;

export const Li = styled.li`

`;

export const Span = styled.span`
  display: block;
  margin-bottom: 1.8rem;
  color: ${colors.white};
`;

export const Email = styled.span`
  color: ${colors.darkBlue};
  font-weight: bolder;
`;

export const A = styled(Link)`
  display: block;
  margin-bottom: 1.8rem;

  &:visited,
  &:link {
    color: ${colors.white};
  }

  &:hover {
    color: ${colors.darkBlue};
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  height: 4rem;
  margin-top: 4rem;

  @media only screen and (max-width: ${mediaQueries.tablet}) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: ${mediaQueries.phone}) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 80%;
  color: ${colors.white};
  background-color: transparent;
  border: 1px solid ${colors.darkBlue};
  padding: .5rem;
  font-size: 1.2rem;

  &:placeholder-shown {
    color: ${colors.grey};

  }

`;

export const Button = styled.button`
  background-color: ${colors.darkBlue};
  border: 1px solid ${colors.darkBlue};
  padding: .5rem 1rem;
  font-size: 1.4rem;
  color: ${colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const CopyrightContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid ${colors.grey};
`;

export const Copyright = styled.span`
  display: block;
  padding: 3rem 0;
  color: ${colors.white};
  text-align: center;
  font-size: 1.2rem;
`

