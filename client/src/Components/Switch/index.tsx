import { FormikContext } from 'formik';
import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MUISwitch from '@mui/material/Switch';

interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    name: string;
    onBlur?: (e: any) => void;
    label?: string;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
    disabled?: boolean;
    alwaysOn?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
    const { checked, onChange, name, onBlur, label, labelPlacement = "end", disabled, alwaysOn } = props;
    const formikContext = useContext(FormikContext);
    const { setFieldValue, handleChange, errors, touched, setFieldTouched, values } = formikContext || {};

    const handleToggle = () => {
        if (values && formikContext) {
            setFieldValue && setFieldValue(name, !values[name]);
        } else {
            onChange && onChange(!checked);
        }
    };

    const handleBlur = (e: any) => {
        setFieldTouched && setFieldTouched(name || '', true);
        onBlur && onBlur(e);
    }


    const IOSSwitch = styled((props) => (
        <MUISwitch disabled={disabled} focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => {
        const onBackground = theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466';
        const offBackground = theme.palette.mode === 'dark' ? '#39393D' : '#E9E9EA';
        const basicBackgroundColor = alwaysOn ? onBackground : offBackground;
        return {
            width: 42,
            height: 26,
            padding: 0,
            marginLeft: '11px !important',
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: onBackground,
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: basicBackgroundColor,
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        };
    });


    return (
        <div className="relative flex items-center gap-4">
            <FormGroup>
                <FormControlLabel
                    classes={{}}
                    control={<IOSSwitch sx={{ m: 1 }} />}
                    label={<label className="text-dm font-semibold text-gray-500 dark:text-gray-400">{label}</label>}
                    labelPlacement={labelPlacement}
                    name={name}
                    checked={formikContext ? values[name] : checked}
                    disabled={disabled}
                    onBlur={handleBlur}
                    onChange={handleToggle}
                />
            </FormGroup>
        </div>
    );
};

export default Switch;
