import { toastError, toastInfo } from "./toast"


const catchError =(error:{code?:string})=>{
    const {code} = error
    if (code === "HTTP_400_BAD_REQUEST") {
        toastError("User Not Found")
    } else if(code === "auth/weak-password"){
        toastError("Password should be atleast 6 characters")
    } else if(code === "auth/user-not-found"){
        toastError("User Not Found")
    } else if (code === "auth/email-already-in-use"){
        toastError("Email Already Exisst")
    } else if (code === "auth/wrong-password"){
        toastError("Wrong Password")
    } else if (code === "auth/requires-recent-login"){
        toastInfo("Logout and Login before updating profile information")
    } else if (code === "unavailable"){
        toastError("firebase client is offline")
    } else toastError("An error occurred!")
        console.log(error)
}
export default catchError