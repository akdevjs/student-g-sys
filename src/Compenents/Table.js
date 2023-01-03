import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc 
} from "firebase/firestore";
import {
  Table as Tbl,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";

function Table({ role }) {
    const location = useLocation()
  const [data, setData] = useState([]);
  const [opt, setOpt] = useState({ heading: "", buttontxt: "", status: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
const [itemToDelete, setItemToDelete] = useState(null);


  const getUser = async () => {
    // setLoading(true);
    const q = query(collection(db, role));

    const querySnapshot = await getDocs(q);
    let fetchedUsers = [];
    querySnapshot.forEach((doc) => {
      fetchedUsers.push({ ...doc.data(), id: doc.id });
    });
    setData(fetchedUsers);
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.target);
    let newData;
    if (role === "std") {
      newData = {
        Name: formData.get("name"),
        RegistrationNumber: formData.get("registrationNumber"),
        Department: formData.get("department"),
        Password: formData.get("password"),
        Semester: formData.get("semester"),
      };
    } else {
      newData = {
        Name: formData.get("name"),
        EmployeeNumber: formData.get("registrationNumber"),
        Department: formData.get("department"),
        Password: formData.get("password"),
      };
    }
    const docRef = await addDoc(collection(db, role), newData);
    console.log("Document written with ID: ", docRef.id);
    setLoading(false);
    setData([...data, {...newData, id:docRef.id }]);
  };

  const handleEdit = async (index, event, id) => {
    setLoading(true);
    event.preventDefault();
    console.log(id);
    const formData = new FormData(event.target);
    let newData;
    if (role === "std") {
      newData = {
        Name: formData.get("name"),
        RegistrationNumber: formData.get("registrationNumber"),
        Department: formData.get("department"),
        Password: formData.get("password"),
        Semester: formData.get("semester"),
      };
    } else {
      newData = {
        Name: formData.get("name"),
        EmployeeNumber: formData.get("registrationNumber"),
        Department: formData.get("department"),
        Password: formData.get("password"),
      };
    }
    await setDoc(doc(db, role, id), newData);
    const newArray = [...data];
    newArray[index] = { ...newData, id };
    setData(newArray);
    setLoading(false);
    setIsModalOpen(false);
  };
  

  const openModal = (index, status) => {
    console.log(index);
    if (status === "add") {
      setCurrentIndex(-1);
      setOpt({
        heading: `Add new ${role === "std" ? "student" : "HOD"}`,
        buttontxt: "Add",
        status: "add",
      });
    } else {
      setCurrentIndex(index);
      setOpt({ heading: "Edit", buttontxt: "Save", status: "edit" });
    }
    setIsModalOpen(true);
  };
 

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const DelOpenModal = (item) => {
    
    setIsDelModalOpen(true);
    setItemToDelete(item);
    console.log(item)
  };
  
  const DelCloseModal = () => {
    setIsDelModalOpen(false);
    setItemToDelete(null);
  };
  
  const DelConfirmDelete = async(item) => {
    setDelLoading(true)
    await deleteDoc(doc(db, role, itemToDelete.id));
    setData(data.filter((item) => item !== itemToDelete));
    setDelLoading(false)
    DelCloseModal();
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getUser();
  }, [location]);
  return (
    <>
      <div className="mx-4 mt-24 min-h-1/2">
      <h4 className="font-medium text-2xl text-gray-700 mb-4 text-center ">
        All {role === "std"?"Students":"HOD's"}
      </h4>
        <Tbl className="w-full text-left table-auto border-gray-400 border">
          <Thead>
            <Tr className="bg-gray-200">
              <Th className="px-4 py-2">Name</Th>
              <Th className="px-4 py-2">
                {role === "std" ? "Registration Number" : "Employee Number"}
              </Th>
              <Th className="px-4 py-2">Department</Th>
              {role === "std" && <Th className="px-4 py-2">Semester</Th>}
              <Th className="px-4 py-2">Password</Th>
              <Th className="px-4 py-2">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr className="bg-white" key={item?.RegistrationNumber}>
                <Td className="px-4 py-2">{item.Name}</Td>
                <Td className="px-4 py-2">
                  {role === "std"
                    ? item.RegistrationNumber
                    : item.EmployeeNumber}
                </Td>
                <Td className="px-4 py-2">{item.Department}</Td>
                {role === "std" && (
                  <Td className="px-4 py-2">{item.Semester}</Td>
                )}
                <Td className="px-4 py-2">{item.Password}</Td>
                <Td className="px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => openModal(index, "edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        DelOpenModal(item)
                      
                    }}
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Tbl>
        <div
          onClick={() => openModal(0, "add")}
          className="w-full my-1 p-2 cursor-pointer hover:bg-gray-100 transition-colors bg-gray-200 text-center text-base border-gray-400 border"
        >
          Add New {role === "std" ? "Student" : "HOD"}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <form
              onSubmit={(event) => {
                opt.status === "edit"
                  ? handleEdit(currentIndex, event, data[currentIndex]?.id)
                  : handleSubmit(event);
              }}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {opt.heading}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        <b>Note: </b> double check the info before adding it or updating it
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Name:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={data[currentIndex]?.Name}
                  />
                  <label
                    htmlFor="registrationNumber"
                    className="block font-bold mb-2"
                  >
                    {role === "std"
                      ? "Registration Number:"
                      : "Employee Number:"}
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    name="registrationNumber"
                    id="registrationNumber"
                    defaultValue={
                      role === "std"
                        ? data[currentIndex]?.RegistrationNumber
                        : data[currentIndex]?.EmployeeNumber
                    }
                  />
                  <label htmlFor="department" className="block font-bold mb-2">
                    Department:
                  </label>
                  <select
                    className="border rounded w-full py-2 px-3"
                    name="department"
                    id="department"
                    defaultValue={data[currentIndex]?.Department}
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Computer Engineering">
                      Computer Engineering
                    </option>
                  </select>
                  {role === "std" && (
                    <>
                      <label
                        htmlFor="password"
                        className="block font-bold mb-2"
                      >
                        Semester:
                      </label>
                      <select
                        className="border rounded w-full py-2 px-3"
                        name="semester"
                        id="semester"
                        defaultValue={data[currentIndex]?.Semester}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </>
                  )}
                  <label htmlFor="password" className="block font-bold mb-2">
                    Password:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    name="password"
                    id="password"
                    defaultValue={data[currentIndex]?.Password}
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="loading-animation">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      opt.buttontxt
                    )}
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
   <div className={`modal ${isDelModalOpen  ? 'block' : 'hidden'}`}>
  <div className="modal-overlay modal-parent fixed top-0 left-0 w-full h-full flex items-center justify-center">
  <div className="modal-container opacity-100 p-5 bg-white ">
    <div className="modal-content w-full max-w-lg">
      <div className="modal-header border-b pb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Confirm Delete</h2>
      
      </div>
      <div className="modal-body p-4">
        <p className="mb-4 text-lg leading-relaxed">
          Are you sure you want to delete this {role === "std"?"Student":"HOD"}?
        </p>
      </div>
      <div className="modal-footer border-t pt-4 flex justify-end items-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => DelConfirmDelete()}
        >
          {delLoading? "Deleting ...":"Delete"}
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => DelCloseModal()}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  </div>
</div>
    </>
  );
}

export default Table;
