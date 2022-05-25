import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 916px;
  height: 76px;
  left: 262px;
  top: 110px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: 60px;
`;
const SearchBarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 112px;
  height: 44px;
`;
const SearchBarContentLabel = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.xs};
`;
const SearchBarContentText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.s};
`;

export {
  SearchBarDiv,
  SearchBarContent,
  SearchBarContentLabel,
  SearchBarContentText,
};
