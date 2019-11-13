import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCommentsOnUnmount } from '../../redux/comments/comments.actions';
import * as S from './item-comments.styles'
import { selectUserCommentsMap } from '../../redux/comments/comments.selector';
import ItemComment from '../item-comment/item-comment.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import ItemCommentsForm from '../item-comments-form/item-comments-form.component';

const ItemComments = () => {

  const commentsData = useSelector(selectUserCommentsMap);
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(removeCommentsOnUnmount())
  });

  return (
    <React.Fragment>
      <S.CommentsContainer>
        {
          commentsData &&
          commentsData.map(data => <ItemComment key={data.date.seconds} data={data} />)
        }
        {
          !commentsData &&
          <S.NoComments>No comments...</S.NoComments>
        }
      </S.CommentsContainer>
      {
        currentUser &&
        <ItemCommentsForm />
      }
      {
        !currentUser &&
        <S.LinkContainer>
          <CustomButton to="/sign-in" isLink text='Sign-in to leave a comment' />
        </S.LinkContainer>
      }
    </React.Fragment>
  );
}

export default ItemComments;