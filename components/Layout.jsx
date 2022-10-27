import {useState, useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import AppContext from '../context/AppContext'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'

const variants = {
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            delay: .5,
        }
    },
    out: {
        opacity: 0,
        y: 80,
        transition: {
            duration: .5,
        }
    },
    initial: {
        opacity: 0,
        y: -80,
        transition: {
            duration: .5,
        }
    },
}

const Layout = ({children}) => {
    // const ctx = useContext(AppContext)
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }
    
    const {asPath} = useRouter()
  return (
    <div className={`${darkTheme && 'dark'} `}>
        <div className='w-full min-h-screen bg-neutral-300  items-center 
            dark:bg-neutral-900 dark:text-neutral-100 flex flex-col gap-4 '>
                <Header {...{darkTheme, toggleTheme}} />
            <div className='flex-grow w-full px-4 flex'>
                <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div className=" bg-neutral-100 dark:bg-neutral-800 rounded-md p-10
                 w-full shadow-xl max-w-6xl mx-auto" 
                    variants={variants}
                    initial='initial'
                    animate='in'
                    exit='out'
                    key={asPath}
                 >
                    {children}
                 </motion.div>
                </AnimatePresence>  
             </div>
             <Footer />
        </div>
    </div>
   
  )
}

export default Layout