import { useContext } from 'react';

import { useCalendarInputState } from 'hooks/useCalendarInputState.tsx';
import { useCalendarInputDispatch } from 'hooks/useCalendarInputDispatch.tsx';
import { OpenModalContext } from 'contexts/OpenModalProvider.jsx';

import { ReactComponent as DeleteIcon } from 'assets/svg/deleteBtn.svg';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function CheckInOut({ title }) {
  const { checkIn, checkOut } = useCalendarInputState();
  const { handelResetEvent } = useCalendarInputDispatch();
  const { handleClickSearchBarBtn } = useContext(OpenModalContext);

  const deleteBtn =
    title === '체크아웃' && checkIn && checkOut ? (
      <DeleteIcon
        onClick={handelResetEvent}
        style={{ position: 'absolute', top: '25px', left: '350px' }}
      />
    ) : undefined;

  function getCheckPoint() {
    if (title === '체크인' && checkIn) return checkIn;
    else if (title === '체크아웃' && checkOut) return checkOut;
    else return '날짜입력';
  }
  return (
    <>
      <Btn onClick={() => handleClickSearchBarBtn('CHECK_IN_OUT')}>
        <ContentBox>
          <BarTitle>{title}</BarTitle>
          <BarContent>{getCheckPoint()}</BarContent>
        </ContentBox>
      </Btn>
      {deleteBtn}
    </>
  );
}

export default CheckInOut;
