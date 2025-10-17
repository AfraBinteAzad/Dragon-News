import { createBrowserRouter } from "react-router";
import Error from "../Components/Error/Error";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path:"/",
    Component:HomeLayout,
    errorElement:<Error></Error>,
    loader:()=>fetch('/news.json')
  },
]);