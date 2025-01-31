import { useState } from 'react'
import Button from './Button'
import Input from './input'
import { useNavigate, } from 'react-router-dom';
// import { authDataType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { registerUser, loginUser, setToken} from '../redux/authSlice';
import catchError from "../utils/catchError";






const Login = () => {
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [signInLoading, setSignInLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    
    
    
    


  

    const handleSignUp = (e: React.FormEvent)=>{
        e.preventDefault();
        setSignUpLoading(true)
        dispatch(registerUser({ username, password, email, confirmPassword }))
        .unwrap()
        .then(() => {
          
          navigate('/dashboard'); // Navigate to login page after successful registration
      }).catch(error => {
          catchError(error);
          setSignUpLoading(false)
          navigate('/auth'); 
          reset();     
    });
  }
    const handleSignIn = (e: React.FormEvent)=>{
        e.preventDefault();
        setSignInLoading(true)
        dispatch(loginUser({ username, password }))
        .unwrap()
        .then(() => {
          navigate('/dashboard', { replace: true }); // Navigate to dashboard after successful login
          
      }).catch(error => {
          catchError(error);
          setSignInLoading(false)
          navigate('/auth');
          reset();       
    });

  }

    const reset =()=>{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      setUsername(""),
      setEmail(""),
      setPassword(""),
      setConfirmPassword("")
    }

  return (
    <div className="w-full  md:w-[450px]">
            <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
              {login ? "Login" : "Register"}
            </h1>
            <div className="bg-white flex flex-col gap-2  p-6 min-h-[150px] rounded-xl drop-shadow-xl">
                <Input name="username" type="username" value={username} onChange={(e)=>setUsername(e.target.value)}  />
                {!login && <Input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> }
                <Input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {!login && <Input name="confirm-password" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/> }
                {login ? (
                  <>
                    <Button text='Login' onClick={handleSignIn} loading={signInLoading} />
                    <Button onClick={()=> setLogin(false)} text="Register" secondary />
                  </>
                ):(
                  <>
                    <Button text='Register' onClick={handleSignUp} loading={signUpLoading}  />
                    <Button onClick={()=> setLogin(true)} text="Login" secondary />
                  </>
                )}
            </div>
        </div>
  )
}

export default Login


