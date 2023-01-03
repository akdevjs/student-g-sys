import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link } from "react-router-dom"; 
import { db } from "../firebase";
import { connect } from "react-redux";
function Complaints({ role, user }) {
  const [complains, setComplains] = useState([]);
  const [filter, setFilter] = useState("All");

  const filters = ["Resolved", "Pending", "Rejected", "All"]
  const setcomplaints = async () => {
    let complaints = [];
    const q = query(collection(db, "complains"));

    const querySnapshot = await getDocs(q);
    if(role === "std"){
      querySnapshot.forEach((doc) => {
        if (doc.data().registrationNumber === user.RegistrationNumber) {
          complaints.push({ ...doc.data(), id: doc.id });
        }
        console.log(doc.id, " => ", doc.data().registrationNumber);
      });
      setComplains(complaints);
    } else if (role === "hod"){
      querySnapshot.forEach((doc) => {
        if (doc.data().department === user.Department) {
          complaints.push({ ...doc.data(), id: doc.id });
        }
        console.log(doc.id, " => ", doc.data().registrationNumber);
      });
      setComplains(complaints);
    } else{
      querySnapshot.forEach((doc) => {
          complaints.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data().registrationNumber);
      });
      setComplains(complaints);
    }
   
  };
const handleFilter = (fil)=>{
  setFilter(fil)

}
  useEffect(() => {
    setcomplaints();
  }, []);
  return (
    <div className="overflow-x-auto mt-32 m-10 min-h-1/2">
      <h4 className="font-medium text-2xl text-gray-700 mb-4 text-center ">
        All Complaints
      </h4>
      {
        role !== "std" && (
          <div className=" mb-6">
            <h4 className="font-medium text-xl text-gray-700 mb-4 text-center ">
        Filters
      </h4>
      <div className="flex space-x-3 w-fit px-2   mx-auto">
              {
                filters.map((fil)=>(
                  <div className={`font-semibold cursor-pointer  ${fil === filter? "bg-black text-white":"bg-white text-black hover:border-gray-600 hover:text-gray-600"} border-black p-3 border`}
                  onClick={()=>handleFilter(fil)}
                  >
                    {fil}
                  </div>
                ))
              }
              </div>
          </div>

        )
      }
      <Table className="w-full text-left table-auto border-gray-400 border ">
        <Thead>
          <Tr>
            <Th className="sticky top-0 bg-gray-200 font-extrabold p-4">Sno</Th>
            <Th className="sticky top-0 bg-gray-200 font-bold p-4">
              Complaint ID
            </Th>
            <Th className="sticky top-0 bg-gray-200 font-bold p-4">Date</Th>

            <Th className="sticky top-0 bg-gray-200 font-bold p-4">
              Complaint Subject
            </Th>

            <Th className="sticky top-0 bg-gray-200 font-bold p-4">Status</Th>

            {role === "hod" && (
              <Th className="sticky top-0 bg-gray-200 font-bold p-4">View</Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {complains.length === 0 ? (
            <Tr>
              <Td colspan="3" className="p-4   font-semibold ">
                No Complaint Found
              </Td>
            </Tr>
          ) : (
            complains.map((complain, index) => {
              if(filter === "All" || filter === complain.status)
              return (
              <Tr>
                <Td className="p-4 border-t border-gray-400 font-semibold">
                  {index + 1}
                </Td>
                <Td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.id}
                </Td>
                <Td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.date}
                </Td>
                <Td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.subject}
                </Td>

                <Td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.status}
                </Td>

                {role === "hod" && (
                  <Td className="p-4 border-t border-gray-400 font-semibold">
                    <Link to={`/hod/${complain.id}`} className="text-blue-500 hover:underline">
                      View complaint
                    </Link>
                  </Td>
                )}
              </Tr>
            )})
          )}
        </Tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(Complaints);
