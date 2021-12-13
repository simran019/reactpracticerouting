import { useState } from "react";
export default function Mypropsandhooks(props)
{
    //console.log(props.no);
     const[contactnumber,changeContactNumber]=useState(parseInt(props.no));
    
    return(
        <div>
            <p>The value being passed is {contactnumber}</p>
            <button onClick={()=>{changeContactNumber(contactnumber+10)}}>Click to change passed prop value</button>
        </div>
    );
}