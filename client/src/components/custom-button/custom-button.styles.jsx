import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../theme/theme';

export const LinkButton = styled(Link)`

  &:link,
  &:visited {
    color: ${colors.white};
    font-weight: bolder;
    background-color: ${colors.darkBlue};
    border: none;
    border-radius: 2px;
    padding: 1rem 1.8rem;
    transition: all .3s ease-in-out;
    font-size: 1.3rem;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.darkBlue};
    box-shadow: -2px 8px 10px ${colors.lightBlack};
  }
`;

const googleStyles = css`
  background-color: ${colors.google};
`;

export const isGoogleSignUp = props => {
  if(props.google) {
    return googleStyles;
  }
  return null;
}

export const Button = styled.button`
  color: ${colors.white};
  font-weight: bolder;
  background-color: ${colors.darkBlue};
  border: none;
  border-radius: 2px;
  padding: 1rem 1.8rem;
  transition: all .3s ease-in-out;
  font-size: 1.3rem;
  text-align: center;
  ${isGoogleSignUp};
  
  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.darkBlue};
    box-shadow: -2px 8px 10px ${colors.lightBlack};
  }
`;