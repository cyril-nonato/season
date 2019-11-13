import React, { useState } from 'react'

import * as S from './footer.styles'

const Footer = ({ sections }) => {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <S.Container>
      <S.DivOuter>
        <S.DivInner>
          <S.H4>Brands</S.H4>
          <S.Ul>
            {
              sections.map(section =>
                <S.Li key={section.id}>
                  <S.A to={section.linkUrl}>{section.name}</S.A>
                </S.Li>
              )
            }
          </S.Ul>
        </S.DivInner>
        <S.DivInner>
          <S.H4>Company</S.H4>
          <S.Ul>
            <S.Li>
              <S.A to='#'>About</S.A>
            </S.Li>
            <S.Li>
              <S.A to='#'>News</S.A>
            </S.Li>
            <S.Li>
              <S.A to='#'>Contact</S.A>
            </S.Li>
            <S.Li>
              <S.A to='#'>FAQ</S.A>
            </S.Li>
          </S.Ul>
        </S.DivInner>
        <S.DivInner>
          <S.H4>Address</S.H4>
          <S.Ul>
            <S.Li>
              <S.Span>115, Block A, Tokyo</S.Span>
            </S.Li>
            <S.Li>
              <S.Span>+81 559 234 128</S.Span>
            </S.Li>
            <S.Li>
              <S.Email>contact@season.com</S.Email>
            </S.Li>
          </S.Ul>
        </S.DivInner>
        <S.DivInner>
          <S.H4>Newsletter</S.H4>
          <S.Form onSubmit={handleSubmit}>
            <S.Input onChange={handleChange} value={email} placeholder='Email Address' />
            <S.Button type='submit'>Subscribe</S.Button>
          </S.Form>
        </S.DivInner>
      </S.DivOuter>
      <S.CopyrightContainer>
        <S.Copyright>
          Copyright &#160;2019 All rights reserved. This is made by Cyril Jessie Nonato
        </S.Copyright>
      </S.CopyrightContainer>
    </S.Container>
  );
}

export default Footer;