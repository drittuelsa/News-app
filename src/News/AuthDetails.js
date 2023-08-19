import React, {useEffect , useState} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export function AuthDetails(){

    const [authUser, setauthUser] = useState(null);

    useEffect(() =>{
        const list = onAuthStateChanged(auth , (user)=> {
            if (user){
                setauthUser(user);
            }
            else{
                setauthUser(null);
            }
        })
        return () => {
            list();
          };
    },[])

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
          })
          .catch((error) => console.log(error));
      };

    return(
        <div className="heading1">
          <span>{authUser ?<>{`Signed as ${authUser.email}`} <button className="login btn btn-light head2" onClick={userSignOut}><b>SignOut</b></button></> : <p>Signed out</p>}</span>  
        </div>
    )
}