import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Button";
import s from './Styles.module.css'
import {Result} from "./Result";
import {Count} from "./Count";
import {Numbers} from "./Numbers";

function App() {
    const [ count, setCount] = useState('0')
    const [ result, setResult] = useState('')

    //сброс на ноль при нажатии на АС
    const functionAC = () => {
        setCount('0')
    }
    const fun = (value: string) => {
        if (count === '0' || result) {
            setCount(value);
            setResult('')
        } else {
            setCount(prevState => prevState + value);
            setResult('')
        }
    }

    const funSum = () => {
        setCount(eval(count))
        setResult(eval(count))
    }

  return (
      <div className={s.calculator}>
                <div className={s.containerResultAndCount}>
                    <Count count={count}/>
                    {/*<Result result={result}/>*/}
                </div>
                <Numbers onClick={fun} functionForAC={functionAC}  functionForSum={funSum} />
      </div>

  )
}
export default App;









////////////////////////////////////////////////////////////////
// стейт арифметических функций

// const operations = {
//     sum: '+',
//     subtract: '-',
//     multiply: '*',
//     division: '/',
// }
// const a = 2;
// const b = 10;


//арифметические функции

// const sum = (a: number, b: number) => {
//     return a + b
// }
// const sub = (a: number, b: number) => {
//     return a - b
// }
// const mul = (a: number, b: number) => {
//     return a * b
// }
// const divis = (a: number, b: number) => {
//     if(b != 0)
//     {return a / b}
// }
//
// const calculate = (operations: any) => {
//     switch (operations) {
//         case operations.sum:
//             return sum(a, b)
//         case operations.subtract:
//             return sub(a, b)
//         case operations.multiply:
//             return mul(a, b)
//         case operations.division:
//             return divis(a, b)
//         default: throw new Error("Invalid operation");
//     }
// }
// const functionSum = () => {
//     const result = calculate(operations.sum);
//     if (result !== undefined) {
//         setResult(eval(result));
//     } else {
//         setResult('');
//     }
// };