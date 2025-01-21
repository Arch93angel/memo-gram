import { toast } from "react-toastify"

export const toastError = (
    message:string, 
    // setLoading?:setLoadingType
) =>{
    toast.error(message)
    // if(setLoading) setLoading(false)
}
export const toastSuccess = (
    message:string, 
    // setLoading?:setLoadingType
) =>{
    toast.success(message)
    // if(setLoading) setLoading(false)
}
export const toastWarning = (
    message:string, 
    // setLoading?:setLoadingType
) =>{
    toast.warn(message)
    // if(setLoading) setLoading(false)
}
export const toastInfo = (
    message:string, 
    // setLoading?:setLoadingType
) =>{
    toast.info(message)
    // if(setLoading) setLoading(false)
}