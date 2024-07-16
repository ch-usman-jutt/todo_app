import './App.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import TodosList from './features/TodosList';
import Header from './components/Header';

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <TodosList /> },
  ];

  const element = useRoutes(routes);

  return element;
};

function App() {

  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  )
}

export default App
