import { createGlobalStyle } from 'styled-components'
import { mediaQueries, colors } from './theme/theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: open-sans;
  }

  body {
    background-color: ${colors.grey};
  }

  html {
    font-size: 80%;

    @media only screen and (max-width: ${mediaQueries.windows}) {
      font-size: 75%;
    }

    @media only screen and (max-width: ${mediaQueries.tablet}) {
      font-size: 65%;
    }

    @media only screen and (max-width: ${mediaQueries.phone}) {
      font-size: 50%;
    }
  }


  a {
    &:visited,
    &:link {
      text-decoration: none;
    }
  }

  body {
    font-size: inherit;
  }

`