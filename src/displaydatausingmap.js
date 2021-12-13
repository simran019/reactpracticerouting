export default function Fetchemailids()
{
    var myid=[
        {
        email:"abc@gmail.com"
        },
        {
          email:"def@gmail.com"  
        }
    ]
    return(
        <>
        <h1>Following are email ids</h1>
        <div>
        {myid.map((item,index)=>{
            return <h2 key={index}>{item.email}</h2>
        })}
        </div>
        
        </>
    );
}

























// import { useState } from "react";

// export default function Fetchemailids()
// {
//     const myid=[
//         {
//             email:"abc@gmail.com"
//         },
//         {
//             email:"def@gmail.com"
//         }
//     ]
//     return(
//         <>
//         <h1>Email Ids are</h1>
//         <div>
            
//             {myid.map((item,index)=>{
//                 return <h2>{item.email}</h2>
//             })}
           
//         </div>
//         </>
//     );
// }