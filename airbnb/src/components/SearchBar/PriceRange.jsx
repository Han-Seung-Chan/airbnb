import React, { useState, useContext, useEffect } from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

import usePriceRangeResultHook from 'hooks/usePriceRangeResult.tsx';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteBtn.svg';

function PriceRange({ onClick }) {
  const [resetBtn, setResetBtn] = useState('close');
  const { minPrice, maxPrice, setUserChoice } = usePriceRangeResultHook();

  const resetPrice = () => {
    console.log('reset');
  };

  const deleteBtn =
    resetBtn === 'open' ? (
      <DeleteIcon
        onClick={resetPrice}
        style={{
          position: 'absolute',
          top: '25px',
          left: '590px',
          cursor: 'pointer',
        }}
      />
    ) : undefined;

  function showPrice() {
    if (minPrice !== 0 && maxPrice !== 100) {
      setResetBtn('open');
    }
    return `${minPrice}원 - ${maxPrice}원`;
  };

  return (
    <>
      <Btn onClick={() => onClick('PRICE_RANGE')}>
        <ContentBox>
          <BarTitle>요금</BarTitle>
          <BarContent>{showPrice()}</BarContent>
        </ContentBox>
      </Btn>
      {deleteBtn}
    </>
  );
}

export default PriceRange;
