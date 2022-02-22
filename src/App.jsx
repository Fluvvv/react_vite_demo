import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FullPageLoading } from '@/utils/errorBoundary.jsx';
import { ReactQueryDevtools } from 'react-query/devtools';
import NotFound from '@/components/notFound/index.jsx';
import BaseConfig from '@/utils/config.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // 窗口聚焦不重新获取数据
    }
  }
});

const Login = lazy(() => import('@/views/login/index.jsx'));
const Layout = lazy(() => import('@/components/layout/index.jsx'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 显示FullPageLoading 直到他的子组件加载完成 */}
      <Suspense fallback={<FullPageLoading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path={BaseConfig.BASENAME} component={Layout} />
            <Redirect exact from='/' to='/login'></Redirect>
            <Route path='*' exact component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>

      {/* react-query 开发工具 */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
