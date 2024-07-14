import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Button";
import s from './Styles.module.css'
import {Result} from "./Result";

function App() {
    const [ number1, setNumber1] = useState(0)
    const [ number2, setNumber2] = useState('')
    const [ operator, setOperator] = useState('')
    const [ result, setResult] = useState(0)
    const fun = () => {

    }
  return (
      <div className={s.calculator}>
              <Result result={result}/>
              <div className={s.buttons}>
                      <Button onClick={fun} title={'AC'} className={s.button} background={'#D3D3D3'} color={'black'}/>
                      <Button title={'+/-'} className={s.button} background={'#D3D3D3'} color={'black'}/>
                      <Button title={'%'} className={s.button} background={'#D3D3D3'} color={'black'}/>
                      <Button title={'÷'} className={s.button} background={'#FF8C00'} color={'white'}/>

                      <Button title={'7'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'8'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'9'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'x'} className={s.button} background={'#FF8C00'} color={'white'}/>

                      <Button title={'4'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'5'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'6'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'-'} className={s.button} background={'#FF8C00'} color={'white'}/>

                      <Button title={'1'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'2'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'3'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'+'} className={s.button} background={'#FF8C00'} color={'white'}/>

                      <Button title={'0'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'0'} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={','} className={s.button} background={'#696969'} color={'white'}/>
                      <Button title={'='} className={s.button} background={'#FF8C00'} color={'white'}/>
              </div>

      </div>

  )
}
export default App;
