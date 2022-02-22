import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuList } from '@/router/index.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { createAddTagAction } from '@/store/actions';
import BaseConfig from '@/utils/config.jsx';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function PageSider(props) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const tagList = useSelector((state) => state.tagView);

  function getMenuNodes(menuList, prefix = '') {
    return menuList.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu key={item.meta.menuCode} title={item.meta.title} icon={<item.meta.icon />}>
            {getMenuNodes(item.children, prefix)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.meta.menuCode} icon={item.meta.icon ? <item.meta.icon /> : ''}>
            <Link
              to={BaseConfig.BASENAME + item.path}
              onClick={() => addTag(item.meta.title, item.meta.menuCode, item.path)}
            >
              {item.meta.title}
            </Link>
            {/* <Link to={item?.path || ''}>{item.meta.title}</Link> */}
          </Menu.Item>
        );
      }
    });
  }

  let defaultSelectKey = [],
    defaultOpenKeys = [];
  menuList.map((item) => {
    if (item.path === pathname) {
      defaultSelectKey = [item.meta.menuCode + ''];
    }
    if (item.children) {
      item.children.map((child) => {
        if (child.path === pathname) {
          defaultOpenKeys = [item.meta.menuCode + ''];
          defaultSelectKey = [child.meta.menuCode + ''];
        }
      });
    }
  });
  const [selectKey, setSelectKey] = useState(defaultSelectKey);
  function addTag(title, menuCode, path) {
    setSelectKey([menuCode + '']);

    // 已经点击过的，不再添加到tagList
    let isAdd = true;
    tagList.forEach((obj) => {
      if (obj.title === title) {
        isAdd = false;
      }
    });
    if (isAdd) {
      dispatch(createAddTagAction({ title, path }));
    }
  }

  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo'>{collapsed ? 'R' : 'React'}</div>
      <Menu theme='dark' mode='inline' selectedKeys={selectKey} defaultOpenKeys={defaultOpenKeys}>
        {getMenuNodes(menuList)}
      </Menu>
    </Sider>
  );
}
