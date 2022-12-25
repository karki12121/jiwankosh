import { Component } from "react";
import "./NavbarStyles.css";
import { MenuIteams } from "./MenuIteams";

class navbar extends Component{
    render(){
        return(
            <nav className="NavbarIteams">
                <h1 className="navbar-logo">JiwanKosh</h1>
                
                <ul className="nav-menu">
                    {MenuIteams.map((items, index) => {
                        return (
                            <li key = {index}>
                            <a className= {items.cName} href="/">
                            <i className={items.icon}></i>{items.title}
                            </a>
                         </li>
                        );
                    })}
                    <button> SIGN IN </button>
                </ul>
            </nav>
        );
    }
}

export default navbar;