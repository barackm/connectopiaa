import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children } = props;
    return (
        <button
            className="inline-flex items-center relative px-4 py-2 border rounded-full hover:shadow-lg bg-primary-500 text-center justify-center"
            {...props}
        >{children}</button>
    );
};

export default Button;
