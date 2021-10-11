import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======

>>>>>>> e5db9d1d2e5713469fc7b5296904f3a0a402a88c
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
  <ColorModeScript initialColorMode="light"></ColorModeScript>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

