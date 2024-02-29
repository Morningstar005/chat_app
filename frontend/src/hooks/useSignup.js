import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
const [loading,setLoading] = useState(false);
const {authUser,setAuthUser}=useAuthContext()

const signup = async({fullName,userName,password,confirmPassword,gender})=>{
    // console.log(fullName,userName,password,confirmPassword,gender)
    const success = handleInputError(fullName,userName,password,confirmPassword,gender);

    if(!success)return;

    try {
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
        })
        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }
        // console.log(data);

        localStorage.setItem("authUserInfo",JSON.stringify(data))
        setAuthUser(data)
        
    } catch (error) {
        toast.error(error.message);
    } finally{
        setLoading(false);
    }
};

return {loading,signup}
}

export default useSignup


function handleInputError(fullName,userName,password,confirmPassword,gender){
    // console.log(fullName,userName,password,confirmPassword,gender)
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fill");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Password do not match");
        return false;
    }
    if(password.length<6){
        toast.error("Password must be atlease 6 character");
        return false;
    }

    return true;
}