import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import ProductPage from "./pages/ProductPage/ProductPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App><ListPage/></App>,
    },
    {
        path: ":productId",
        element: <App><ProductPage/></App>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)