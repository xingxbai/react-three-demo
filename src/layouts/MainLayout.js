import React from 'react';
import routerConfig from '../router/index';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function traverseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.key = element.path;
    if (element.children && element.children.length > 0) {
      traverseArray(element.children);
    }
  }
  return arr;
}

const App = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const routes = routerConfig.routes;

  const selectedKeys = pathname.split('/').filter((item) => !!item);
  const items = traverseArray(routes);
  console.log(
    'rd ~ file: MainLayout.js:30 ~ App ~ items:',
    items,
    selectedKeys,
  );

  const onClick = (e) => {
    const pathArr = [...e.keyPath];
    const targetPath = pathArr
      .reverse()
      .map((item) => (item.startsWith('/') ? '' : item))
      .join('/');
    console.log(
      'rd ~ file: MainLayout.js:34 ~ onClick ~ pathArr:',
      pathArr,
      targetPath,
      selectedKeys,
    );

    nav({ pathname: targetPath });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: '100vh',
        }}
        defaultOpenKeys={['' + '/', ...selectedKeys]}
        selectedKeys={selectedKeys}
        mode="inline"
        items={items}
      />
      <div style={{ flex: 1 }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default App;
