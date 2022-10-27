import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useEffect, useState } from "react"
import AddNew from "../components/main/add_new"
import Table from "../components/main/table"
import { withPageAuth } from "@supabase/auth-helpers-nextjs"

export default function Home({user}) {
  const supabaseClient = useSupabaseClient()
  const [formData, setFormData] = useState({
    name: '',
    activity: '',
    startDate: '',
    endDate: '',
  })  
const [activities, setActivities] = useState('')

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const fetchData = async () => {
    const {data} = await supabaseClient.from('activities').select()
    setActivities(data)
  }

  const deleteItem = async (id) => {
    await supabaseClient.from('activities').delete().eq('id', id)
    fetchData()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await supabaseClient.from('activities').insert([formData]).single()
    setFormData({
        name: '',
        activity: '',
        startDate: '',
        endDate: '',
      })
      fetchData()
  }

  useEffect(() => {
      fetchData()
  }, [user])

  return (
    <>
    <h1 className="text-slate-900 dark:text-slate-50  text-center text-3xl font-black">
       NextJS + Tailwind
    </h1>
    <hr className="my-4" />
    <div className="flex gap-6 mt-6 ">
      <AddNew  {...{formData, handleInputChange, handleSubmit}}/>
        <section className="flex-grow">
       {activities.length  ? (
        <Table {...{activities, deleteItem}} />
        ) : (
       <div className="text-center font-bold tracking-widest text-xl opacity-50">
          No activities yet</div> 
          )}
        </section>
    </div>
    </>
  )
}

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
  async getServerSideProps(ctx, supabase) {
    const {data: {user}} = await supabase.auth.getUser()
    return { props: {user}}
  }
})