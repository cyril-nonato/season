import React from 'react';

import * as S from './item-comment.styles';

const timeAgo = (timeInSeconds) => {
  const timeNow = Date.now() / 1000;
  const timeDiff = timeNow - timeInSeconds;

  const secondsEquivalents = {
    year: 60 * 60 * 24 * 30 * 12,
    month: 60 * 60 * 24 * 30,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  }

  if(timeDiff <= 1) {
    return `Just now`
  }

  for(let key in secondsEquivalents) {
    if(timeDiff >= secondsEquivalents[key]) {
      const value = Math.round(timeDiff/secondsEquivalents[key]);
      console.log(value);
      if(value === 1) {
        return `About ${value} ${key} ago`
      }

      return `About ${value} ${key}s ago`
    }
  }
};


const ItemComment = ({ data }) => {

  const { comment, date: { seconds }, displayName } = data;
  const aboutAgo = timeAgo(seconds);
  
  return (
    <S.Container>
      <S.NameAndTimeAgoContainer>
        <S.Name>{displayName}</S.Name>
        <S.TimeAgo>{aboutAgo}</S.TimeAgo>
      </S.NameAndTimeAgoContainer>
      <S.Comment>{comment}</S.Comment>
    </S.Container>
  );
}

export default ItemComment;