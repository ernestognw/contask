import React from "react";
import './sidebar.css';

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
                    <a href="/">
                        <i className="menu-icon fa fa-clone"></i><span>Balanza</span>
                    </a>
                </li>
                <li>
                    <a onClick={props.showNotif}>
                        <i className="menu-icon fa fa-list"></i><span>Listado de Cuentas</span>
                    </a>
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
