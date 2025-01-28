import { logout } from "../redux/authSlice";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { useDispatch } from "react-redux";




function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const handleSignOut =()=>{
    dispatch(logout());
    navigate('/auth');
  }

  return (
    <div className="flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white">
        <img className="w-[70px] drop-shadow cursor-pointer" 
            src="https://res.cloudinary.com/dfogh1n6r/image/upload/v1737123786/logo-removebg_pau6es.png" alt="logo" />
        <div className="flex gap-2">
            <Button text="Add New Memory" secondary/>
            <Button text='Log out' onClick={handleSignOut}/>
        </div>
    </div>
  )
}

export default Header


