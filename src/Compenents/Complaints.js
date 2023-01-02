import React from 'react'

function Complaints({role}) {
  return (
    <div className="overflow-x-auto mt-32 m-10 min-h-1/2">
    <h4 className="font-medium text-2xl text-gray-700 mb-4 text-center ">All Complaints</h4>
    <table className="w-full text-left table-auto border-gray-400 border ">
      <thead>
        <tr>
          <th className="sticky top-0 bg-gray-200 font-bold p-4">Sno</th>
          <th className="sticky top-0 bg-gray-200 font-bold p-4">Complaint ID</th>
          <th className="sticky top-0 bg-gray-200 font-bold p-4">Complaint Subject</th>
          {role === 'std' && (
            <th className="sticky top-0 bg-gray-200 font-bold p-4">Status</th>
          )}
          {role === 'hod' && (
            <th className="sticky top-0 bg-gray-200 font-bold p-4">View</th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border-t border-gray-400 font-semibold">1</td>
          <td className="p-4 border-t border-gray-400 font-semibold">123456</td>
          <td className="p-4 border-t border-gray-400 font-semibold">Broken toilet in dorm room</td>
          {role === 'std' && (
            <td className="p-4 border-t border-gray-400 font-semibold">Pending</td>
          )}
          {role === 'hod' && (
            <td className="p-4 border-t border-gray-400 font-semibold">
              <a href="#" className="text-blue-500 hover:underline">View complaint</a>
            </td>
          )}
        </tr>
        <tr>
          <td className="p-4 border-t border-gray-400 font-semibold">2</td>
          <td className="p-4 border-t border-gray-400 font-semibold">234567</td>
          <td className="p-4 border-t border-gray-400 font-semibold">Loud noise in hallway</td>
          {role === 'std' && (
            <td className="p-4 border-t border-gray-400 font-semibold">Resolved</td>
          )}
          {role === 'hod' && (
            <td className="p-4 border-t border-gray-400 font-semibold">
              <a href="#" className="text-blue-500 hover:underline">View complaint</a>
            </td>)
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Complaints