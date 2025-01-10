
import { AiFillHome, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import Theme from './Pages/theme'
import { Link, useNavigate } from "react-router-dom";
import { ImUpload } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import Insta from './Pages/instagram.svg'
import Connect from './Pages/connect.svg'
import { toast } from 'react-toastify';


function Left() {
   
    const navigate = useNavigate()
  return (
    
         <aside 
                className="w-1/5 border-e-2 border-secondary-content p-6  hidden lg:flex flex-col   h-screen"
                aria-label="Sidebar Navigation"
            >
                
                <ul className="space-y-11">
                    <li>  <Theme/> 
                    <span className="flex items-center gap-0">
                        <img src={Connect} alt="" />
            <img src={Insta} alt="Instagram Logo" />
        </span>
          
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <AiFillHome className="text-2xl" />
                        <span className="text-2xl font-bold "><Link to="/home">Home</Link></span>
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <ImUpload  className="text-2xl" />
                        <span className="text-2xl font-bold"><Link to="/upload">Create Post</Link></span>
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <BsSearch className="text-2xl" />
                        <span className="text-2xl font-bold"><Link to="/search">Search</Link></span>
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <BiUserCircle className="text-2xl" />
                        <span className="text-2xl font-bold"><Link to="/userprofile">Profile</Link></span>
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <AiOutlineSetting className="text-2xl" />
                        <span className="text-2xl font-bold">Settings</span>
                    </li>
                    <li className="flex items-center space-x-3  cursor-pointer">
                        <AiOutlineLogout className="text-2xl" />
                        <span onClick={() => {
                            localStorage.removeItem("authToken");
                            localStorage.removeItem("userId");
                            toast.warn("Logout Successfully");
                            navigate('/login');
                        }} className="text-2xl font-bold cursor-pointer">Logout</span>
                           
                       
                    </li>
                </ul>
                
            </aside>
    
  )
}

export default Left