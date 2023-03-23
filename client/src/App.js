import React from 'react'
import Signup from './compennts/signup'
export const App = () => {
  return (
    <div>
      <Signup></Signup>
    </div>
  )
}
export default App




// import './App.css';
// import { useState } from 'react';
// import axios from "axios"

// import React from 'react'

// export const App = () => {
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/users', {
//         name: username,
//         email,
//         password,
//       });
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <label className="label">Username:</label>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
//       <br />
//       <label className="label">Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
//       <br />
//       <label className="label">Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
//       <br />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   )
// }





// // import './App.css';
// // import { useState, useEffect } from 'react';
// // import axios from "axios"

// // function App() {
// //   const [signupObg, setSignupObg] = useState({
// //     name: "",
// //     email: "",
// //     password: ""
// //   })

// //   const handleChange = (e) => {
// //     setSignupObg({
// //       ...signupObg,
// //       [e.target.name]: e.target.value
// //     })

// //   }

// //   useEffect(() => {
// //     console.log(signupObg)


// //   }, [signupObg])


// //     // useEffect={
// //     //   const data=axios.post("http://localhost:5000/users")
// //     //   console.log(data);


// //     // }
// //   const handleSignup = (e) => {
// //     // e.preventDefault();

// //     // var options = {
// //     //   method: 'POST',
// //     //   url: 'http://localhost:5000/users',
// //     //   headers: { Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)' }
// //     // };

// //     // axios.request(options).then(function (response) {
// //     //   console.log(response.data);
// //     //   // alert ("sucessefully signed up")
// //     // }).catch(function (error) {
// //     //   console.error(error);
// //     // });
// //   }
// //   return (
// //     <div>
// //       <h1>Sign Up</h1>
// //       <form onSubmit={handleSignup}>
// //         <label htmlFor="name">Name:</label>
// //         <input type="text" onChange={handleChange} id="name" name="name" />
// //         <br />
// //         <label htmlFor="email">Email:</label>
// //         <input type="email" onChange={handleChange} id="email" name="email" />
// //         <br />

// //         <label htmlFor="password">Password:</label>
// //         <input type="password" onChange={handleChange} id="password" name="password" />
// //         <br />

// //         <button type="submit">Sign Up</button>
// //       </form>
// //     </div>
// //   );
// // }


// export default App;
