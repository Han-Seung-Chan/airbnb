import { Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UpperMenu from './UpperMenu';
import UserInfo from './UserInfo';

function Header() {
  return (
    <HeaderDiv>
      <Flex>
        <Logo />
        <Spacer />
        <UpperMenu />
        <Spacer />
        <UserInfo />
      </Flex>
      <SearchBar />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  background-image: url('https://cdn.class101.net/images/e376fc5a-6163-4057-a008-7bcea74937cc/original');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 80% 160%;
`;

export default Header;
