import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Header from "./Compenents/Header";
import Student from "./Compenents/Student";
import Footer from "./Compenents/Footer";
import { connect } from "react-redux";

import Complaints from "./Compenents/Complaints";
import Complain from "./Compenents/Complain";

function App({user}) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "student",
      element: !user ? (
        <>
        <Header role="student" />
        <div className="h-screen flex justify-center items-center">
          <div className="p-8 shadow-md">
            <h1 className="text-3xl font-extrabold">
              Page not Found: Error 404
            </h1>
          </div>
        </div>
        </>
      ) : (
        <>
          <Header role="std" />
          <Student />
          <Footer />
        </>
      ),
    },
    {
      path: "/student/complains",
      element: (
        <>
        <Header role="std"/>
        <Complaints role = "std"/>
        <Footer/>
        </>
      ),
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <div className="flex flex-col">
    //  <Header/>
    //  {/* <Student/> */}
    //  {/* <Complaints role = "hod"/> */}
    //  <Complain/>
    //  <Footer/>
    //   {/* <Form/> */}
    //  {/* Completed the Form */}
    //  {/* <StudentGrievance/> */}
    //  {/* <StudentLogin/> */}
    //  {/* <HeadOfDepartment/> */}
    //  {/* <LoadingScreen/> */}

    // </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
});

export default connect(mapStateToProps, dispatchStateToProps)(App);
