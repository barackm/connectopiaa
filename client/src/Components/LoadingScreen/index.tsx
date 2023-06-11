import React from 'react';
import { createPortal } from 'react-dom';


interface LoadingScreenProps { }

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
    return createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen z-10 flex items-center bg-gray-800 bg-opacity-50 justify-center backdrop-filter backdrop-blur">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-primary-300 animate-spin absolute"></div>
        </div>,
        document.body
    )
};

export default LoadingScreen;