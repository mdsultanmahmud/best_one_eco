import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainlayout from "./layout/Mainlayout"
import About from "./pages/About/About"
import Blog from "./pages/Blogs/Blog"
import Contact from "./pages/contact/contact"
import Home from "./pages/home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Mainlayout></Mainlayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App