import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'

export default function HomeLayout() {
  return (
    <div>
    <Header></Header>
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
