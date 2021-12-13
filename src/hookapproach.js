import { useState } from "react";
export default function Checkcount()
{
    const[count,setCountValue]=useState(0);
    //name of state variable is count
    //fxn setCountValue will set value of count when it's changed like on button click
    //initial value is 0
    return(
        <div>
            <p>I am using Hook Approach</p>
            <p>You have clicked button {count} times</p>
            <button onClick={()=>{setCountValue(count+1)}}>Click me </button>
        </div>
    );
}