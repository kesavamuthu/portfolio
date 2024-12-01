import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Homepage from './pages/homepage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Users from './pages/users'

const router = createBrowserRouter([
    {
        path: '/:name',
        element: <Homepage />,
    },
    {
        path: '/',
        element: <Users />,
    },
])

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default App
