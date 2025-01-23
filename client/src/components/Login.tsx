import { useState } from 'react'
import Button from './Button'
import Input from './input'
import { useNavigate } from 'react-router-dom';


type Props = {}

const Login = (props: Props) => {
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [signInLoading, setSignInLoading] = useState(false);

  

    const handleSignUp = ()=>{
        const data = {email,password,confirmPassword};
        console.log(data)
        // auth(data, Backend_signUp, setSignUpLoading)
    }
    const handleSignIn = ()=>{
        const data = {email,password};
        console.log(data)
        // auth(data, Backend_signIn, setSignInLoading);
    }

  

  return (
    <div className="w-full  md:w-[450px]">
            <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
              {login ? "Login" : "Register"}
            </h1>
            <div className="bg-white flex flex-col gap-2  p-6 min-h-[150px] rounded-xl drop-shadow-xl">
                <Input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
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