import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'
import Latest from '../Components/Latest/Latest'
import Navbar from '../Components/Navbar/Navbar'

export default function HomeLayout() {
  return (
    <div>
    <Header></Header>
    <section>
        <Latest></Latest>
    </section>
    <nav>
        <Navbar></Navbar>
    </nav>
     <main>
        <section className='left-nav'></section>
        <section className='main'>
            <Outlet></Outlet>
        </section>
        <section className='right-nav'></section>
     </main>
    </div>
  )
}
