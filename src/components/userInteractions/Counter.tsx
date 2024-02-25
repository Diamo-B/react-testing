import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(prev=>prev+1)}}>
                Increment
            </button>
        </div>
     );
}
 
export default Counter;