import React, { useState, useEffect } from 'react'
import * as S from './collection-item.styles'
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, match, brand, addItemToCart }) => {

  const { name, price, imageUrl, itemRoute } = item;
  const { url, params: { brandName } } = match;

  const [linkUrl, setUrl] = useState(`${url}/${brand}/${itemRoute}`);

  useEffect(() => {
    if (brandName) {
      setUrl(`${url}/${itemRoute}`)
    }
  }, [url, brandName, itemRoute])

  return (
    <S.Item>
      <S.Card>
        <S.ImageContainer>
          <S.Image src={imageUrl} alt={name} />
        </S.ImageContainer>
        <CustomButton click={() => addItemToCart(item)} type='button'>Add to cart</CustomButton>
      </S.Card>
      <S.Title to={linkUrl}>{name}</S.Title>
      <S.Price>Price: <strong>${price.toFixed(2)}</strong></S.Price>
    </S.Item>
  );
}

export default CollectionItem;