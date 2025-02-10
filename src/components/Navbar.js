
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {

  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=()=>{
    dispatch(removeUser())
    return navigate('/login')
  }
  const handleHomepage=()=>{
    if(!user){
     return navigate("/")
    }else{
      return navigate("/admin/homepage")
    }
  }
 
  return (


<nav className="flex items-center justify-between p-2 bg-base-100 text-white fixed w-full top-0 z-50 text-lg cursor-pointer">
  
 
   <ul className="flex space-x-8 items-center">
   <li><div className="text-2xl font-bold" onClick={handleHomepage}>Job Portal </div></li>
    <li><Link to={'/home'} className="hover:text-gray-300">Home</Link></li>
    <li><Link to={"/companyreviews"} className="hover:text-gray-300">Company Reviews</Link></li>
    <li><Link to={'/contactus'} className="hover:text-gray-300">Contact Us</Link></li>
  </ul>
  <ul className="flex space-x-6 items-center">
    {/* <li><Link className="hover:text-gray-300">search</Link></li> */}
    {  !user && <><li><Link to={"/login"} className="hover:text-gray-300">Login </Link></li>
    <li><Link to={"/employeeLogin"} className="hover:text-gray-300">Employers / Post Job </Link></li></> }
    {user && <>
      <li><Link to={'/notification'} className="hover:text-gray-300 text-2xl">🕭</Link></li>
      <li><Link to={'/messages'} className="hover:text-gray-300 text-2xl">💬</Link></li>
    <li>
    <div className="dropdown dropdown-end">
         <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between text-base ">
                  Profile
                  <span className="badge">Edit</span>
                </Link>
              </li>
              <li>
                <Link to={"/settings"} className="text-base">Settings</Link>
              </li>
              <li>
                <Link to={"/home"} className="text-base" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
          
    </li>
    </>}
  </ul>
</nav>



    
      
    
  );
};

export default Navbar;
