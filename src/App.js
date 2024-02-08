
import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//code splitting, chunking, on demand or dynamic loading, lazy loading
const Instamart = lazy(() => import('./components/Instamart'))
const About = lazy(() => import('./components/About'))

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/



const AppLayout = () => {
    const [user, setUser] = useState({
        name:'Harish Sarki',
        email: 'sarkiharish42@gmail.com'
    })
    return (
        <Provider store = {store}>
            <UserContext.Provider value={
                 {
                    user: user,
                    setUser: setUser
                }
            }>
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider>
            
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:'/',
                element: <Body />
            },
            {
                path:'/about',
                element: <Suspense fallback= 'Loading....'><About /></Suspense>,
                children: [
                    {
                        path:'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            }, 
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path:'/instamart',
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
                
            },
            {
                path:'/cart',
                element: <Cart />
                
            }
        ]
    },
    // {
    //     path:'/about',
    //     element: <About />
    // }
])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);