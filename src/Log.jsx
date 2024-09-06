// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Log() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = (event) => {
//         event.preventDefault();

//         axios.get("https://mytravels.store/api.php", {
//             params: {
//                 name: name,
//                 email: email,
//                 action: "login"
//             }
//         })
//         .then((response) => {
//             console.log(response.data , "getting response")
//             if(response.data=="User Not Found")
//             {
//                 alert("User Not Found")
//             }
//             else
//             {
//                 alert("Login successful");
//                 navigate("/new"); 
//             }
            
            
//         })
//         .catch((error) => {
//             console.error("Error logging in:", error);
//             alert("Error logging in. Please try again.");
//         });
        
//             setName("");
//             setEmail("");
//     }

//     return (
//         <div className="container">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     placeholder="Enter Your Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <br /><br />

//                 <label>Email:</label>
//                 <input
//                     type="text"
//                     placeholder="Enter Email Id"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br /><br />

//                 <input type="submit" value="Login" />
//             </form>
//         </div>
//     );
// }




// import React, {  useState } from "react";
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
// import { Link } from 'react-router-dom';
// import './Login.css'
// export default function Log () {
//     const [name , setName] =useState("");
//     const [email, setEmail] = useState("");

//     // const [value , setValue] =useState ([]);


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
//         .then ( (res) =>
//             {
//                 alert("added");
//                 setName("");
//                 setEmail("");
//             })
//             .catch( (error)=>
//             {
//                 console.log(error , " Getting Error");
//                 alert("Error")            
//             })   

//             // useEffect ( () =>
//             //     {
//             //         getdata();
//             //     },[])
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

//               <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Register into your account</h5>

//               <form onSubmit={handlesubmit}>
//                 <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={name} onChange={(e) => setName(e.target.value)} />
//                 <MDBInput wrapperClass='mb-4' label='email' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />

//                 <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit" value="Login">Login</MDBBtn>
//                 <Link to={'/new'}>
//                 <MDBBtn className="mb-4 px-5" color='danger' size='lg' >Register</MDBBtn></Link>

//               </form>
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// }




import React, { useState } from "react";
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
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
export default function Log () {
    const [name , setName] =useState("");
    const [email, setEmail] = useState("");

const navigate = useNavigate();
    const handlesubmit =(event) =>
    {
        event.preventDefault();

        axios.get("https://mytravels.store/api.php" ,
        {
            params:{
                name:name,
                email:email,
                action:"login"
            }
        }
    )
        .then ( (res) =>
            {
              if(res.data == 'User Found'){
                alert ('Login Success')
                navigate('/home')
                localStorage.setItem('sname', name)
              }
            })
            .catch( (error)=>
            {
                console.log(error , " Getting Error");
                alert("Error")            
            })   

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
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login into your account</h5>

              <form onSubmit={handlesubmit}>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={name} onChange={(e) => setName(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='email' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit" value="Login">Login</MDBBtn>
                <Link to={'/new'}>
                <MDBBtn className="mb-4 px-5" color='danger' size='lg' >Register</MDBBtn></Link>

              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
