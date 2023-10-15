/*import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";
import axios from "axios";

export default function PrivateRoute () {
    //context
    //const [auth, setAuth]=useAuth();
    const { auth, setAuth } = useAuth();
    //state
    const [ok, setOkay]= useState(false);

useEffect(()=>{
    const authCheck = async ()=> {
        const {data}= await axios.get(`/auth-check` );
        if (data.ok){
            setOkay(true);
        }else{
            setOkay(false);
        }
    };
    authCheck();
}, [auth?.token]);



   /* useEffect(()=>{
        if(auth?.token){
            setOkay(true);
        }else{
            setOkay(false);
        }

    }, [auth?.token]);*/
   // return ok?<Outlet/> :<Loading/>;
//};
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";
import axios from "axios";

export default function PrivateRoute() {
  const { auth, setAuth } = useAuth();
  const [ok, setOkay] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const { data } = await axios.get(`/auth-check`);
        if (data.ok) {
          setOkay(true);
        } else {
          setOkay(false);
        }
      } catch (error) {
        console.error("An error occurred during authCheck:", error);
        setOkay(false); // Set okay to false on error
      }
    };
    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
}

