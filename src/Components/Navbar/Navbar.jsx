import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'Redux/Slices/AuthSlice';


function Navbar() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleLogout() {
    // Add logout functionality here
    dispatch(logout());
  }
  return (
    <div className='navbar bg-base-200'>
      <div className='flex-1' >
        {authState.token &&  <Link to='/dashboard' className='btn btn-ghost text-xl normal-case'> B00kShelf</Link> }
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {authState.token && <li>
            <Link>Shelfs</Link>
          </li>}
          {authState.token && <li>
            <Link>{authState.username}</Link>
          </li>}
          <li>
            <details>
              <summary>
                options
              </summary>
              <ul className=' bg-neutral-100 flex flex-col py-2'>
                { authState.token && <Link to='/login' onClick={handleLogout} className='text-black px-2'>logout</Link>}
                { !authState.token && <Link to='/signup'  className='text-black px-2'>Signup</Link>}
                { !authState.token && <Link to='/login'  className='text-black px-2'>signin</Link>}

              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;