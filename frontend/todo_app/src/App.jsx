import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import TodosList from "./features/TodosList";
import SignUp from "./features/SignUp";
import Login from "./features/Login";
import Header from "./components/Header";

const AppRoutes = () => {
  const routes = [
    { path: "/", element: <TodosList /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <Login /> },
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
  );
}

export default App;
