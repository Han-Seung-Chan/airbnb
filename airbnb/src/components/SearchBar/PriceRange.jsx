import React, { useContext } from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';
import { OpenModalContext } from 'contexts/OpenModalProvider.jsx';

function PriceRange() {
  const { handleClickSearchBarBtn } = useContext(OpenModalContext);
  return (
    <Btn onClick={() => handleClickSearchBarBtn('PRICE_RANGE')}>
      <ContentBox>
        <BarTitle>요금</BarTitle>
        <BarContent>금액대 설정</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default PriceRange;
