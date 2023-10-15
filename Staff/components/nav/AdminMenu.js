import {NavLink} from "react-router-dom";


export default function AdminMenu(){
    return(
        <>
         <div className="p-3 t-2 mb-2 h4 bg-light">Admin Links</div>

<ul className="list-group list-unstyled">
    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/category"
        >
            Create Department
        </NavLink>
    </li>

    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/employee"
        >
            Create Employee
        </NavLink>
    </li>
</ul>
</>
    );
}