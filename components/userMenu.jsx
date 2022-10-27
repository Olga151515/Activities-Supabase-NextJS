import Image from "next/image"
import { useRouter } from "next/router"

const UserMenu = ({user, auth}) => {
   const router = useRouter()
  return (
        <div className="flex gap-2 items-center ">
            <Image 
                src={user.user_metadata.avatar_url} 
                alt={user.user_metadata.full_name} 
                width={34}
                height={34}
                className='bg-slate-400 text-slate-900 gap-2 rounded-full '
            />
            {user.user_metadata.full_name}
            <button 
                className='bg-rose-500 text-white p-2 rounded py-1 flex ml-2
                    items-center gap-1 leading-none hover:bg-rose-600 transition-colors'
                onClick={async () => {
                  await  auth.signOut();
                    router.push('/login');
                }}
                >
                    Log out
            </button>
        </div>
  )
}

export default UserMenu