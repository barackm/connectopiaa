import { FormikContext } from 'formik';
import React, { useContext } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isTextArea?: boolean;
    label?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const { isTextArea, label } = props;

    const formikContext = useContext(FormikContext);
    const { setFieldValue, handleChange, errors, touched, setFieldTouched } = formikContext || {};

    const handleBlur = (e: any) => {
        setFieldTouched && setFieldTouched(props.name || '', true);
        props.onBlur && props.onBlur(e);
    }

    const handleOnChange = (e: any) => {
        setFieldValue && setFieldValue(props.name || '', e.target.value);
        handleChange && handleChange(e);
    }


    return (
        <div className="relative">
            <label htmlFor={props.name}
                className="text-dm font-semibold text-gray-500 dark:text-gray-400"
            >
                {label}
            </label>

            {isTextArea ? (
                <textarea
                    name={props.name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-36 text-zinc-800"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            ) : (
                <input
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-zinc-800"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    {...props}
                />
            )}
            {
                errors && touched && errors[props.name || ''] && touched[props.name || ''] &&
                <span>
                    {errors[props.name || '' as any]}
                </span>}
        </div>
    );
};

export default Input;
