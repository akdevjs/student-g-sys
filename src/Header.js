import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <header className="bg-white fixed w-full z-10 top-0 shadow">
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    //     <div className="pl-4 flex items-center">
    //       <a className="text-gray-800 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
    //         Institute of Space Technology, Islamabad
    //       </a>
    //     </div>

    //     <div className="block lg:hidden pr-4">
    //       <button
    //         onClick={toggleMenu}
    //         className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
    //       >
    //         <FiMenu className="w-4 h-4" />
    //       </button>
    //     </div>

    //     <div
    //       className={`${
    //         isMenuOpen ? 'block' : 'hidden'
    //       } w-full lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
    //     >
    //       <ul className="list-reset lg:flex justify-end flex-1 items-center">
    //         <li className="mr-3">
    //           <a
    //             className="inline-block py-2 px-4 text-black font-bold no-underline"
    //             href="#"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li className="mr-3">
    //           <a
    //             className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
    //             href="#"
    //           >
    //             Student Grievance
    //           </a>
    //         </li>
    //         <li className="mr-3">
    //           <a
    //             className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
    //             href="#"
    //           >
    //             Head of Department
    //           </a>
    //         </li>
    //         <li className="mr-3">
    //           <a
    //             className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
    //             href="#"
    //           >
    //             Admin
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
    <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-semibold">
        Institute of Space Technology, Islamabad
      </div>
      <div class="flex items-center">
        <a href="#" class="px-3 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-800">
          Student Grievance
        </a>
        <a href="#" class="px-3 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-800">
          Head of Department
        </a>
        <a href="#" class="px-3 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-800">
          Admin
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center mt-8">
      <div class="text-3xl font-semibold mb-4">Student Grievance System</div>
      <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Registration Number"
            aria-label="Registration Number"
          />
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div class="flex items-center mt-4">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Sign In
          </button>
        </div>
        </form>
        </div>

        </div>

  
    )
        }

export default Header;
