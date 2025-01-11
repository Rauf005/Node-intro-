import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from "./Routes/Routes";  

const routes = createBrowserRouter(Routes);  
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
