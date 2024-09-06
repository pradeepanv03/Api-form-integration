// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// export default function New() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [value, setValue] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editId, setEditId] = useState(null);
//     // const navigate = useNavigate();
   

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (isEditing) {
//             axios.get("https://mytravels.store/api.php",
//                 {
//                     params: {
//                         id: editId,
//                         name: name,
//                         email: email,
//                         action: "update"
//                     }
//                 }
//             )
//             .then((response) => {
//                 alert("Updated successfully");
//                 getdata();
//                 setName("");
//                 setEmail("");
//                 setIsEditing(false);
//                 setEditId(null);
//             })
//             .catch((error) => {
//                 console.error(error, "Error updating record");
//                 alert("Error updating record");
//             });
//         } else {
//             // Add new record
//             axios.get("https://mytravels.store/api.php",
//                 {
//                     params: {
//                         name: name,
//                         email: email,
//                         action: "create"
//                     }
//                 }
//             )
//             .then((response) => {
//                 alert("Added successfully");
//                 getdata();
//                 setName("");
//                 setEmail("");
//             })
//             .catch((error) => {
//                 console.error(error, "Error adding record");
//                 alert("Error adding record");
//             });
//         }
//     };

//     const handleEdit = (id) => {
//         // Find the record to edit
//         const editedRecord = value.find((item) => item.id === id);
//         if (editedRecord) {
//             setName(editedRecord.name);
//             setEmail(editedRecord.email);
//             setIsEditing(true);
//             setEditId(id);
//         }
//     };

//     const handleDelete = (id) => {
//         axios.get('https://mytravels.store/api.php',
//             {
//                 params: {
//                     id: id,
//                     action: "delete"
//                 }
//             }
//         )
//         .then((response) => {
//             alert("Deleted successfully");
//             getdata();
//             setName("");
//             setEmail("");
//         })
//         .catch((error) => {
//             console.error(error, "Error deleting record");
//             alert("Error deleting record");
//         });
//     };

//     useEffect(() => {
//         getdata();
//     }, []);

//     const getdata = () => {
//         axios.get('https://mytravels.store/api.php')
//         .then((response) => {
//             console.log(response.data, "Show Data");
//             setValue(response.data);
//         })
//         .catch((error) => {
//             console.error(error, "Error fetching data");
//         });
//     };

//     return (
//         <>
//         <div className="container">
//             <h2> {isEditing ? 'Edit Data' : 'Add Data'} </h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <br /> <br />
//                 <label>Email:</label>
//                 <input type="text" placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <br /> <br />
//                 <input type="submit" value={isEditing ? 'Update' : 'Add'} />
//             </form>
//         </div>

//         <div className="container p-3">
//             <h1> Show All Users </h1>
//             <table className="table table-bordered m-3">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Created</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {value.map((d, i) => (
//                         <tr key={i}>
//                             <td>{d.id}</td>
//                             <td>{d.name}</td>
//                             <td>{d.email}</td>
//                             <td>{d.created_at}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(d.id)}>Edit</button>
//                                 <button onClick={() => handleDelete(d.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     );
// }





// import React, { useEffect, useState } from "react";
// import axios from 'axios';


// export default function New()
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




// import React, { useState } from "react";
// import axios from 'axios';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css'
// export default function New () {
//     const [name , setName] =useState("");
//     const [email, setEmail] = useState("");

// const navigate = useNavigate();
//     const handlesubmit =(event) =>
//     {
//         event.preventDefault();

//         axios.get("https://mytravels.store/api.php" ,
//         {
//             params:{
//                 name:name,
//                 email:email,
//                 action:"login"
//             }
//         }
//     )
//         .then ( (res) =>
//             {
//               if(res.data == 'User Found'){
//                 alert ('Login Success')
//                 navigate('/home')
//                 localStorage.setItem('sname', name)
//               }
//             })
//             .catch( (error)=>
//             {
//                 console.log(error , " Getting Error");
//                 alert("Error")            
//             })   

//     }

    


//   return (
// <MDBContainer className="my-5">
//       <MDBCard>
//         <MDBRow className='g-0'>
//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' style={{height:"600px"}} alt="login form" className='rounded-start w-100'/>
//           </MDBCol>

//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>
//               <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 <span className="h1 fw-bold mb-0">Login</span>
//               </div>

//               <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login into your account</h5>

//               <form onSubmit={handlesubmit}>
//                 <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={name} onChange={(e) => setName(e.target.value)} />
//                 <MDBInput wrapperClass='mb-4' label='email' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />

//                 <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit" value="Login">Login</MDBBtn>
//                 <Link to={'/'}>
//                 <MDBBtn className="mb-4 px-5" color='danger' size='lg' >Login</MDBBtn></Link>

//               </form>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// }






import React, {  useState } from "react";
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Login.css'
export default function Log () {
    const [name , setName] =useState("");
    const [email, setEmail] = useState("");

    // const [value , setValue] =useState ([]);


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
        .then ( (res) =>
            {
                alert("added");
                setName("");
                setEmail("");
            })
            .catch( (error)=>
            {
                console.log(error , " Getting Error");
                alert("Error")            
            })   

            // useEffect ( () =>
            //     {
            //         getdata();
            //     },[])
    }

    


  return (
<MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' style={{height:"600px"}} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Register</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Register into your account</h5>

              <form onSubmit={handlesubmit}>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={name} onChange={(e) => setName(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='email' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit" value="Login">Submit</MDBBtn>
                <Link to={'/'}>
                <MDBBtn className="mb-4 px-5" color='danger' size='lg' >Login</MDBBtn></Link>

              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}