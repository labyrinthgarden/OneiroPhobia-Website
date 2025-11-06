'use client'
import { useState, useEffect } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'next-auth/react';

const Account: React.FC = () => {
  // Check if custom session cookie exists
  const isLoggedIn = !!getCookie('customSession');

  const handleLogout = () => {
    deleteCookie('customSession'); // Remove custom cookie
    signOut({ callbackUrl: '/' }); // Next-auth logout
  };

  return (
    <div className="min-h-screen" style={{backgroundImage: 'url("/images/account/bg.png")'}}>
      <div className="bg-black/80 min-h-screen">
        <div className="p-50">
          <div className="bg-white/10 rounded-3xl p-5 hover:bg-white/20 m-5">
            <h1 className='text-[2vw] font-bold mb-5'>
              Pre-sale
            </h1>
            <p className='italic'>
              You have purchased a pre-sale as a contribution to the project.
            </p>
          </div>
          <div className="bg-white/10 rounded-3xl p-5 hover:bg-white/20 m-5">
            <h1 className='text-[2vw] font-bold mb-5'>
              Early Access
            </h1>
            <p className='italic'>
              You have early access to the project on steam account.
            </p>
          </div>
        </div>
        <button className="p-5 mt-0 ml-285 mr-10" onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
