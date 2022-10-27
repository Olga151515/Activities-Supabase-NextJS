import React from 'react'

const Switcher = ({ value, toggler}) => {
  return (
    <button className='focus:border-none outline-0 w-11 h-7 rounded-full bg-neutral-300
    dark:bg-neutral-800 p-[2px] flex justify-start' onClick={toggler}>
       <span className='w-6 h-6 rounded-full bg-teal-600 dark:bg-teal-200 transition-transform
       dark:translate-x-4'></span>
    </button>
  )
}

export default Switcher