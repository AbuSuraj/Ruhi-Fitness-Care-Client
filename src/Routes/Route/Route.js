import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Form/Login/Login";
import Register from "../../Pages/Form/Register/Register";
import Home from "../../Pages/Home/Home";
import AllServices from "../../Pages/Home/Services.js/AllServices";
import ServiceDetails from "../../Pages/Home/Services.js/ServiceDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import MyReview from "../../Pages/MyReviews/MyReviews";
 
 

 export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/addServices',
                element:<AddServices></AddServices>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>,
                loader: async () => fetch('https://fitness-gamma.vercel.app/allservices')
            },
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://fitness-gamma.vercel.app/services/${params.id}`)
            },
            {
                path:'/my-reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
 ])