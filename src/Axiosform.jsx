// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Axiosform()
// {
//     const [name , setName] =useState("");
//     const [email, setEmail] = useState("");

//     const [value , setValue] =useState ([]);


//     const handlesubmit =(event) =>
//     {
//         event.preventDefault();

//         axios.get("https://mytravels.store/api.php" ,
//         {
//             params:{
//                 name:name,
//                 email:email,
//                 action:"create"
//             }
//         }
//     )

//         .then ( (data1) =>
//             {
//                 alert(data1.data);
//                 getdata();
//                 setName("");
//                 setEmail("");
//             })
//             .catch( (error)=>
//             {
//                 console.log(error , " Getting Error");
//                 alert("Error")
                
//             })
    
//     }

//     const deleted = (id) =>
//     {
//         axios.get("https://mytravels.store/api.php" ,
//             {
//                 params:{
//                     name:name,
//                     email:email,
//                     action:"delete"
//                 }
//             }
//         )
    
//             .then ( (data1) =>
//                 {
//                     alert(data1.data);
//                     getdata();
//                     setName("");
//                     setEmail("");
//                 })
//                 .catch( (error)=>
//                 {
//                     console.log(error , " Getting Error");
//                     alert("Error")
                    
//                 })
//     }
   

//     useEffect ( () =>
//     {
//         getdata();
//     },[])


//     const getdata =() =>
//     {
//         axios.get('https://mytravels.store/api.php')
//         .then ( (data1) =>
//         {
//             console.log(data1.data , "Show Data");
//             setValue(data1.data);
//         })
//         .catch( (error)=>
//         {
//             console.log(error , " Getting Error");
//         })

//     }


//     return(
//         <>
//         <div className="container">
//             <h2> Add Data </h2>
//             <form onSubmit={handlesubmit}>
//                 <lable>Name : </lable>
//                 <input type="text" placeholder="Enter Your Name" 
//                 value={name}
//                 onChange={(e) => setName(e.target.value)} />
//                 <br /> <br />

//                 <label> Email :  </label>
//                 <input type="text"  placeholder="Enter Email Id"
//                 value={ email}
//                 onChange={(e) => setEmail(e.target.value)} />
//                 <br /> <br />

//                 <input type="submit" />
//             </form>
//         </div>
        
//         <div className="container p-3">
//             <h1> Show All Users </h1>
        
//         {/* <table className="table table-bordered m-3 ">
//             <tr>
//                 <th> Id </th>
//                 <th> Name </th>
//                 <th> Email </th>
//                 <th> Created </th>
//                 <th> Action </th>
//             </tr>


//         {value.map( (d,i) =>
//         (
//             <tr key={i}>
//                 <td> {d.id} </td>
//                 <td> {d.name} </td>
//                 <td> {d.email} </td>
//                 <td> {d.created_at} </td>
//                 <td> <button> Edit </button>
//                 <button onClick={deleted(d.id)}> Delete </button> </td>
//             </tr>
//         )
//         )
//         }    

//         </table> */}

//         <table class="table table-bordered">
//   <thead>
//     <tr>
//       <th scope="col">S.No</th>
//       <th scope="col">Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Create</th>
//       <th scope="col">Action</th>

//     </tr>
//   </thead>
//   <tbody>
//     {value.map ((d,i) => (

//     <tr key={i}>
//       <td>{d.id}</td>
//       <td>{d.name}</td>
//       <td>{d.email}</td>
//       <td>{d.created_at}</td>
//     <td><button>Edit</button></td>
//     <td><button onClick={deleted(d.id)}>Delete</button></td>
//         </tr>
//     ))}

//   </tbody>
// </table>
//         </div>
//         </>
//     )
// }




// import React, { useEffect, useState } from "react";
// import axios from 'axios';


// export default function Dataform()
// {
//     const [name , setName] =useState("");
//     const [email, setEmail] = useState("");

//     const [value , setValue] =useState ([]);


//     const handlesubmit =(event) =>
//     {
//         event.preventDefault();

//         axios.get("https://mytravels.store/api.php" ,
//         {
//             params:{
//                 name:name,
//                 email:email,
//                 action:"create"
//             }
//         }
//     )
//         .then ( (data1) =>
//             {
//                 alert("added");
//                 getdata();
//                 setName("");
//                 setEmail("");
//             })
//             .catch( (error)=>
//             {
//                 console.log(error , " Getting Error");
//                 alert("Error")            
//             })   
//     }


//     const deleted = (id) =>
//     {
//       axios.get('https://mytravels.store/api.php',
//         {
//             params:{
//                 id:id,
//                 action:"delete"
//             }
//         }
//       )
//       .then ( (data1) =>
//         {
//             alert("Delete");
//             getdata();
//             setName("");
//             setEmail("");
//         })
//         .catch( (error)=>
//         {
//             console.log(error , " Getting Error");
//             alert("Error")
            
//         })
//     }
   

//     useEffect ( () =>
//     {
//         getdata();
//     },[])


//     const getdata =() =>
//     {
//         axios.get('https://mytravels.store/api.php')
//         .then ( (data1) =>
//         {
//             console.log(data1.data , "Show Data");
//             setValue(data1.data);
//         })
//         .catch( (error)=>
//         {
//             console.log(error , " Getting Error");
//         })

//     }


//     return(
//         <>
//         <div className="container">
//             <h2> Add Data </h2>
//             <form onSubmit={handlesubmit}>
//                 <lable>Name : </lable>
//                 <input type="text" placeholder="Enter Your Name" 
//                 value={name}
//                 onChange={(e) => setName(e.target.value)} />
//                 <br /> <br />

//                 <label> Email :  </label>
//                 <input type="text"  placeholder="Enter Email Id"
//                 value={ email}
//                 onChange={(e) => setEmail(e.target.value)} />
//                 <br /> <br />

//                 <input type="submit" />
//             </form>
//         </div>
        
//         <div className="container p-3">
//             <h1> Show All Users </h1>
        
//         <table className="table table-bordered m-3 ">
//             <tr>
//                 <th> Id </th>
//                 <th> Name </th>
//                 <th> Email </th>
//                 <th> Created </th>
//                 <th> Action </th>
//             </tr>


//         {value.map( (d,i) =>
//         (
//             <tr key={i}>
//                 <td> {d.id} </td>
//                 <td> {d.name} </td>
//                 <td> {d.email} </td>
//                 <td> {d.created_at} </td>
//                 <td> <button> Edit </button>
//                 <button onClick={() => deleted(d.id)}> Delete </button> </td>
//             </tr>
//         )
//         )
//         }    

//         </table>

//         </div>
        
        
//         </>
//     )
// }


// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Axiosform() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [value, setValue] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editId, setEditId] = useState(null);

//     const handlesubmit = (event) => {
//         event.preventDefault();

//         if (isEditing) {
//             axios.get("https://mytravels.store/api.php", {
//                 params: {
//                     id: editId,
//                     name: name,
//                     email: email,
//                     action: "update"
//                 }
//             })
//             .then(() => {
//                 alert("Updated");
//                 getdata();
//                 resetForm();
//             })
//             .catch((error) => {
//                 console.log(error, " Getting Error");
//                 alert("Error");
//             });
//         } else {
//             axios.get("https://mytravels.store/api.php", {
//                 params: {
//                     name: name,
//                     email: email,
//                     action: "create"
//                 }
//             })
//             .then(() => {
//                 alert("Added");
//                 getdata();
//                 resetForm();
//             })
//             .catch((error) => {
//                 console.log(error, " Getting Error");
//                 alert("Error");
//             });
//         }
//     }

//     const resetForm = () => {
//         setName("");
//         setEmail("");
//         setIsEditing(false);
//         setEditId(null);
//     }

//     const deleted = (id) => {
//         axios.get('https://mytravels.store/api.php', {
//             params: {
//                 id: id,
//                 action: "delete"
//             }
//         })
//         .then(() => {
//             alert("Deleted");
//             getdata();
//         })
//         .catch((error) => {
//             console.log(error, " Getting Error");
//             alert("Error");
//         });
//     }

//     const edit = (data) => {
//         setName(data.name);
//         setEmail(data.email);
//         setIsEditing(true);
//         setEditId(data.id);
//     }

//     useEffect(() => {
//         getdata();
//     }, []);

//     const getdata = () => {
//         axios.get('https://mytravels.store/api.php')
//         .then((data1) => {
//             console.log(data1.data, "Show Data");
//             setValue(data1.data);
//         })
//         .catch((error) => {
//             console.log(error, " Getting Error");
//         });
//     }

//     return (
//         <>
//             <div className="container">
//                 <h2> {isEditing ? "Edit Data" : "Add Data"} </h2>
//                 <form onSubmit={handlesubmit}>
//                     <label>Name: </label>
//                     <input type="text" placeholder="Enter Your Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                     <br /> <br />

//                     <label>Email: </label>
//                     <input type="text" placeholder="Enter Email Id"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                     <br /> <br />

//                     <input type="submit" value={isEditing ? "Update" : "Submit"} />
//                 </form>
//             </div>

//             <div className="container p-3">
//                 <h1> Show All Users </h1>

//                 <table className="table table-bordered m-3">
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Created</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {value.map((d, i) => (
//                             <tr key={i}>
//                                 <td>{d.id}</td>
//                                 <td>{d.name}</td>
//                                 <td>{d.email}</td>
//                                 <td>{d.created_at}</td>
//                                 <td>
//                                     <button onClick={() => edit(d)}>Edit</button>
//                                     <button onClick={() => deleted(d.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }



import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Axiosform()
{
    const [name , setName] =useState("");
    const [email, setEmail] = useState("");

    const [value , setValue] =useState ([]);


    const handlesubmit =(event) =>
    {
        event.preventDefault();

        axios.get("https://mytravels.store/api.php" ,
        {
            params:{
                name:name,
                email:email,
                action:"create"
            }
        }
    )
        .then ( (data1) =>
            {
                alert("added");
                getdata();
                setName("");
                setEmail("");
            })
            .catch( (error)=>
            {
                console.log(error , " Getting Error");
                alert("Error")            
            })   
    }


    const deleted = (id) =>
    {
      axios.get('https://mytravels.store/api.php',
        {
            params:{
                id:id,
                action:"delete"
            }
        }
      )
      .then ( (data1) =>
        {
            alert("Delete");
            getdata();
            setName("");
            setEmail("");
        })
        .catch( (error)=>
        {
            console.log(error , " Getting Error");
            alert("Error")
            
        })
    }
   

    useEffect ( () =>
    {
        getdata();
    },[])


    const getdata =() =>
    {
        axios.get('https://mytravels.store/api.php')
        .then ( (data1) =>
        {
            console.log(data1.data , "Show Data");
            setValue(data1.data);
        })
        .catch( (error)=>
        {
            console.log(error , " Getting Error");
        })

    }


    return(
        <>
        <div className="container">
            <h2> Add Data </h2>
            <form onSubmit={handlesubmit}>
                <lable>Name : </lable>
                <input type="text" placeholder="Enter Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <br /> <br />

                <label> Email :  </label>
                <input type="text"  placeholder="Enter Email Id"
                value={ email}
                onChange={(e) => setEmail(e.target.value)} />
                <br /> <br />

                <input type="submit" />
            </form>
        </div>
        
        <div className="container p-3">
            <h1> Show All Users </h1>
        
        <table className="table table-bordered m-3 ">
            <tr>
                <th> Id </th>
                <th> Name </th>
                <th> Email </th>
                <th> Created </th>
                <th> Action </th>
            </tr>


        {value.map( (d,i) =>
        (
            <tr key={i}>
                <td> {d.id} </td>
                <td> {d.name} </td>
                <td> {d.email} </td>
                <td> {d.created_at} </td>
                <td> <button> Edit </button>
                <button onClick={() => deleted(d.id)}> Delete </button> </td>
            </tr>
        )
        )
        }    

        </table>

        </div>
        
        
        </>
    )
}