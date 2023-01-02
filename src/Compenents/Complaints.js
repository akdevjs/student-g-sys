import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { connect } from "react-redux";
function Complaints({ role, user }) {
  const [complains, setComplains] = useState([]);
  const setcomplaints = async () => {
    let complaints = [];
    const q = query(collection(db, "complains"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().registrationNumber === user.RegistrationNumber) {
        complaints.push({ ...doc.data(), id: doc.id });
      }
      console.log(doc.id, " => ", doc.data().registrationNumber);
    });
    setComplains(complaints);
  };

  useEffect(() => {
    setcomplaints();
  }, []);
  return (
    <div className="overflow-x-auto mt-32 m-10 min-h-1/2">
      <h4 className="font-medium text-2xl text-gray-700 mb-4 text-center ">
        All Complaints
      </h4>
      <table className="w-full text-left table-auto border-gray-400 border ">
        <thead>
          <tr>
            <th className="sticky top-0 bg-gray-200 font-bold p-4">Sno</th>
            <th className="sticky top-0 bg-gray-200 font-bold p-4">
              Complaint ID
            </th>
            <th className="sticky top-0 bg-gray-200 font-bold p-4">Date</th>

            <th className="sticky top-0 bg-gray-200 font-bold p-4">
              Complaint Subject
            </th>

            <th className="sticky top-0 bg-gray-200 font-bold p-4">Status</th>

            {role === "hod" && (
              <th className="sticky top-0 bg-gray-200 font-bold p-4">View</th>
            )}
          </tr>
        </thead>
        <tbody>
          {complains.length === 0 ? (
            <tr>
              <td colspan="3" className="p-4   font-semibold ">
                No Complaint Found
              </td>
            </tr>
          ) : (
            complains.map((complain, index) => (
              <tr>
                <td className="p-4 border-t border-gray-400 font-semibold">
                  {index + 1}
                </td>
                <td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.id}
                </td>
                <td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.date}
                </td>
                <td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.subject}
                </td>

                <td className="p-4 border-t border-gray-400 font-semibold">
                  {complain.status}
                </td>

                {role === "hod" && (
                  <td className="p-4 border-t border-gray-400 font-semibold">
                    <a href="#" className="text-blue-500 hover:underline">
                      View complaint
                    </a>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(Complaints);
