import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 relative bottom-0 ">
  <aside>
    <div className='flex-1' >
        <Link to='/dashboard' className='btn btn-ghost text-xl normal-case'> B00kShelf</Link>
      </div>
    <p>
      B00KSHELFS pvt. ltd.
      <br />
      Providing reliable Books since 2022
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover"><BsFacebook /></a>
    <a className="link link-hover"><BsTwitterX /></a>
    <a className="link link-hover"><BsInstagram /></a>
    <a className="link link-hover"><BsLinkedin /></a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
}

export default Footer;