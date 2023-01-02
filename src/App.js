import logo from './logo.svg';
import './App.css';
import StudentLogin from './StudentLogin';
import StudentGrievance from './StudentGrievance';
import HeadOfDepartment from './HeadOfDepartment ';
import LoadingScreen from './LoadingScreen';
import Header from './Compenents/Header';
import Form from './Compenents/Form';
import Student from './Compenents/Student';
import Footer from './Compenents/Footer';
import Complaints from './Compenents/Complaints';
import Complain from './Compenents/Complain';

function App() {
  return (
    <div className="flex flex-col">
     <Header/>
     {/* <Student/> */}
     {/* <Complaints role = "hod"/> */}
     <Complain/>
     <Footer/>
      {/* <Form/> */}
     {/* Completed the Form */}
     {/* <StudentGrievance/> */}
     {/* <StudentLogin/> */}
     {/* <HeadOfDepartment/> */}
     {/* <LoadingScreen/> */}


    </div>
  );
}

export default App;
