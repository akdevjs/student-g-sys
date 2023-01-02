import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-wrap px-2">
        <div className="w-full md:w-1/4 text-center md:text-left py-2">
          <h5 className="uppercase font-semibold tracking-wide">Contact</h5>
          <p className="mt-3">
            123 Main Street<br />
            Anytown, USA 12345<br />
            Phone: (123) 456-7890<br />
            Email: info@university.edu
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
          <h5 className="uppercase font-semibold tracking-wide">About</h5>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar magna enim, eu faucibus felis aliquam eget.
          </p>
        </div>
      </div>
      <hr className="my-4" />
<p className="text-center text-gray-500 py-2">Copyright &copy; {new Date().getFullYear()} UET, Texla University. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
