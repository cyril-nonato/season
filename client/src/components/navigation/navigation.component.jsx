import React from 'react'

import * as S from './navigation.styles';
import ToolbarContainer from '../toolbar/toolbar.container';
import SideDrawerContainer from '../sidedrawer/sideDrawer.container';

const Navigation = ({ navLinks, checkForSidedrawer, currentUser }) => {
  const defaultNavLinks = navLinks.filter(link => link.user === 'neutral' ? link : null);
  const userNavLinks = [...defaultNavLinks];
  const noUserNavLinks = [...defaultNavLinks];

  // checks if there is a user
  navLinks.forEach(link => 
    link.user === 'user' ? userNavLinks.push(link) : null
  );

  // checks if there is no user
  navLinks.forEach(link => 
    link.user ==='no-user' ? noUserNavLinks.push(link) : null  
  );


  return (
    <S.Container>
      <ToolbarContainer
        currentUser={currentUser}
        userNavLinks={userNavLinks}
        noUserNavLinks={noUserNavLinks}
      />
      <SideDrawerContainer
        checkForSidedrawer={checkForSidedrawer}
        currentUser={currentUser}
        userNavLinks={userNavLinks}
        noUserNavLinks={noUserNavLinks}
      />
    </S.Container>
  );
}

export default Navigation;