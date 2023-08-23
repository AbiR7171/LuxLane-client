import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SingleFeatured from "../Pages/Home/SingleFeatured";
import SignUP from "../Authentication/SignUP";
import SignIn from "../Authentication/SignIn";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products/Products";
import MyCart from "../Pages/Cart/MyCart";
import CheckOut from "../Pages/Cart/CheckOut";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <MainLayout/>,
            children:
            [
                {
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"/singleFeatured/:id",
                    element:<PrivateRoute><SingleFeatured/></PrivateRoute>,
                    loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
                },
                {
                    path:"/signUp",
                    element:<SignUP/>
                },
                {
                    path:"/signIn",
                    element:<SignIn/>
                },
                {
                    path:"/products",
                    element:<Products/>,
                    loader:()=> fetch("http://localhost:5000/products")
                },
                {
                    path:"/myCart",
                    element:<MyCart/>
                },
                {
                    path:"/checkOut/:id",
                    element:<CheckOut/>
                }
            ]
        }
    ]
)


export default router;