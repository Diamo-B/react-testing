import { useState } from "react";
import {counterProps} from "./counter.types";

const useCounter = ({initialCount = 0}:counterProps = {}) => {
    const [count, setCount] = useState(initialCount);
    const increment = ()=>{setCount(prev=>prev+1)}
    const decrement = ()=>{setCount(prev=>prev-1)}
    return {count, increment, decrement};
}
 
export default useCounter;