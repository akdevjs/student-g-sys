import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-wrap px-2">
        <div className="w-full md:w-1/4 text-center md:text-left py-2">
          <h5 className="uppercase font-semibold tracking-wide">Contact</h5>
          <p className="mt-3">
          University of Enigneering &<br />
     Technology Taxila, 47050<br />
            
            Phone: +92 51-9047-400<br />
            Fax: +92 51-9047-420
          </p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left py-2">
          <h5 className="uppercase font-semibold tracking-wide">Quick Links</h5>
          <ul className="mt-3">
            <li><a className="text-gray-400 hover:text-white" href="#">Admissions</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Academics</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Campus Life</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Athletics</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left py-2">
          <h5 className="uppercase font-semibold tracking-wide">Social</h5>
          <ul className="mt-3">
            <li><a className="text-gray-400 hover:text-white" href="#">Facebook</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Twitter</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">Instagram</a></li>
            <li><a className="text-gray-400 hover:text-white" href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left py-2">
          <h5 className="uppercase font-semibold tracking-wide">About UET, Texla</h5>
          <p className="mt-3">
          With phenomenal increase in students' enrollment in 1970's, a plan to establish additional campuses of the University of Engineering and Technology Lahore was conceived. As a result of that, the University College of Engineering Taxila was established.
          </p>
        </div>
      </div>
      <hr className="my-4" />
<p className="text-center text-gray-500 py-2">Copyright &copy; {new Date().getFullYear()} UET, Texla . All rights reserved.</p>
    </footer>
  );
}

export default Footer;
