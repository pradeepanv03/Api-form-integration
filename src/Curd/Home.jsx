// import { Tune } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
  


export default function Home()
{

    const[value , setvalue] = useState([]);
    const[name , setname] = useState([]);
    const[email , setemail] = useState([]);
    const[edit , setedit] = useState(false);
    const[id , setid] = useState([]);

    const adddata = (e) =>
        {
            
            e.preventDefault();

            if(edit == false)

                {


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
                                getdata();
                                setname("");
                                setemail("");
                            }
                             
                    
                    )
                        .catch((e) =>  {console.log(e , "Gettig error");})
                    }
            else
            {
                axios.get('https://mytravels.store/api.php', {
                    params : 
                    {
                        action: "update",
                        id:id,
                        name:name,
                        email:email
                    }})
                    .then( (res) =>
                        {
                            alert("updated");
                            getdata();
                            
                        }
                         
                
                )
                    .catch((e) =>  {console.log(e , "Gettig error");})
                }
            }
                
               
    

        

    useEffect(  () =>

        {
            getdata();
        },[])

        const getdata = () =>
            {


                axios.get('https://mytravels.store/api.php')
                .then( (res) =>
                {
                   console.log(res.status , "show data");

                   setvalue(res.data)
                })
                .catch((error)=>
                {
                    console.log(error , "Gettig error");
                })

            }

            const deletedata = (did)  =>
                {
                    axios.get('https://mytravels.store/api.php', {
                        params : 
                        {
                            action: "delete",
                            id:did
                        }})
                        .then( (res) =>
                            {
                                alert("deleted");
                                getdata();
                               
                            }
                             
                    
                    )
                        .catch((e) =>  {console.log(e , "Gettig error");})
                    }
               
            
                    const updatedata = (uid)  =>
                        {

                            const alldata = value.find((e) => e.id == uid)

                            setname(alldata.name)
                            setemail(alldata.email)
                            setid(alldata.id)
                            setedit(true)
                            
                        }
                           
                    
        

    return(


        <div className="contaier p-3">

        <form onSubmit={adddata}>
        id : <input value={id} type="text" onChange={(e) => setid(e.target.value)} />
        <br /> 
           Name : <input value={name} type="text" onChange={(e) => setname(e.target.value)} />
           <br /> 
           Email : <input value={email} type="text" onChange={(e) => setemail(e.target.value)} />

           <br />
           
           {(edit ? <input type="submit" value="Update"/> : <input type="submit" value="Add"/> )} 

        </form>
       <h1> Show All Users</h1>

        <table className="table table-bordered m-3">

            <tr>
                <th>slno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created</th>
                <th> Action</th>
            </tr>
   {value.map( (d,i) =>
   (
    <tr key={i}>
    <td>{d.id}</td>
    <td>{d.name}</td>
    <td>{d.email}</td>
    <td>{d.created_at}</td>
    <td><button onClick={() => updatedata(d.id)}>Edit</button> <button onClick={() => deletedata(d.id)}>Delete</button></td>
        </tr>


   ))}
           
        </table>
        </div>
    )
}