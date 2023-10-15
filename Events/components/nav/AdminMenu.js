import {NavLink} from "react-router-dom";


export default function AdminMenu(){
    return(
        <>
         <div className="p-3 t-2 mb-2 h4 bg-light">Admin Links</div>

<ul className="list-group list-unstyled">
    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/Hallcategory"
        >
            Create  Hall Category
        </NavLink>
    </li>

    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/hall"
        >
            Create Halls
        </NavLink>
    </li>

    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/Eventcategory"
        >
            Create Event Category
        </NavLink>
    </li>
    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/event"
        >
            Create Events
        </NavLink>
    </li>
    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/events"
        >
            Events
        </NavLink>
    </li>
    <li>
        <NavLink className="list-group-item"
        to="/dashboard/admin/halls"
        >
            Halls
        </NavLink>
    </li>
</ul>
</>
    );
}
