import { useRoutes } from 'react-router-dom';
import routes from './route';
import './apis/config';

const App = () => {
  return useRoutes(routes);
};

export default App;
