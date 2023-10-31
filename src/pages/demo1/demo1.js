// eslint-disable react-hooks/exhaustive-deps
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import renderThree from './three';
const Demo1 = () => {
  const { pathname } = useLocation();
  let domId = pathname.replaceAll('/', '_');

  useEffect(() => {
    renderThree('#' + domId);
  }, []);

  return (
    <div id={domId} style={{ width: '100%', height: '100%' }}>
      111, {domId}
    </div>
  );
};
export default Demo1;
