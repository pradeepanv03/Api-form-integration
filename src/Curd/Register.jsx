import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



export default function Register()
{
    const[name , setname] = useState("");
    const[email , setemail] = useState("");

    const navigate = useNavigate();

    const Handlesubmit = (e) =>
        {
            e.preventDefault();
            axios.get('https://mytravels.store/api.php', {
                params : 
                {
                    action: "create",
                    name:name,
                    email:email
                }})
                .then( (res) =>
                    {
                        alert("added");
                        setemail("");
                        setname("");
                        navigate('/')
                         
                         
                    }
                     
            
            )
                .catch((e) =>  {console.log(e , "Gettig error");})
            }
        
        
    

    return(
       
        <div className="container text-center">

            <h1> Register Form</h1>
            <form onSubmit={Handlesubmit}>
                <input required onChange={(e) => setname(e.target.value)} className="w-25 m-3 p-1" type="text" placeholder="Enter Name" />*
                <br />
                <input  required onChange={(e) => setemail(e.target.value)} className="w-25 m-3 p-1" type="text" placeholder="Enter Email" />
                <br />

                <Link className="btn btn-primary" to={'/'}>Login </Link>
                <input type="submit" className="btn btn-success ms-3" value="Register" />

            </form>

        </div>
    )
}