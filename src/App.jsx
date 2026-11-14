import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GameIns from './pages/GameIns';  
import Gaming from './pages/Gaming';
import Tech from './pages/Tech';
import News from './pages/News';

const router = createHashRouter([
  {

    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "gameins", element: <GameIns /> },
      { path: "tech", element: <Tech /> },
      { path: "gaming/:articleId?", element: <Gaming /> },  
      { path: "news/:articleId?", element: <News /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;