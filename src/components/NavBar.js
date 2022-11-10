import React, { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'

const NavBar = () => {
  let NavbarLinks = [
    {'url': '/features', 'name': 'Features'},
    {'url': '/pricing', 'name': 'Pricing'},
    {'url': '/tutorial', 'name': 'Tutorial'},
    {'url': '/support', 'name': 'Support'},
    {'url': '/content', 'name': 'Content'},
  ]
  let [open, setOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50 bg-slate-50'>
      <div className='max-w-7xl md:flex justify-between items-center mx-auto px-5 py-5 md:space-y-0 space-y-8'>
        <div className='flex justify-between items-center'>
          <div>
            <span className='text-2xl font-semibold font-mono text-fuchsia-800'>Topalio</span>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setOpen(!open)}>
              { open ? <CgClose className= 'h-8 w-8 text-fuchsia-800' /> : <CgMenuRight className= 'h-8 w-8 text-fuchsia-800'/>}
            </button>
          </div>
        </div>
        <ul className= {`md:flex md:space-x-5 md:space-y-0 space-y-5 ${open ? '' : 'hidden'}`} >
          {NavbarLinks.map((navlink) => (
            <li key={navlink.name}>
              <a href={navlink.url} className='text-lg text-slate-400 hover:text-fuchsia-800 duration-500'>
                {navlink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar

//<ul className={`md:flex md:space-x-6 space-y-6 md:space-y-0 ${open ? '' : 'hidden'}`}>

