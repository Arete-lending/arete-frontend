import { useRoutes } from 'react-router-dom';
import routes from './route';
import './apis/config';
import { ConfigProvider, theme } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#fccb06'
        }
      }}>
      {useRoutes(routes)}
    </ConfigProvider>
  );
};

export default App;
