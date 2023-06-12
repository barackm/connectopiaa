import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, loading, onClick } = props;
    return (
        <button
            onClick={(e) => {
                if (loading) {
                    e.preventDefault();
                    return;
                }

                onClick && onClick(e);
            }}
            className={`inline-flex items-center relative px-4 py-2 border rounded-full hover:shadow-lg bg-primary-500 text-center justify-center ${loading ? 'opacity-50 cursor-default' : ''}`}
            {...props}
        >  {loading && <div className="rounded-md h-5 w-5 border-2 border-t-2 border-white animate-spin mr-4" />} {children}</button>
    );
};

export default Button;
