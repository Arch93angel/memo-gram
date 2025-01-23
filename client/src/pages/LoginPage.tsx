import Login from "../components/Login"
// import Register from "../Components/Register"


const LoginPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center p-10">
        <Login/>
        <div className="h-full w-full bg-gradient-to-r from-myBlue to-myCyan opacity-70 absolute top-0 -z-10"/>
        <div className="h-full w-full absolute bg-pattern top-0 -z-20"/>
    </div>
  )
}

export default LoginPage