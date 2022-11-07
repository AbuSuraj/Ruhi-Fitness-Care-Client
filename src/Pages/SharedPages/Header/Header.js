import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
 
const Header = () => {
    const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(false)
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const handleTheme = () =>{
    setTheme(!theme);
  }
    return (
        <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-gray-900 text-sky-500 shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-1">
            <div>
            <NavLink className="flex items-center  text-3xl font-bold font-heading" to={"/"}>
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
            <img className='rounded-full' style={{width:50, height:50}} src='https://i.ibb.co/XsHFDFk/logo.jpg' alt='logo'></img>
              <span className='ml-2'>Islamic Ilm Center</span>
            </NavLink>
            </div>
    
            <ul className="hidden sm:flex sm:items-center list-none">
              <li  className="text-sm font-semibold  mr-4"><NavLink className="hover:text-gray-200" to={"/home"}>
                Home
              </NavLink></li>
              <li   className=" text-sm font-semibold mr-4"><NavLink className="hover:text-gray-200" to={"/courses"}>
                Courses
              </NavLink></li>
              <li  className="text-sm font-semibold mr-4"><NavLink className="hover:text-gray-200" to={"/faq"}>
                FAQ
              </NavLink></li>
              <li  className="text-sm font-semibold"><NavLink className="hover:text-gray-200" to={"/blog"}>
                Blog
              </NavLink></li>
            </ul>
    
            <ul className="hidden sm:flex sm:items-center justify-between list-none">
            {user?.uid ? (
              <>
                <li>
                  <NavLink to={"/profile"} className="hover:text-gray-200 mr-4">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li>
                <NavLink to="/profile">
               {
                user?.photoURL ?
                <Tooltip title={user?.displayName} arrow>
                <img place="top" type="dark" effect="float" data-tip="suraj" className='rounded-full mr-4' style={{height:'40px'}}
                  alt=''
                src={user?.photoURL}>   
                
                </img>
                </Tooltip>
                :
                <FaUser></FaUser>
               }
            </NavLink>
                </li>
                <li>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" onClick={handleLogOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" to={"/login"}>
                    Login
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" to={"/register"}>
                    register
                  </NavLink>
                </li>
                
              </>
            )}
            <li onClick={handleTheme}>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200">{theme ? 'light-theme' : 'dark-theme'} </NavLink>
                </li>
            </ul>
    
          </div>
          
          <div className="block sm:hidden bg-gray-900 text-sky-500 border-t-2 py-2">
            <ul className="list-none flex flex-col">
              <li  className="text-sm font-semibold mb-1"><NavLink className="hover:text-gray-200" to={"/home"}>
                Home
              </NavLink></li>
              <li className="text-sm font-semibold  mb-1"><NavLink className="hover:text-gray-200" to={"/courses"}>
                Courses
              </NavLink></li>
              <li className=" text-sm font-semibold   mb-1"><NavLink className="hover:text-gray-200" to={"/faq"}>
                FAQ
              </NavLink></li>
              <li className="text-sm font-semibold  mb-1"><NavLink className="hover:text-gray-200" to={"/blog"}>
                Blog
              </NavLink></li>

              {/* <ul className="hidden sm:flex sm:items-center list-none"> */}
              <ul className="list-none flex justify-between items-center border-t-2 pt-2">
            {user?.uid ? (
              <>
                <li>
                  <NavLink to={"/profile"} className="hover:text-gray-200 mr-4">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li>
                <NavLink to="/profile">
               {
                user?.photoURL ?
                <img className='rounded-full' style={{height:'40px'}}
                  alt=''
                src={user?.photoURL}>               
                </img>
                :
                <FaUser></FaUser>
               }
            </NavLink>
                </li>

                <li>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" onClick={handleLogOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" to={"/login"}>
                    Login
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200" to={"/register"}>
                    register
                  </NavLink>
                </li>
              </>
            )}
            <li onClick={handleTheme}>
                  <NavLink className="text-sm font-semibold mr-4 hover:text-gray-200">{theme ? 'light-theme' : 'dark-theme'} </NavLink>
                </li>
            </ul>
               
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;