import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return <>
        <Sidebar />
        <Outlet />
    </>
}

export default Layout