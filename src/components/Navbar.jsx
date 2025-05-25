import React, { useState } from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-indigo-800 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-14'>
          <div className='flex-shrink-0'>
            <Link
              to='/'
              className='text-xl font-bold text-white hover:text-gray-200'>
              Job Application
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-6'>
            <Link
              to='/'
              className='text-white hover:text-gray-200 font-medium '>
              Home
            </Link>
            <Link
              to={'/applyjob'}
              className='text-white hover:text-gray-200 font-medium'>
              Apply
            </Link>
            <Link
              to='/thankyou'
              className='text-white hover:text-gray-200 font-medium'>
              Application
            </Link>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-amber-400'>
              {!isOpen ? (
                <FiMenu className='h-6 w-6' />
              ) : (
                <FiX className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white border-t'>
          <div className='px-2 py-2 space-y-1'>
            <Link
              to='/'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-indigo-800 hover:bg-gray-100'>
              Home
            </Link>
            <Link
              to='/applyjob'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-indigo-800 hover:bg-gray-100'>
              Apply
            </Link>
            <Link
              to='/thankyou'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-indigo-800 hover:bg-gray-100'>
              Application
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
