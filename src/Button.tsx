// @flow
import * as React from 'react';
import s from './Styles.module.css'


type ButtonPropsType = {
    title: string,
    onClick?: () => void,
    color?: string,
    background: string,
    className: string

};
export const Button = ({title, onClick, color, background, className}: ButtonPropsType) => {
    return (
        <button className={className} style={{background: background, color: color}} onClick={onClick}>
            {title}
        </button>
    );
};