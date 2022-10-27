import React from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri'

const TableHeader = () => {
    return (
        <thead>
            <tr className='bg-gray-300 text-neutral-900 dark:bg-neutral-900 dark:text-slate-100 '>
                <th className='w-6'>#</th>
                <th>Name</th>
                <th>Activity</th>
                <th>Start</th>
                <th >End</th>
                <th className='w-20'></th>
            </tr>
        </thead>
    )
}

const Table = ({activities, deleteItem}) => {
  return <div>
        <table className='data-table '>
            <TableHeader />
            <tbody>
                {activities.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.activity}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>
                        <button 
                            className='bg-rose-500 text-white p-2 rounded
                                py-1 flex items-center gap-1 leading-none hover:bg-rose-600
                                transition-colors'
                            onClick={() => {
                                if(
                                    confirm(`Are you sure you want to delete ${item.name}?`)
                                ) {
                                    deleteItem(item.id)
                                } 
                            }}>
                            <RiDeleteBack2Fill />
                            Delete
                        </button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    </div>
}

export default Table