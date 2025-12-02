import { useState,useEffect } from "react";
import { Navigate } from "react-router";
import { verifyToken } from "./Auth";

const ProtectedRoute =({children})=>{
    const [isValid,setisValid]= useState(null);
    useEffect(()=>{
        const checkAuth = async()=>{
            const result = await verifyToken();
            setisValid(result.valid);
        };
        checkAuth();
    },[]);
    if(isValid===null) return <p>checking authentication...</p>;
    if(!isValid) return<Navigate to= "/login" replace/>;
    return children;
};

export default ProtectedRoute;


