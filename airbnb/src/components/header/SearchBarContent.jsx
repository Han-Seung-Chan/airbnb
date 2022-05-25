import {
  SearchBarContent,
  SearchBarContentLabel,
  SearchBarContentText,
} from './SearchBar_styled.jsx';

function RenderSearchBarContent({ main, option }) {
  return (
    <SearchBarContent>
      <SearchBarContentLabel>{main}</SearchBarContentLabel>
      <SearchBarContentText>{option}</SearchBarContentText>
    </SearchBarContent>
  );
}

export default RenderSearchBarContent;
