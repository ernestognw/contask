import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="page-sidebar">
      <a className="logo-box" href="/">
        <img className="logo-image" src="images/isotype.png" alt="isotype"/>
        <span><img className="logo-image" src="images/logotype.png" alt="logotype"/></span>
        <i className="icon-close" id="sidebar-toggle-button-close" />        
      </a>
      <div className="slimScrollDiv"><div className="page-sidebar-inner">
        <div className="page-sidebar-menu">
            <ul className="accordion-menu">
                <li className="active-page open">
                    <Link to="/">
                        <i className="menu-icon fa fa-clone"></i><span>Balanza</span>
                    </Link>
                </li>
                <li>
                    <a onClick={props.notifHandler}>
                        <i className="menu-icon fa fa-list"></i><span>Listado de Cuentas</span>
                    </a>
                </li>
                <li>
                    <Link to="/auth">
                        <i className="menu-icon fa fa-user"></i><span>Inicia sesión</span>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
      <div className="slimScrollBar"></div>
      <div className="slimScrollRail"></div>
      </div>
    </div>
  );
}

export default Navbar;
