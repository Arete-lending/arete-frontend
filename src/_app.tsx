import { useRoutes } from 'react-router-dom';
import routes from './route';
import './apis/config';
import { ConfigProvider, theme } from 'antd';
import { createContext, useState } from 'react';

export const FUContext = createContext({
  update: true,
  forceUpdate: () => {}
});

const App = () => {
  const [update, setUpdate] = useState(true);
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#dc4446'
        }
      }}>
      <FUContext.Provider value={{ update, forceUpdate: () => setUpdate((u) => !u) }}>
        {useRoutes(routes)}
      </FUContext.Provider>
    </ConfigProvider>
  );
};

export default App;
