import { useEffect, useContext} from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import {Auth, ThemeSupa} from '@supabase/auth-ui-react'
import { useRouter } from 'next/router'
import AppContext from '../context/AppContext'

const Login = () => {
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const router = useRouter()

    useEffect(() => {
       if (user) {
        router.push('/')
       }    
    }, [user])

    const {darkMode} = useContext(AppContext)

  return (
    <div className='max-w-lg m-auto'>
        {!user &&
            <Auth 
                appearance={{theme: ThemeSupa}}
                theme={darkMode ? 'dark' : 'default'}
                supabaseClient={supabaseClient}
                providers={['discord', 'github']} 
                redirectTo='/'
                socialLayout='horizontal'
            />
        }
      
    </div>
  )
}

export default Login;