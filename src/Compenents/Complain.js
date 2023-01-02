import React from "react";

function Complain() {
  const studentName = "John Smith";
  const department = "Computer Science";
  const regNo = "123456";
  const semester = "4";
  const subject = "Broken toilet in dorm room";
  const complaint =
    "I am writing to bring to your attention an issue that I have been experiencing in my dorm room. There is a toilet that has been broken for several weeks, and despite my repeated requests for it to be fixed, it remains in a state of disrepair.This is causing a great deal of inconvenience for me and my roommates, as we are now forced to use the toilet in another part of the dormitory. This requires us to walk a significant distance every time we need to use the bathroom, which can be particularly difficult if we are in a rush or if the weather is inclement.I understand that maintenance issues can sometimes take time to resolve, but the length of time that this toilet has been broken is unacceptable. I would greatly appreciate it if you could expedite the repair process and have the toilet fixed as soon as possible."
    
  return (
    <div className="flex items-center justify-center min-h-1/2">
    <div className="max-w-7xl my-4 mx-auto py-32  px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mt-4">
  <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Complaint #112233</h2>
</div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <div className="font-bold text-xl mb-2">
            Complaint from {studentName}
          </div>
          <p className="text-gray-700 text-base">
            Department: {department}
            <br />
            Reg. No: {regNo}
            <br />
            Semester: {semester}
          </p>
          <div className="font-bold text-xl mt-5 mb-2">Subject: {subject}</div>
          <p className="text-gray-700 text-base">{complaint}</p>
          <div className="mt-4 flex justify-end">
    <button className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800">
      Reject
    </button>
    <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-full ml-4 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
      Resolve
    </button>
  </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Complain;
