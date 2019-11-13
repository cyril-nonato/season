import React, { useEffect, useState } from 'react'
import * as S from './toolbar.styles'

import Bag from '../../assets/shopping-bag.svg'
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';

const Toolbar = ({
  noUserNavLinks,
  userNavLinks,
  currentUser,
  windowWidth,
  toggleSidedrawer,
  toggleCartDropdown,
  selectTotalQuantity
}) => {

  let mobileView = windowWidth < 900;
  let toolBarContent = null;

  const [windowScrollY, setWindowScrollY] = useState();

  useEffect(() => {

    const windowScrollYPos = () => {
      setWindowScrollY(window.scrollY);
    };
    window.addEventListener('scroll', windowScrollYPos);

    return () => {
      window.removeEventListener('scroll', windowScrollYPos)
    }
  }, []);

  // shows user navlinks
  if (currentUser) {
    toolBarContent = (
      <S.List>
        {
          userNavLinks.map(link =>
            <S.Item key={link.name}>
              <S.Link to={link.route}>
                {link.name}
              </S.Link>
            </S.Item>
          )
        }
      </S.List>
    );
  }

  // shows no user navlinks
  if (!currentUser) {
    toolBarContent = (<S.List>
      {
        noUserNavLinks.map(link =>
          <S.Item data-testid={link.name} key={link.name}>
            <S.Link to={link.route}>
              {link.name}
            </S.Link>
          </S.Item>
        )
      }
    </S.List>)
  }

  // shows toggle icon
  if (mobileView) {
    toolBarContent = null
  }

  return (
    <S.ToolbarContainer scrollY={windowScrollY}>
      {
        mobileView &&
        <S.ToggleContainer data-testid='toggle-icon' onClick={toggleSidedrawer}>
          <S.ToggleIcon />
        </S.ToggleContainer>
      }
      <S.HeaderLink to='/'>Season</S.HeaderLink>
      {toolBarContent}

      <S.SvgContainer onClick={toggleCartDropdown}>
        <S.Img src={Bag} alt='shopping-bag' />
        <S.NumItem>{selectTotalQuantity}</S.NumItem>
      </S.SvgContainer>

      <CartDropdownContainer />

    </S.ToolbarContainer>
  )

}


export default Toolbar;

