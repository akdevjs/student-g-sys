import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { db } from "./firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { setUserAPI } from "./actions/index";
const LoginForm = ({setUser}) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("std");
  const [credential, setCredential] = useState("Registration Number")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>{
    setSelectedOption(e.target.value)
    if(e.target.value === "hod"){
      setCredential("Employee Number");
    } else if (e.target.value === "std"){
      setCredential("Registration Number");

    }else{
      setCredential("Username");
    }
    console.log(e.target.value)

  }
  const Login = async(e)=>{
    e.preventDefault();
    setLoading(true)
    const q = query(collection(db, selectedOption));

const querySnapshot = await getDocs(q);
let fetchedUsers = []
querySnapshot.forEach((doc) => {
  fetchedUsers.push({...doc.data(), id:doc.id})
});
console.log(fetchedUsers)
if(selectedOption === "std"){
let flag = false
let userObj = null; 
fetchedUsers.forEach((user)=>{
  if(user.RegistrationNumber === username && user.Password === password){
    flag = true
    userObj = user;
  }
})
if(flag){
  setUser(userObj)
  // Uet-19S-Bscs-13
  console.log(userObj)
  navigate('/student')
}
else{
  console.log("wrong fuck")
}
}
else if(selectedOption === "hod"){
  let flag = false
  let userObj = null; 
  fetchedUsers.forEach((user)=>{
    if(user.EmployeeNumber === username && user.Password === password){
      flag = true
      userObj = user;
    }
  })
  if(flag){
    setUser(userObj)
    // Uet-19S-Bscs-13
    console.log(userObj)
    // navigate('/student')
  }
  else{
    console.log("wrong fuck")
  }
  }
setLoading(false)
  }
  return (
    <>
      <div class="lg:flex">
        <div class="lg:w-1/2 xl:max-w-screen-sm">
          <div class="py-12 bg-blue-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div class="cursor-pointer flex items-center">
              <div></div>
              <div class="text-2xl text-blue-800 tracking-wide ml-2 font-semibold">
                Student Grievance System UET, Texla
              </div>
            </div>
          </div>
          <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              class="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold"
            >
              Log in
            </h2>
            <div class="mt-12">
              <form onSubmit={Login}>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Login as
                </div>
                <div className="flex space-x-2 text-sm mt-2  text-gray-700 ">
                  <div>
                    <label className="space-x-2 flex items-center">
                      <input
                        type="radio"
                        value="std"
                        checked={selectedOption === "std"}
                        onChange={handleChange}
                        
                      />
                      <span>Student</span>
                    </label>
                  </div>
                  <div>
                    <label className="space-x-2 flex items-center">
                      <input
                        type="radio"
                        value="hod"
                        checked={selectedOption === "hod"}
                        onChange={handleChange}
                      />
                      <span>Head of Department</span>
                    </label>
                  </div>
                  <div>
                    <label className="space-x-2 flex items-center">
                      <input
                        type="radio"
                        value="admin"
                        checked={selectedOption === "admin"}
                        onChange={handleChange}
                      />
                      <span>Admin</span>
                    </label>
                  </div>
                </div>
                <div class="mt-8">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                   {credential}
                  </div>
                  <input
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    value = {username}
                    onChange = {(e)=> setUsername(e.target.value)}
                    placeholder={selectedOption === "admin"?"abc123":selectedOption === "hod"?"xxx-Emp-xxx":"Uet-xxx-Bscs-xx"}
                  />
                </div>
                <div class="mt-8">
                  <div class="flex justify-between items-center">
                    <div class="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                   
                  </div>
                  <input
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    value = {password}
                    onChange = {(e)=> setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <div class="mt-10">
                
  {loading ? (
     <div
     className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg"
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
    className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg"
  >
    Log In
</button>
  )}
                </div>
              </form>
            
            </div>
          </div>
        </div>
        <div class="relative hidden object-cover lg:flex items-center justify-center bg-blue-100 flex-1 h-screen">
          <img
            src="imgs/main_bg.jpg"
            class="hidden object-cover lg:flex items-center justify-center opacity-50 w-full h-screen"
          />
         
        </div>
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAPI(user)),
});

export default connect(mapStateToProps, dispatchStateToProps)(LoginForm);
