// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ onLogin }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onLogin(username, password);
//         navigate("/form");
//     };

//     return (
//         <>
//         <div className="container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Username: </label>
//                 <input 
//                     type="text" 
//                     placeholder="Enter Your Username" 
//                     value={username} 
//                     onChange={(e) => setUsername(e.target.value)} 
//                 />
//                 <br /><br />
//                 <label>Password: </label>
//                 <input 
//                     type="password" 
//                     placeholder="Enter Your Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                 />
//                 <br /><br />
//                 <input type="submit" value="Login" />
//             </form>
//         </div>

// </>
//     );
// }




import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import './Login.css'
export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
    navigate("/form");
  };

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
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

              <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit">Login</MDBBtn>
              </form>
              
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
