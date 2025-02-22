// @flow
import * as React from 'react';
import s from './Styles.module.css'

type ResultPropsType = {
    result: string,

};
export const Result = ({result}: ResultPropsType) => {
    return (
        <div className={s.resultAndCount}>
            {result}
        </div>
    );
};