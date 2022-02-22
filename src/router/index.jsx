import { lazy } from 'react';
import { HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined } from '@ant-design/icons';

export const menuList = [
  {
    path: '/main',
    meta: {
      title: '首页',
      icon: SettingFilled,
      menuCode: 200
    },
    component: lazy(() => import('@/views/home/index.jsx'))
  },
  {
    meta: {
      title: '业务管理',
      icon: HomeOutlined,
      menuCode: 300
    },
    children: [
      {
        path: '/client',
        meta: {
          title: '客户端管理',
          icon: SmileOutlined,
          menuCode: 301
        },
        component: lazy(() => import('@/views/client/index.jsx'))
      },
      {
        path: '/print',
        meta: {
          title: '水印管理',
          icon: SyncOutlined,
          menuCode: 302
        },
        component: lazy(() => import('@/views/print/index.jsx'))
      }
    ]
  }
];
