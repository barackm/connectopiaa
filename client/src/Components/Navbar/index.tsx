import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {

    return (
        <nav className="bg-white w-full flex justify-between items-center mx-auto px-8 h-16 sticky top-0 z-50">
            <div className="inline-flex">
                <Link className="_o6689fn" to="/"
                ><div className=" md:flex align-middle justify-center items-center gap-4">
                        <img src={logo} alt="Logo" className='w-12' />
                        <span className='hidden md:block text-2xl'>Connetopiaa</span>
                    </div>
                </Link>
            </div>

            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button className="flex items-center text-left flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full  py-1" type="button">
                            <div className="block px-2 flex-grow flex-shrink overflow-hidden text-zinc-500">Start your search</div>
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    className="w-4 h-4 text-gray-500 stroke[1.33333] stroke-current"
                                >
                                    <g fill="none">
                                        <path
                                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    <div className="block">
                        <div className="inline relative">
                            <button title="button" type="button" className="inline-flex items-center relative px-4 py-2 border rounded-full hover:shadow-lg bg-primary-500">
                                <span>Connect</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
