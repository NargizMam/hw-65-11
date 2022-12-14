import React from 'react';
import {NavLink} from "react-router-dom";

interface Props {
    pageName: string[];
}

const Navbar: React.FC<Props> = ({pageName}) => {
    let navItem = null;
    if(pageName) {
        navItem = pageName.map(item => {
            return (
                <NavLink className='navbar-toggler'
                         style={{textTransform: 'uppercase'}}
                         to={`/pages/${item}`}
                         key={Math.random()}
                >{item}</NavLink>
            )
        });
    }
    return (
        <nav className="navbar bg-light">
            <div className="container container-fluid">
                <NavLink className='navbar-brand' to='/'>SCHOOL</NavLink>
                <div className=''>
                    {navItem}
                    <NavLink className='navbar-toggler'
                             style={{textTransform: 'uppercase', marginLeft:20}}
                             to={`/admins`}
                    >Admin</NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;