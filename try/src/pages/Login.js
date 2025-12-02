import React, { useState } from 'react';
import { login } from '../pages/Auth';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsucess]=useState('')
     const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');
            setusername('')
            setpassword('')
            setsucess('Successfully Logged In')
            seterror('')
            navigate("/")
           
        }catch(err){
            console.log('Login Error',err)
            seterror('Logged In Failed')
            setsucess('')
       
        }
   }


  return (
    <form onSubmit={handleSubmit}>
    <label>UserName</label>
    <input
        type='text'
        name='name'
        value={username}
        onChange={(e)=>setusername(e.target.value)}/>


 <br></br><br></br>


 <label>Password</label>
    <input
        type='password'
        name='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}/>


<br></br><br></br>


    <button type='submit'>Login</button>
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}


    <p>New User ? <Link to="/reg">Register </Link></p>


</form>
  )
}


export default Login





// import React, { useState } from 'react';
// import { login } from '../pages/Auth';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {

//     const [username,setusername]=useState('');
//     const [password,setpassword]=useState('');
//     const [error,seterror]=useState('');
//     const [success,setsucess]=useState('')
//      const navigate=useNavigate()

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try{
//             const token = await login(username, password);
//             console.log('Login successful, token:', token);
//             alert('Login successful');
//             setusername('')
//             setpassword('')
//             setsucess('Successfully Logged In')
//             seterror('')
//             navigate("/Home")
            
//         }catch(err){
//             console.log('Login Error',err)
//             seterror('Logged In Failed')
//             setsucess('')
        
//         }
//    }

//   return (
//     <form onSubmit={handleSubmit}>
//     <label>UserName</label>
//     <input 
//         type='text'
//         name='name' 
//         value={username}
//         onChange={(e)=>setusername(e.target.value)}/>

//  <br></br><br></br>

//  <label>Password</label>
//     <input 
//         type='password'
//         name='password' 
//         value={password}
//         onChange={(e)=>setpassword(e.target.value)}/>

// <br></br><br></br>

//     <button type='submit'>Login</button>
//     {success && <p style={{color:"Green"}}>{success}</p>}
//     {error && <p style={{color:'red'}}>{error}</p>}

// </form>
//   )
// }

// export default Login

