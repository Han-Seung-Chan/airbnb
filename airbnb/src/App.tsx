import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import Home from 'pages/Home';
import Result from 'pages/Result';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
