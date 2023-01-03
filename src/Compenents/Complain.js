import React, { useEffect, useState } from "react";
import { doc, getDoc,  setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CircleLoader } from 'react-spinners';
import { db } from "../firebase";
function Complain() {
  const { id } = useParams();
  console.log(id);
  const [complain, setComplain] = useState({});
  const [loading, setLoading] = useState(false);

  // functions
  const getComplain = async () => {
    setLoading(true)
    const docRef = doc(db, "complains", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setComplain({ ...docSnap.data(), id: docSnap.id });
      console.log("Document data:", docSnap.data());
      setLoading(false)
    } else {
      console.log("No such document!");
    }
  };
  const handleRejectResolve = async(status)=>{
    setLoading(true)
    await setDoc(doc(db, "complains", id), {...complain, status
    });
    getComplain();

  }
  useEffect(() => {
    getComplain();
  }, []);
  return (
    <>
    
    <div className={`flex items-center ${loading?"mt-36":"mt-0"}  mt-24 justify-center  min-h-1/2`}>
    {loading  ?
    <CircleLoader  size={150} color="#3498db"/>
    :
      <div className="max-w-7xl my-4 mx-auto py-32  px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mt-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-800 tracking-tight">
            Complaint #{complain.id}
          </h2>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <div className="font-bold text-xl mb-2">
              Complaint from {complain.name}
            </div>
            <p className="text-gray-700 text-base">
              Department: {complain.department}
              <br />
              Reg. No: {complain.registrationNumber}
              <br />
              Date: {complain.date}
              <br />
              Semester: {complain.semester}
            </p>
            <div className="font-bold text-xl mt-5 mb-2">
              Subject: {complain.subject}
            </div>
            <p className="text-gray-700 text-base">{complain.complain}</p>
            {complain.status === "Pending"?
            <div className="mt-4 flex justify-end">
              <button onClick={()=>handleRejectResolve("Rejected")} className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800">
                Reject
              </button>
              <button onClick={()=>handleRejectResolve("Resolved")} className="px-4 py-2 font-bold text-white bg-green-500 rounded-full ml-4 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Resolve
              </button>
            </div>:
            <div className={`font-bold text-xl mt-5 mb-2 text-right `}>
            Status: <span className={`font-normal ${complain.status === "Rejected"? "text-red-500" :"text-green-500 " }`}>{complain.status}</span>
          </div>
            }
          </div>
        </div>
      </div>
    }
    </div>
    </>
  );
}

export default Complain;
