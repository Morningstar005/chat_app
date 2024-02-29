import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const login = async (userName, password) => {
        const success = handleInputCheck(userName,password)
        if(!success) return;

        setLoading(true)
        try {
            // console.log("2",userName,password)
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            })

            const data = await res.json()
            if(data.error){
                // console.log(data)
                throw new Error(data.error)
            }

            localStorage.setItem("authUserInfo",JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading,login}
}

export default useLogin


function handleInputCheck(userName,password){
    if(!userName, !password){
        toast.error("Please Check userName and password");
        return false;
    }
    return true;
}