import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = (props) => {
    const { } = props;
    return (
        <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
            <div className="inline-flex">
                <a className="_o6689fn" href="/"
                ><div className=" md:flex align-middle justify-center items-center gap-4">
                        <svg width="50" height="50" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.0931 210.308C28.2479 210.308 0 182.06 0 147.215V63.0931C0 28.2479 28.2479 0 63.0931 0H147.215C182.06 0 210.308 28.2479 210.308 63.0931V147.215C210.308 182.06 182.06 210.308 147.215 210.308H63.0931Z" fill="#1B45B9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.1155 100.014C54.4337 103.818 54.5794 111.418 53.5426 116.721C52.2317 123.438 47.4508 127.028 42.0616 129.864C43.6723 123.259 45.0432 116.653 45.5916 110.047C46.2599 101.881 45.0775 102.413 52.1632 96.5522C62.0935 88.3184 78.2098 81.6354 102.269 76.9316C123.312 73.453 145.528 73.0503 168.251 73.9242C160.625 89.4236 136.266 90.726 106.535 87.4701C91.0189 87.6415 76.5905 83.289 57.1155 100.014ZM128.487 123.841C95.1144 141.303 61.6308 104.272 49.9612 129.736C67.9882 114.048 93.4779 157.008 128.487 123.841ZM149.812 102.019C111.342 125.323 68.3995 95.2327 56.3615 117.946C85.5954 107.365 122.892 141.534 149.812 102.019ZM156.958 89.3551C123.166 104.443 70.9099 77.3428 57.8695 108.539C84.4815 93.0479 130.234 120.859 156.958 89.3551Z" fill="white" />
                        </svg>
                        <span className='hidden md:block text-2xl'>Connetopiaa</span>
                    </div>
                </a>
            </div>

            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button className="flex items-center text-left flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full  py-1" type="button">
                            <div className="block px-2 flex-grow flex-shrink overflow-hidden text-zinc-500">Start your search</div>
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
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
