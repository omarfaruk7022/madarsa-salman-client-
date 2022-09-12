import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-base-100  flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <>
                <li>
                  <Link
                    to="/"
                    class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px] "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
                  >
                    About
                  </Link>
                </li>
                <li >
                <Link
                to="/blog"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
              >
                Blog
              </Link>
                </li>
                <li>
                <Link
                to="/dashboard"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
              >
                Dashboard
              </Link>
                </li>

                
                <li>
                  {user ? (
                    <button onClick={handleSignOut} className="btn btn-ghost">
                      Logout
                    </button>
                  ) : (
                    <Link className="block h-12 leading-[3rem] text-[13px] border-b-4 border-transparent hover:text-primary hover:border-current " to="/login">Login</Link>
                  )}
                </li>
              </>
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal p-0 px-16 lg:space-x-4">
          
            <>
              <Link
                to="/"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px] "
              >
                Home
              </Link>

              <Link
                to="/about"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
              >
                About
              </Link>
              
              <Link
                to="/blog"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
              >
                Blog
              </Link>
              
              
              <Link
                to="/dashboard"
                class="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
              >
                Dashboard
              </Link>
              

              
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="block h-12 leading-[3rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[13px] "
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="block h-12 leading-[3rem] text-[13px] border-b-4 border-transparent hover:text-primary hover:border-current ">
                    Login/Register
                  </button>
                </Link>
              )}
             
            </>
           
          </ul>
        </div>
      </div>
    </div>
    // <div>
    //   <header class="border-b border-gray-100">
    //     <div class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    //       <div class="flex items-center">
    //       <label tabindex="0" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>

    //         {/* <a href="" class="flex">
    //           <span class="inline-block w-32 h-10 bg-gray-200 rounded-lg">Madrasa Salman</span>
    //         </a> */}
    //         <h1 className="text-xl font-bold">Madrasa Salman</h1>
    //       </div>

    //       <div class="flex items-center justify-end flex-1">
    //         <div class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
    //           <Link
    //             to="/"
    //             class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px] "
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="/about"
    //             class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //           >
    //             About
    //           </Link>
    //           <Link
    //             to="/blog"
    //             class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //           >
    //             Blog
    //           </Link>
    //           <Link
    //             to="/dashboard"
    //             class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //           >
    //             Dashboard
    //           </Link>
    //           <div className="dropdown">
    //             <label tabindex="0" className="btn btn-ghost lg:hidden">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M4 6h16M4 12h8m-8 6h16"
    //                 />
    //               </svg>
    //             </label>
    //             <ul
    //               tabindex="0"
    //               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
    //             >
    //               <>
    //                 <Link
    //                   to="/"
    //                   class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px] "
    //                 >
    //                   Home
    //                 </Link>
    //                 <Link
    //                   to="/about"
    //                   class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //                 >
    //                   About
    //                 </Link>
    //                 <Link
    //                   to="/blog"
    //                   class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //                 >
    //                   Blog
    //                 </Link>
    //                 <Link
    //                   to="/dashboard"
    //                   class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[12px]"
    //                 >
    //                   Dashboard
    //                 </Link>

    //                 {/* <li className="text-black">
    //                   {user && <Link to="dashboard">Dashboard</Link>}
    //                 </li>
    //                 <li>
    //                   {user ? (
    //                     <button onClick={signOut} className="btn btn-ghost">
    //                       Sign Out
    //                     </button>
    //                   ) : (
    //                     <Link to="/login">Login</Link>
    //                   )}
    //                 </li> */}
    //               </>
    //             </ul>
    //           </div>

    //           {user ? (
    //             <button
    //               onClick={handleSignOut}
    //               className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-primary hover:border-current text-[13px] "
    //             >
    //               Logout
    //             </button>
    //           ) : (
    //             <Link to="/login">
    //               <button className="block h-16 leading-[4rem] text-[13px] border-b-4 border-transparent hover:text-primary hover:border-current ">
    //                 Login/Register
    //               </button>
    //             </Link>
    //           )}
    //         </div>

    //         <div class="flex items-center ml-8">
    //           <div class="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
    //             <span>
    //               <a
    //                 href="/cart"
    //                 class="block p-6 border-b-4 border-transparent hover:border-red-700"
    //               >
    //                 <svg
    //                   class="w-4 h-4"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    //                   />
    //                 </svg>

    //                 <span class="sr-only">Cart</span>
    //               </a>
    //             </span>

    //             <span>
    //               <a
    //                 href="/account"
    //                 class="block p-6 border-b-4 border-transparent hover:border-red-700"
    //               >
    //                 <svg
    //                   class="w-4 h-4"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //                   />
    //                 </svg>

    //                 <span class="sr-only"> Account </span>
    //               </a>
    //             </span>

    //             <span class="hidden sm:block">
    //               <a
    //                 href="/search"
    //                 class="block p-6 border-b-4 border-transparent hover:border-red-700"
    //               >
    //                 <svg
    //                   class="w-4 h-4"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //                   />
    //                 </svg>

    //                 <span class="sr-only"> Search </span>
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Navbar;
