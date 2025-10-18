import { createBrowserRouter } from "react-router";
import Error from "../Components/Error/Error";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path:"/",
    Component:HomeLayout,
    errorElement:<Error></Error>,
    loader: async () => {
     
      const [newsRes, categoryRes] = await Promise.all([
        fetch('./news.json'),
        fetch('./categories.json')
      ]);

      const [news, category] = await Promise.all([
        newsRes.json(),
        categoryRes.json()
      ]);

      return { news, category };
    },
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
           path:'/category/:id',
           loader: () => fetch('/categories.json'),
           element:<CategoryNews></CategoryNews>,
        }
    ]
    
  },
]);