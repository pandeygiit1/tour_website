import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    const token = localStorage.getItem("Protectedtoken")
    if(!token){
       return <Navigate to ="/admin/login"/>
    }else{

        return children
    }
}

export default Protected
