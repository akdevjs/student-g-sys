import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setUserAPI } from "../actions";
const Header = ({role, user, setUserAPI}) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const Logout = ()=>{
    setUserAPI(null)
  }
  console.log(location)
  return (
    <>
   
   
   
      <header className="md:hidden flex fixed top-0  flex-row md:space-y-0 border  items-center justify-between py-4 px-8 bg-white shadow-lg  w-full  z-50">
        <div class="flex  md:flex-row flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/UET_Taxila_logo.svg/1200px-UET_Taxila_logo.svg.png"
            alt="UET Taxila logo"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg font-semibold ml-4 sm:block hidden">
          Student Grievance System, UET Texla
        </p>
        {user &&
        <div onClick={toggleMenu}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        }
      </header>
      <header
        class={`flex transition-transform ${
          !isMenuOpen ? "-translate-x-full" : "-translate-x-0"
        } md:-translate-x-0 md:flex-row md:space-y-0 space-y-3 flex-col items-center justify-between py-4 px-8 bg-white shadow-lg  w-full fixed top-20 md:top-0 z-50`}
      >
        <div class="flex  md:flex-row flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/UET_Taxila_logo.svg/1200px-UET_Taxila_logo.svg.png"
            alt="UET Taxila logo"
            class="w-12 h-12 md:block hidden"
          />
          <p class="text-base font-semibold ml-4 md:block hidden">
            Student Grievance System
           
          </p>
        </div>
        {user &&
        <>
       
        <hr className="md:hidden block w-full bg-gray-700" />
        {role === "std" &&
        <div>
        <Link to="/student" class={`bg-white ${location.pathname ==="/student" && "underline" } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full`}>
         Home
        </Link>
        <Link to="/student/complains" class={`bg-white ${location.pathname ==="/student/complains" && "underline" } hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full`}>
          Previous Complaints
        </Link>
       
        </div>
        }
        <hr className="md:hidden block w-full bg-gray-700" />
        <div class="flex justify-between   md:w-fit w-full items-center">
          <div className="flex">
            <div class="relative rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile picture"
                class="w-10 h-10"
              />
            </div>
            <div>
              <p class="text-sm  ml-4">
                <span class="font-semibold ">Welcome,</span> {user.Name}
              </p>
              <p class="text-xs  text-gray-700 ml-4">{role === 'std'? user.RegistrationNumber: role === 'hod'? user.EmployeeNumber:user.username}</p>
            </div>
          </div>
          <Link to="/" onClick={Logout} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
            Log Out
          </Link>
        </div>
        </>
        }
      </header>
      </>
    
  );
};

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  setUserAPI: (user) => dispatch(setUserAPI(user)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);
