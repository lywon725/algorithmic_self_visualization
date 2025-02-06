import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavbarBox = styled.div`

`


function Navbar() {
    

    return (
        <div>
            <NavbarBox>
                <Link to={'/'}>Algorithm profile</Link>
                <Link to={'/My_Profile'}>My_Profile</Link>
            </NavbarBox>
        </div>
    )
}

export default Navbar