// @flow
import * as React from 'react';
import s from './Styles.module.css'

type ResultPropsType = {
    result: number,

};
export const Result = ({result}: ResultPropsType) => {
    return (
        <div className={s.result}>
            {result}
        </div>
    );
};