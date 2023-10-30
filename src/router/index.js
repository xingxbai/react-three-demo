import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Demo1 from '../pages/demo1/demo1.js';
const router = createBrowserRouter([
  {
    path: 'a',
    label: '首页',
    redirect: '/demo1',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: 'demo1',
        label: 'demo1',
        element: <Demo1></Demo1>,
        children: [
          {
            path: 'demo1-1',
            label: 'demo1-1',
            element: <Demo1></Demo1>,
          },
          {
            path: 'demo2-2',
            label: 'demo2-2',
            element: <Demo1></Demo1>,
          },
          {
            path: 'demo3-3',
            label: 'demo3-3',
            element: <Demo1></Demo1>,
          },
        ],
      },
      {
        label: 'demo2',
        path: 'demo2',
        element: <Demo1></Demo1>,
      },
      {
        path: 'demo3',
        label: 'demo3',
        element: <Demo1></Demo1>,
      },
    ],
  },
  {
    path: 'ab',
    label: 'abTest',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: 'demo1a',
        label: 'demo1a',
        element: <Demo1></Demo1>,
      },
      {
        path: 'demo2a',
        label: 'demo2a',
        element: <Demo1></Demo1>,
      },
      {
        path: 'demo3a',
        label: 'demo3a',
        element: <Demo1></Demo1>,
      },
    ],
  },
]);

export default router;
