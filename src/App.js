import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
      path: "/watch",
      element: <WatchPage/>
    },
    {
      path: "/",
      element: <MainContainer/>
    }
  ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

{/**
 
- Header
- Body
  - sidebar
  - mainContainer
    - Buttonlist
    - VideoContainer
      - VideoCard

*/}

export default App;
