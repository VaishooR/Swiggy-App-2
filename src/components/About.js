// Functional Component Life Cycle

import { useEffect } from "react";

const About = () =>{

    useEffect(()=>{
        console.log("useEffect called")

        return ()=>{
            console.log("useEffect return called")
        }
    },[])

    console.log("About Component")

    return(
        <div>
            <h1 style={{textAlign: 'center',paddingTop: '40px',minHeight: '60vh'}}>About Us Page</h1>
            {console.log("return called")}
        </div>
    )
}
export default About;


// OUTPUT

// About Component
// return called
// useEffect called
// useEffect return called

