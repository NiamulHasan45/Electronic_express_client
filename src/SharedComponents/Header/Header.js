import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {

    const [user] =useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#parts">All Products</a></li>
        <li><a href="#review">Review</a></li>
        <li><Link to="/about">About</Link></li>
        
    </>

    return (
        <div>
            <div class="navbar bg-primary text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary text-white">
                            {menuItems}
                            {
                                user&&<li><Link to="/dashboard">Dashboard</Link></li>
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">Electronic Express</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                        {
                                user&&<li><Link to="/dashboard">Dashboard</Link></li>
                            }
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user?<><p className='mx-3'>{user.displayName}</p>
                        <button className='btn' onClick={handleSignOut}>Signout</button></>:
                        <Link className='btn' to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;