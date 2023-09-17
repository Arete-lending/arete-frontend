import { useRoutes } from 'react-router-dom';
import routes from './route';

const App = () => {
  return useRoutes(routes);
};

export default App;
