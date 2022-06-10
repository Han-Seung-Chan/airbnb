import React from 'react';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import Main from 'components/main/Main';
import OpenModalProvider from 'contexts/OpenModalProvider';

function Home() {
  return (
    <OpenModalProvider>
      <Header />
      <SearchBar />
      <Main />
      <Footer />
    </OpenModalProvider>
  );
}

export default Home;
