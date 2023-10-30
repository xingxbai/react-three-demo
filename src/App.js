import React from 'react';
import { RouterProvider, useNavigate, useLocation } from 'react-router-dom';
import routerConfig from './router/index';
import './App.css';
import 'antd/dist/reset.css';

function App() {
  // const { pathname } = useLocation();
  // console.log('rd ~ file: App.js:9 ~ App ~ pathname:', pathname);

  // const nav = useNavigate();
  return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
