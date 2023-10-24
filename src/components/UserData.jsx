import { useEffect } from "react";
import { useState } from "react";
import Home from "./Home";

const UserData = () => {
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUserData(data))

    },[])
    return (
        <>
           <h1 className="text-[25px] font-mono font-semibold">Friend :{userData.length} </h1>
          {
             userData.map((data,i)=>(
                <Home saveData={data} key={i}/>
             ))
          }
        </>
    );
};

export default UserData;