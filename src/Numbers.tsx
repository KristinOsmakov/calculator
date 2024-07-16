// @flow
import * as React from 'react';
import s from "./Styles.module.css";
import {Button} from "./Button";

type NumbersPropsType = {
        onClick: (value: string) => void
        functionForAC: () => void
};



const buttonData = [
    { title: 'AC', background: '#D3D3D3', color: 'black' },
    { title: '+/-', background: '#D3D3D3', color: 'black' },
    { title: '%', background: '#D3D3D3', color: 'black' },
    { title: '÷', background: '#FF8C00', color: 'white' },
    { title: '7', background: '#696969', color: 'white' },
    { title: '8', background: '#696969', color: 'white' },
    { title: '9', background: '#696969', color: 'white' },
    { title: 'x', background: '#FF8C00', color: 'white' },
    { title: '4', background: '#696969', color: 'white' },
    { title: '5', background: '#696969', color: 'white' },
    { title: '6', background: '#696969', color: 'white' },
    { title: '-', background: '#FF8C00', color: 'white' },
    { title: '1', background: '#696969', color: 'white' },
    { title: '2', background: '#696969', color: 'white' },
    { title: '3', background: '#696969', color: 'white' },
    { title: '+', background: '#FF8C00', color: 'white' },
    { title: '0', background: '#696969', color: 'white' },
    { title: ',', background: '#696969', color: 'white' },
    { title: '=', background: '#FF8C00', color: 'white' },
];

export const Numbers = ({ onClick, functionForAC }: NumbersPropsType) => {
    const buttons = buttonData.map(({ title, background, color }) => (
        <Button
            key={title}
            onClick={title === 'AC' ? (()=> functionForAC()) : (() => onClick(title))}
            title={title}
            background={background}
            color={color}
            className={s.button}
        />
    ));

    return <div className={s.buttons}>{buttons}</div>;
};












//
// // @flow
// import * as React from 'react';
// import s from "./Styles.module.css";
// import {Button} from "./Button";
//
// type NumbersPropsType = {
//     val: (value: string) => void
// };
//
// // export function Numbers (props: NumbersPropsType) {
// //         const nums = Array.from(Array(10).keys()).map( number => { return <Button /> })
// //         return <>{nums}</>
// // }
// export const Numbers = ({val}: NumbersPropsType) => {
//     return (
//         <div className={s.buttons}>
//             <Button onClick={ () => val('AC')} title={'AC'} className={s.button} background={'#D3D3D3'} color={'black'}/>
//             <Button onClick={ () => val('+/-')} title={'+/-'} className={s.button} background={'#D3D3D3'} color={'black'}/>
//             <Button onClick={ () => val('%')} title={'%'} className={s.button} background={'#D3D3D3'} color={'black'}/>
//             <Button onClick={ () => val('÷')} title={'÷'} className={s.button} background={'#FF8C00'} color={'white'}/>
//
//             <Button onClick={ () => val('7')} title={'7'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('8')} title={'8'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('9')} title={'9'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('x')} title={'x'} className={s.button} background={'#FF8C00'} color={'white'}/>
//
//             <Button onClick={ () => val('4')} title={'4'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('5')} title={'5'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('6')} title={'6'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('-')} title={'-'} className={s.button} background={'#FF8C00'} color={'white'}/>
//
//             <Button onClick={ () => val('1')} title={'1'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('2')} title={'2'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('3')} title={'3'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('+')} title={'+'} className={s.button} background={'#FF8C00'} color={'white'}/>
//
//             <Button onClick={ () => val('0')}  title={'0'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('0')} title={'0'} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val(',')} title={','} className={s.button} background={'#696969'} color={'white'}/>
//             <Button onClick={ () => val('=')} title={'='} className={s.button} background={'#FF8C00'} color={'white'}/>
//         </div>
//     );
// };
