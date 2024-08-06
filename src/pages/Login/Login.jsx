import { Link, useLocation, useNavigate,} from "react-router-dom";
import img from "../../assets/image/img/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Axios } from "axios";
//import UseAuth from "../../Hooks/UseAuth";


const Login = () => {
   // const {signIn} = UseAuth();
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)


    const handleLogin = e =>{
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
      //  console.log(email,password);


        signIn(email,password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
           
            // navigate(location?.state ? location?.state: '/')
          
            //get access token
           Axios.post('http://localhost:4000/jwt',user,{withCredentials:true})
           .then(res =>{
            console.log(res.data)
            if(res.data.success){
                navigate(location?.state ? location?.state: '/')
            }
           })
        })
        .catch(error =>{
            console.log(error)
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-12">
                <img src={img} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login now</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="LOGIN" />
                    </div>
                </form>
                <p className="my-4 text-center">New to Car Doctors <Link className="text-orange-600 font-bold" to='/signUp'>Sign Up</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;