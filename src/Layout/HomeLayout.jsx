import React from 'react'
import { Outlet, useLoaderData } from 'react-router'
import Header from '../Components/Header/Header'
import Latest from '../Components/Latest/Latest'
import Navbar from '../Components/Navbar/Navbar'
import Left from '../Components/Hlayout/Left'
import Right from '../Components/Hlayout/Right'

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
     <main className='max-w-[1200px] mx-auto grid  grid-cols-12 items-start gap-3'>
        <section className='left-nav col-span-3'>
            <Left category={category}></Left>
        </section>
        <section className='main col-span-6'>
            <Outlet></Outlet>
        </section>
        <section className='right-nav col-span-3'>
          <Right></Right>
        </section>
     </main>
    </div>
  )
}
