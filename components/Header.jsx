import React from 'react'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import Switcher from './buttons/switcher'
import Menu from './Menu'

const Header = ({darkTheme, toggleTheme}) => {
  return (
    <header className='w-full bg-teal-500 text-gray-100 p-4 dark:bg-teal-300 dark:text-gray-900'>
        <div className='w-full max-w-6xl mx-auto flex justify-between items-center'>
            <div className='text-xl font-black uppercase flex items-center justify-center
             gap-2 tracking-widest'>
                <RiHomeSmile2Fill className='text-2xl translate-y-[-2px]' />
                Activities
            </div>
            <div className='flex items-center justify-center gap-6'>
              <Menu />
              <Switcher value={darkTheme} toggler={toggleTheme} />
            </div>  
        </div>
    </header>
  )
}

export default Header