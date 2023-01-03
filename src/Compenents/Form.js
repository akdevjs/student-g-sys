import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { connect } from "react-redux";
const Form = ({ user }) => {
  const [grievance, setGrievance] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(grievance.length)
    if( grievance.length < 50 ){
      console.log("here")

      addToast("Grievance Must be more then 50 characters", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }
    else if( subject.length < 10 ){
      console.log("here")
      addToast("Subject Must be more then 10 characters", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }
    else{
    const docRef = await addDoc(collection(db, "complains"), {
      name: user.Name,
      registrationNumber: user.RegistrationNumber,
      department: user.Department,
      semester:user.Semester,
      subject,
      complain: grievance,
      date: getDate(),
      status:"Pending"
    });
    setGrievance("");
    setSubject("");
    setLoading(false);
    addToast("Grievance submitted successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full border shadow-md   p-5 ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6">
          <h1 className="text-2xl   text-center uppercase font-bold mb-2 text-gray-800">
            Student Grievance Form
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <p className="text-gray-700 font-medium mb-1">
              <span className="font-bold">Name:</span> {user.Name}
            </p>
            <p className="text-gray-700 font-medium md:text-right mb-1">
              <span className="font-bold">Registration Number:</span>{" "}
              {user.RegistrationNumber}
            </p>
            <p className="text-gray-700  font-medium mb-1">
              <span className="font-bold">Department:</span> {user.Department}
            </p>
            <p className="text-gray-700 md:text-right font-medium mb-1">
              <span className="font-bold">Semester:</span> {user.Semester}
            </p>
          </div>
        </div>
        <div className="w-full px-3 mb-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
            htmlFor="grievance"
          >
            Subject
          </label>
          <input
            className="appearance-none resize-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white border border-gray-200"
            id="grievance"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>
        <div className="w-full px-3 mb-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grievance"
          >
            Grievance
          </label>
          <textarea
            className="appearance-none resize-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  border border-gray-200"
            id="grievance"
            rows="8"
            value={grievance}
            onChange={(event) => setGrievance(event.target.value)}
          ></textarea>
        </div>
        <div className="w-full px-3 mb-3">
          {loading ? (
            <div
              type="submit"
              className="bg-blue-500 w-28 h-8 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              <div className="loading-animation">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 w-28 h-8 flex items-center justify-center hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <h4 className="font-medium text-gray-700">Note:</h4>
      <ul className="list-inside list-disc text-gray-700 mb-6">
        <li>
          Clearly describe the issue you are experiencing and how it is
          affecting you.
        </li>
        <li>
          Provide any relevant dates, times, and details of the situation.
        </li>
        <li>
          Mention any actions you have already taken to resolve the issue, and
          include the responses you received.
        </li>
        <li>Be respectful and professional in your language and tone.</li>
        <li>
          Make sure to specify how you would like the issue to be resolved.
        </li>
      </ul>
      <h4 className="font-medium text-red-700">Warning:</h4>
      <ul className="list-inside list-disc text-red-700">
        <li>
          Make sure that the complaint you are registering is valid and relevant
          to the issue you are experiencing.
        </li>
        <li>
          Inaccurate or inappropriate complaints may result in delayed
          resolution or disciplinary action.
        </li>
        <li>
          Double-check all of the information you provide to ensure that it is
          accurate and complete.
        </li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(Form);
