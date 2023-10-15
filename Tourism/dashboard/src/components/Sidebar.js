import React from "react";
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <Link to="/" className="brand-wrap">
                        <img
                            src="/images/tourism.png"
                            style={{height:"46"}}
                            className="logo"
                            alt="Tourism Manager Template"
                        />
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>
                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/"
                                exact={true}
                            >
                                <i className="icon fas fa-home"></i>
                                <span className="text">DASHBOARD</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/packages"
                            >
                                <i className="icon fas fa-briefcase"></i>
                                <span className="text">PACKAGES</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/addpackage"
                            >
                                <i className="icon fas fa-calendar-plus"></i>
                                <span className="text">ADD PACKAGE</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/bookings"
                            >
                                <i className="icon fas fa-list"></i>
                                <span className="text">BOOKINGS</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                className="menu-link"
                                to="/users"
                            >
                                <i className="icon fas fa-user"></i>
                                <span className="text">MANAGE USERS</span>
                            </NavLink>
                        </li>
                    </ul>
                    <br/>
                    <br/>
                </nav>
            </aside>
        </div>
    )
}


export default Sidebar;