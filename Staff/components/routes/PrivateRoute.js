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