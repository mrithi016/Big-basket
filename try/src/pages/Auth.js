
import axios from 'axios';

const API_URL='http://localhost:5500/';

export const register=async(username,password)=>{
     
    try{
        await axios.post(`${API_URL}register`,{username,password})
    }catch(err){
        console.error('Error during login:', err.response ? err.response.data : err.message);
        throw new Error('Registration Failed')
 
    }

}

export const login=async(username,password)=>{
    try{
        const response= await axios.post(`${API_URL}login`,{username,password})
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token; 
    }catch(err){
        console.error('Error during login:', err.response ? err.response.data : err.message);
        throw new Error('Login Failed');
    }
}

export const verifyToken = async()=>{
    const token = localStorage.getItem('token');
    if(!token) return{valid:false};
    try{
      const response = await axios.post(`${API_URL}verifyToken`,{},{
        headers:{ Authorization:`Bearer ${token}`},
      }
      );
      return response.data;
    }catch{
        localStorage.removeItem('token');
        return{valid:false};
    }
};
export const logout=()=>{
    localStorage.removeItem('token');
    window.location.href="/login"
}
  