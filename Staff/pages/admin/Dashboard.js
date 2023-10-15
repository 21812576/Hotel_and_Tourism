import { NavLink } from "react-router-dom";
import {useAuth} from "../../context/auth";
import Jumbotron from "../../components/cards/jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";

export default function AdminDashboard(){

    //context

    const [auth,setAuth] = useAuth();


    return(

        <>

        <Jumbotron title={`Hello ${auth?.user?.name}`}
        subTitle = "Admin Dashboard"
        />

                 <div className ="container-fluid">
                 <div className="row">   
                 <div className="col-md-3">
                    <AdminMenu/>
                 </div>
                 <div className = "col-md-9">
                 <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>
                 <ul className="col-group">
                    <li className="list-group-item">{auth?.user?.name}</li>
                    <li className="list-group-item">{auth?.user?.email}</li>
                    <li className="list-group-item">Admin</li>
                    
                </ul>
             </div>
            </div>
        </div>

        </>
        
    );
}