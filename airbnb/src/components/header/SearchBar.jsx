import { Flex, Spacer, Box, Text, Divider } from '@chakra-ui/react';
import styled from 'styled-components';
import { SearchBarDiv } from './SearchBar_styled.jsx';
import RenderSearchBarContent from './SearchBarContent.jsx';
const searchbarMenu = [
  { main: '체크인', option: '날짜 입력' },
  { main: '체크아웃', option: '날짜 입력' },
  { main: '요금', option: '금액대 설정' },
  { main: '인원', option: '게스트 추가' },
];

function SearchBar() {
  return (
    <SearchBarDiv>
      {searchbarMenu.map((menu) => (
        <RenderSearchBarContent main={menu.main} option={menu.option} />
      ))}
      <p>검색</p>
    </SearchBarDiv>
  );
}

export default SearchBar;
