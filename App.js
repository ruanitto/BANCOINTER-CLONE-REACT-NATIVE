import React from 'react';
import { StatusBar } from 'react-native';

import Header from './src/components/Header';
import Services from './src/components/Services';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>  
      <StatusBar backgroundColor="#FF8700" />
      <Header />
      <Services />
      <Home />
    </>
  );
}