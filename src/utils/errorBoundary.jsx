import { Spin, Typography } from 'antd';

export const FullPageLoading = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Spin size={'large'}></Spin>
  </div>
);

export const FullPageErrorFallback = (error) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Typography.Text type={'danger'}>{error?.message}</Typography.Text>
  </div>
);
