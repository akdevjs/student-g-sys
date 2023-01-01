import React, { useState, useEffect } from 'react';

const HeadOfDepartment = () => {
  const previousComplaints = [
    { id: 1, description: 'The food in the cafeteria is not up to standard.' },
    { id: 2, description: 'The classroom chairs are uncomfortable.' },
    { id: 3, description: 'There is a lack of parking spaces on campus.' }
  ];
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    // fetch the list of grievances from the server
    // and update the state with the response data
  }, []);

  const handleResolve = (grievanceId) => {
    // send a request to the server to mark the grievance as resolved
    // and update the state with the updated list of grievances
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Grievances</h2>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Grievance</th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Student</th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Status</th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((grievance) => (
            <tr key={grievance.id}>
              <td className="p-2 border-t border-gray-400">{grievance.description}</td>
              <td className="p-2 border-t border-gray-400">{grievance.student}</td>
              <td className="p-2 border-t border-gray-400">{grievance.status}</td>
              <td className="p-2 border-t border-gray-400">
                {grievance.status === 'pending' && (
                  <button
                    onClick={() => handleResolve(grievance.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Previous Complaints</h3>
      {previousComplaints.map(complaint => (
        <div key={complaint.id} className="mb-4">
          <p className="text-gray-700 mb-2">{complaint.description}</p>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
              onClick={() => console.log(complaint.id)}
            >
              Resolve
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              onClick={() => console.log(complaint.id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HeadOfDepartment;
