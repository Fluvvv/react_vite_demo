import React, { useEffect } from 'react';
import './index.scss';
import { Tag } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createAddTagAction, createDeleteTagAction } from '@/store/actions';
import { menuList } from '@/router/index.jsx';

export default function Index() {
  const dispatch = useDispatch();
  const tagList = useSelector((state) => state.tagView);

  const { pathname } = useLocation();
  useEffect(() => {
    const menuListFla = flattenRoute(menuList);
    const pos = menuListFla.find((x) => x.path === pathname);
    if (pos && pathname !== '/main') {
      dispatch(createAddTagAction({ title: pos.meta.title, path: pathname }));
    }
  }, []);

  // 扁平化路由菜单
  const flattenRoute = (List) => {
    const result = [];
    List.filter((item) => {
      if (item.path) {
        result.push(item);
      }
      if (item.children) {
        result.push(...flattenRoute(item.children));
      }
    });
    return result;
  };

  function onTagClose(title) {
    dispatch(createDeleteTagAction(title));
    // history.replace(tagList[tagList.length - 1].path);
  }

  //   if (props.tagViewShow) {
  if (1) {
    return (
      <div className='tag-box'>
        <>
          {tagList.map((item) => {
            if (item.title === '首页') {
              return (
                <Tag style={{ marginRight: '10px', fontSize: '5px' }} key={item.path} color='processing'>
                  <Link to={item.path}>{item.title}</Link>
                </Tag>
              );
            } else {
              return (
                <Tag
                  closable
                  onClose={() => {
                    onTagClose(item.title);
                  }}
                  style={{ marginRight: '10px', fontSize: '5px' }}
                  key={item.path}
                  color='processing'
                >
                  <Link to={item.path}>{item.title}</Link>
                </Tag>
              );
            }
          })}
        </>
      </div>
    );
  } else {
    return null;
  }
}
