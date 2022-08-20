import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content justify-items-center">
        <div>
          <span className="footer-title">Services</span>
          <Link to='/' className="link link-hover">Branding</Link>
          <Link to='/' className="link link-hover">Design</Link>
          <Link to='/' className="link link-hover">Marketing</Link>
          <Link to='/' className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Jobs</Link>
          <Link to='/' className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to='/' className="link link-hover">Terms of use</Link>
          <Link to='/' className="link link-hover">Privacy policy</Link>
          <Link to='/' className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <di>
            <div className='mb-5'>
              <h2 className='text-3xl mt-5 lg:mt-0'>Location</h2>
              <p className='mt-3 font-bold'>151/7(3 and 4 floor), green road <br /> panthapath,Dhaka</p>
            </div>
            <div>
              <span class="footer-title block">Follow Us</span>
              <div class="grid grid-flow-col gap-4">

                <a href='#'>
                  <FaFacebookSquare style={{ fontSize: '30px' }}></FaFacebookSquare >
                </a>
                <a href='#'>
                  <FaTwitterSquare style={{ fontSize: '30px' }}></FaTwitterSquare >
                </a>
                <a href='#'>
                  <FaInstagramSquare style={{ fontSize: '30px' }}></FaInstagramSquare >
                </a>
                <a href='#'>
                  <FaLinkedin style={{ fontSize: '30px' }}></FaLinkedin >
                </a>
              </div>
            </div>
          </di>
        </div>
      </footer>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved super max tools</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;