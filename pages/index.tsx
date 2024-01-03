
import MobileNav from '@/components/MobileNav'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true)
  const closeNavHandler = () => setNav(false)

  return (
    <div className='overflow-x-hidden'>
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />
    </div>
  )
}

export default HomePage