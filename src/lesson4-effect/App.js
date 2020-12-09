
import React , {useState,useReducer} from "react";

const UserData = {
    id: "134567iop",
    firstName: "Bill",
    lasteName: "Willon",
    city: "Hubei",
    state: "Beijing",
    email: "wwwtest@kk.com",
    admin: false,
  };

  
  const User = function(){
    // const [user,setUser] = useState(UserData)
    const [user, setUser] = useReducer((user,newDetail)=>({...user,...newDetail}), UserData)
    return <div>
        <h1>
            {user.firstName} {user.lasteName} -{user.admin?"Admin":"User"}
        </h1>
        <p>
            Location: {user.city} {user.state}
        </p>
        {/* <button onClick={()=>setUser({...user,admin: !user.admin})}>Toggle admin</button> */}
        <button onClick={()=>setUser({admin: !user.admin})}>Toggle admin</button>
    </div>
  }

  export default function App(){
      return <User/>;
  }