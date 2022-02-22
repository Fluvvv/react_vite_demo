import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from '@/store';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';

import 'normalize.css';
import '@/assets/style/index.scss';
import 'moment/dist/locale/zh-cn';
import 'virtual:svg-icons-register';
import 'antd/dist/antd.css';

ConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: '#7371ff'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider prefixCls='custom' locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
