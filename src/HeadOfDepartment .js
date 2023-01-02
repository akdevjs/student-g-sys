import React, { useState } from 'react';

const StudentGrievanceForm = () => {
  const name = 'John Doe';
  const registrationNumber = '123456';
  const department = 'Computer Science';
  const [grievance, setGrievance] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            Student Grievance Form
          </h1>
          <p className="text-gray-700 font-medium mb-4">
            Name: {name}
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Registration Number: {registrationNumber}
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Department: {department}
          </p>
        </div>
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grievance"
          >
            Grievance
          </label>
          <textarea
            className="appearance-none resize-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border focus:border-gray-500"
            id="grievance"
            rows="8"
            value={grievance}
            onChange={(event) => setGrievance(event.target.value)}
          ></textarea>
        </div>
        <div className="w-full px-3 mb-6">
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Submit
  </button>
</div>
</div>

</form>
);
};

export default StudentGrievanceForm;