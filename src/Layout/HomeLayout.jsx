import React from 'react'
import { Outlet, useLoaderData } from 'react-router'
import Header from '../Components/Header/Header'
import Latest from '../Components/Latest/Latest'
import Navbar from '../Components/Navbar/Navbar'
import Left from '../Components/Hlayout/Left'

export default function HomeLayout() {
  const { news, category } = useLoaderData();
  return (
    <div>
    <Header></Header>
    <section>
        <Latest news={news}></Latest>
    </section>
    <nav>
        <Navbar></Navbar>
    </nav>
     <main className='flex m-4 gap-3'>
        <section className='left-nav'>
            <Left category={category}></Left>
        </section>
        <section className='main'>
            <Outlet></Outlet>
        </section>
        <section className='right-nav'></section>
     </main>
    </div>
  )
}
