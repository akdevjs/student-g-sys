import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Compenents/Login";
import Header from "./Compenents/Header";
import Student from "./Compenents/Student";
import Footer from "./Compenents/Footer";
import Table from "./Compenents/Table";
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
    {
      path: "/hod",
      element: (
        <>
        <Header role="hod"/>
        <Complaints role = "hod"/>
        <Footer/>
        </>
      ),
    },
    {
      path: "/hod/:id",
      element: (
        <>
        <Header role="hod"/>
        <Complain/>
        <Footer/>
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
        <Header role="admin"/>
        <Complaints role="admin"/>
        <Footer/>
        </>
      ),
    },
    {
      path: "/admin/student",
      element: (
        <>
        <Header role="admin"/>
        <Table role="std"/>
        <Footer/>
        </>
      ),
    },
    {
      path: "/admin/hod",
      element: (
        <>
        <Header role="admin"/>
        <Table role="hod"/>
        <Footer/>
        </>
      ),
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
});

export default connect(mapStateToProps, dispatchStateToProps)(App);
