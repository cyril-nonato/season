import styled from 'styled-components';

import homepageCover from '../../assets/home-page-cover.jpg'
import { colors } from '../../theme/theme';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export const ImgBg = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${homepageCover});
  background-position: left;
  background-size: cover;
  transition: all 2s ease-in;

  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.lightBlack};
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  display: block;
  letter-spacing: 2px;
  color: ${colors.white};
  margin-bottom: 2rem;
`;

export const H2 = styled.h2`
  font-size: 5rem;
  letter-spacing: 1px;
  color: ${colors.white};
  margin-bottom: 2rem;
`;

export const TextContent = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;

  &:hover ${H2} {
    display: block;
  }
`;



export const ImgContainer = styled.div`
  width: 100%;
  grid-column: 1 / 6;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  &:hover ${ImgBg} {
    transform: scale(1.2);
  }

  &:hover ${ImgBg}::before {
    display: block;
  }
`;




// export const ImgContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   position: relative;

//   &:hover Img {
//     transform: scale(1.2)
//   }

//   &:hover Content {
//     transform: scale(1);
//   }

//   &:hover :last-child:before,
//   &:focus :last-child:before {
//     display: block;
//   }

// `;

// export const Content = styled.div`
//   position: absolute;
//   z-index: 10;
//   /* left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 10; */
// `;


// export const Text = styled.h2`
//   color: white;

//   &:hover {

//   }
// `

// export const Img = styled.div`
//   width: 100%;
//   height: 70vh;
//   background-color: white;
//   background-image: url(${homepageCover});
//   background-position: center;
//   background-size: cover;
//   transition: all 2s;

//   &:hover {
//     transform: scale(1.2)
//   }

//   &::before {
//     content: '';
//     display: none;
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     background-color: rgba(52, 73, 94, .75);
//   }
// `;

// export const H3 = styled.h3`
//   font-size: 1.8rem;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   padding-bottom: 1rem;
//   border-bottom: .2rem solid black;
// `;

