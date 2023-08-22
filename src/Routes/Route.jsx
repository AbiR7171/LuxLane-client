import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SingleFeatured from "../Pages/Home/SingleFeatured";

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
                    element:<SingleFeatured/>,
                    loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
                }
            ]
        }
    ]
)


export default router;