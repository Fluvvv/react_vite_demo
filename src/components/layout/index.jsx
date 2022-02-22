import React, { Suspense, useState } from 'react';
import './index.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { menuList } from '@/router/index.jsx';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { FullPageLoading } from '@/utils/errorBoundary.jsx';
import Sider from './Sider/index.jsx';
import TagView from './TagView/index.jsx';
import NotFound from '@/components/notFound/index.jsx';
import BaseConfig from '@/utils/config.jsx';

const { Header, Content } = Layout;

export default function PageSider() {
  const [collapsed, setCollapsed] = useState(false);

  const getRoute = (List) => {
    return List.map((item) => {
      if (item.children && item.children.length > 0) {
        return getRoute(item.children);
      } else {
        return (
          <Route exact path={BaseConfig.BASENAME + item.path} key={item.meta.menuCode} component={item.component} />
        );
      }
    });
  };

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggle} className='trigger' />
          ) : (
            <MenuFoldOutlined onClick={toggle} className='trigger' />
          )}
        </Header>
        <TagView />
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {/* 在此添加懒加载时展示的内容 */}
          <Suspense fallback={<FullPageLoading />}>
            <Switch>
              {getRoute(menuList)}
              <Route path='*' exact component={NotFound}></Route>
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}
