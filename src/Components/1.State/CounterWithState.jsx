import { useState } from "react";

export function CounterWithState(){
    const [count,setCount] = useState(0);
    function increase(){
        setCount(count+1);
    }
    
    return(
        <> 
        <h2>카운터 (상태관리 사용)</h2>
        <p>Count: {count}</p>
        <button onClick={() => {
            increase();
            }}
            >
            +
            </button>
        </>
        );
    }