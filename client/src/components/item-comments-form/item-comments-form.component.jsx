import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as S from './item-comments-form.styles';

import CustomButton from '../custom-button/custom-button.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { addCommentStart, getCommentsStart } from '../../redux/comments/comments.actions';
import { selectUserCommentsLength } from '../../redux/comments/comments.selector';

const ItemCommentsForm = ({ match }) => {
  const { params: { brandName, model } } = match;

  const { displayName } = useSelector(selectCurrentUser);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const created_at = new Date();
    if(comment.length) {
      const commentDetails = {
        displayName, created_at, comment
      }
      dispatch(addCommentStart(brandName, model, commentDetails));
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input required onChange={handleChange} value={comment} placeholder='Leave your comment...' />
      <CustomButton type='submit'>Submit</CustomButton>
    </S.Form>
  );
}

export default withRouter(ItemCommentsForm);