import React from 'react';
import Backdrop from '../backdrop/backdrop.component';

import * as S from './sidedrawer.styles';

const Sidedrawer = ({
  userNavLinks,
  noUserNavLinks,
  toggleSidedrawer,
  currentUser,
  checkForSidedrawer,
}) => {
  
  const handleSideDrawer = e => {
    if (e.target.tagName === 'A') {
      toggleSidedrawer()
    }
  }

  const displayName = currentUser ? currentUser.displayName : 'Menu';
  let sideDrawerLinks = null;
  if (currentUser) {
    sideDrawerLinks = (
      userNavLinks.map(link =>
        <S.Item key={link.name}>
          <S.Link to={link.route}>
            {link.name}
          </S.Link>
        </S.Item>
      )
    )
  }

  if (!currentUser) {
    sideDrawerLinks = (
      noUserNavLinks.map(link =>
        <S.Item key={link.name}>
          <S.Link to={link.route}>
            {link.name}
          </S.Link>
        </S.Item>
      )
    )
  }

  return (
    <React.Fragment>
      {
        checkForSidedrawer &&
        <Backdrop click={toggleSidedrawer} />
      }

      <S.SideDrawerContainer 
        onClick={handleSideDrawer} 
        checkForSidedrawer={checkForSidedrawer}>
        <S.ContentContainer>
          <S.H3>
            {displayName}
          </S.H3>
          <S.List>
            {sideDrawerLinks}
          </S.List>
        </S.ContentContainer>
      </S.SideDrawerContainer>

    </React.Fragment>
  );
}

export default Sidedrawer;