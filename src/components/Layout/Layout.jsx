import React from 'react'
import SideNav from '../SideNav/SideNav'
import Footer from './components/Footer/Footer'

export default function Layout({childern}) {
    return (
        <>
            {/* <NavBar id="emp1"></NavBar> */}
            <main>
                <SideNav />
                {childern}
            </main>
            <Footer/>
        </>
    )
}
