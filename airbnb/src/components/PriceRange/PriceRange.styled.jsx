import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PriceRangeContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 30px;
  z-index: 1;
`;
const PriceRangeTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 10px;
  margin-bottom: 20px;
`;
const PriceRangePrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
  margin-bottom: 12px;
`;
const PriceRangeCaption = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 15px;
`;
const slidertheme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#006600',
    },
  },
});

export {
  PriceRangeContainer,
  PriceRangeTitle,
  PriceRangePrice,
  PriceRangeCaption,
  slidertheme,
};
