import React, {useEffect} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import * as S from './item.styles';

const Item = ({ item, shopCleanUpError, addItemToCart }) => {
  const { name, imageUrl, status, battery, memory, price } = item;

  useEffect(() => {
    return () => {
      shopCleanUpError()
    }
  });

  return (
    <S.Container>
      <S.H3 data-testid='h3'>{name}</S.H3>
      <S.Grid>
        <S.Image data-testid='image' src={imageUrl} alt={name} />
        <S.Status>
          <S.Description>Status:</S.Description>
          <S.Value>{status}</S.Value>
        </S.Status>
        <S.Battery>
          <S.Description>Battery:</S.Description>
          <S.Value>{battery}</S.Value>
        </S.Battery>
        <S.Memory>
          <S.Description>Memory:</S.Description>
          <S.Value>{memory}</S.Value>
        </S.Memory>
        <S.Price>
          <S.Description>Price:</S.Description>
          <S.Value>${price.toFixed(2)}</S.Value>
        </S.Price>
        <S.ButtonContainer>
          <CustomButton type='button' click={() => addItemToCart(item)}>Add to cart</CustomButton>
        </S.ButtonContainer>

      </S.Grid>
    </S.Container>
  );
}

export default Item;


/*

        {
          !showComment &&
          <S.LoadComments onClick={() => getCommentsStart(brandName, model)}>load comments</S.LoadComments>
        }
        {
          showComment &&
          <S.CommentsContainer>
            <ItemCommentsContainer />
          </S.CommentsContainer>
        }

*/