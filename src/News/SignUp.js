import React,{useState} from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function SignUp(){

const [email, setEmail] = useState("");
const [password,setPassword] = useState("");

const signUp =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        console.log(userCredential)
    })
    .catch((error) => {
        console.log(error);
      });
}

    return(

        <div>        
                <form className="container" onSubmit={signUp}>
                    <h3 className="heading1">Create Account</h3>
                {/* <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleChange}/> 
                </div> */}
                <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">SIGNUP</button>
                </form>
            
        </div>
    )
}