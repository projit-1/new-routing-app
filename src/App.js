import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Layouts/Main/Main";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Grandpa from "./Components/Grandpa/Grandpa";



function App() {
  const router = createBrowserRouter([
    { path: "/", 
      element: <Main></Main>,
      children: [
        { path: "/", 
        loader:()=> fetch("tshirt.json"),
        element: <Home></Home> },
        { path: "/about",
         element: <About></About> },
        { path: "/grandpa",
         element: <Grandpa></Grandpa> },
      ]

    }, 

  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
