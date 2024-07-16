// @flow
import * as React from 'react';
import s from './Styles.module.css'

type CountPropsType = {
    count: string
};
export const Count = ({count}: CountPropsType) => {
    return (
        <div className={s.resultAndCount}>
            {count}
        </div>
    );
};