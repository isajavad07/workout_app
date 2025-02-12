import React from 'react'
import { Link } from 'react-router'

const Beach = () => {

  return (
    <>
      <h1 className="text-4xl font-bold my-4">Beach</h1>
      <Link to="/plans" className="text-blue-500 hover:underline">Back to Plan Selector</Link>
      <br />
      <div className='container mx-auto my-4 p-4 bg-white rounded shadow'>
        <form className='form-control space-y-4'>
          <div className="flex items-center">
            <input type="checkbox" name="push" id="push" className="mr-2"/>
            <label htmlFor="push">Pushups</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="core" id="core" className="mr-2"/>
            <label htmlFor="core">Stair Climbs</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="plank" id="plank" className="mr-2"/>
            <label htmlFor="plank">Plank</label>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-900 text-white rounded hover:bg-green-600">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Beach
