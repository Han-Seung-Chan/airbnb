import { useCallback, useContext, useState } from 'react';
import { Center, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

import CheckInOut from './CheckInOut';
import Personnel from './Personnel';
import PriceRange from './PriceRange';
import CalendarProvider from 'contexts/CalendarProvider.tsx';
import PersonnelProvider from 'contexts/PersonnelProvider.tsx';
import UserPriceResultProvider from 'contexts/PriceRangeProvider.tsx';

import RenderModal from 'components/Modal/RenderModal';
import { OpenModalContext } from 'contexts/OpenModalProvider';

import { ReactComponent as SearchIcon } from 'assets/svg/searchBtn.svg';

function SearchBar() {
  const { selectedContent } = useContext(OpenModalContext);

  return (
    <CalendarProvider>
      <PersonnelProvider>
        <UserPriceResultProvider>
          <Center>
            <SearchContainer>
              <Flex justify="space-between">
                <CheckInOut
                  onClick={handleClickSearchBarBtn}
                  title={'체크인'}
                />
                <CheckInOut
                  onClick={handleClickSearchBarBtn}
                  title={'체크아웃'}
                />

                <PriceRange onClick={handleClickSearchBarBtn} />

                <Personnel onClick={handleClickSearchBarBtn} />
                <SearchIcon style={{ margin: '22px' }} />
              </Flex>
            </SearchContainer>
            {selectedContent && (
              <RenderModal selectedContent={selectedContent} />
            )}
          </Center>
        </UserPriceResultProvider>
      </PersonnelProvider>
    </CalendarProvider>
  );
}

const SearchContainer = styled.div`
  position: absolute;
  width: 920px;
  height: 70px;
  top: 110px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 20px;
`;

export default SearchBar;
