import React from 'react'

const AddNew = ({formData, handleInputChange, handleSubmit}) => {
  return (
    <aside className="w-72 bg-gray-50 dark:bg-neutral-900 shadow rounded p-6"> 
    <h3 className="text-left font-bold">Add new</h3>
    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input-control" 
        required
        placeholder="Name"
        value={formData.name}
        name="name"
        onChange={handleInputChange}
        />
      <textarea 
        type="text" 
        className="input-control resize-none"
        required
        placeholder="Activity"
        value={formData.activity}
        name="activity"
        onChange={handleInputChange}
         />
         <label className="text-sm">
          Start Date
      <input 
        type="date" 
        className="input-control w-full" 
        required
        placeholder="Start Date"
        value={formData.startDate}
        name="startDate"
        onChange={handleInputChange}
      />
        </label>
        <label className="text-sm">
          End date
      <input 
        type="date" 
        className="input-control w-full" 
        required
        placeholder="End Date"
        value={formData.endDate}
        name="endDate"
        onChange={handleInputChange}
      />
      </label>
      <button className="bg-teal-500 text-gray-50 dark:bg-teal-300 hover:bg-teal-400
      dark:text-gray-900 p-4 rounded-md font-semibold uppercase tracking-wider
      dark:hover:bg-teal-200 transition-colors">
        Add
      </button>
    </form>
  </aside>
  )
}

export default AddNew