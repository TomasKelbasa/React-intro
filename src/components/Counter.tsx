import {useState} from "react";


type ach = (val:number) => void;
type ne = (fun: ach) => void;
const Counter = ({steps, value, setVal} : {steps: number, value:number, setVal: (x: ((val:number) => void) | number) => void}) => {
    return (
        <span>
            <button onClick={e => {setVal(value - steps)}}>-</button>
            <span>{value}</span>
            <button onClick={e => {setVal(val => Number(val) + Number(steps))}}>+</button>
        </span>
    );
}

export default Counter;