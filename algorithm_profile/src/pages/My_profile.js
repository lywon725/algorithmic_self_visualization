import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function My_profile() {
    

    return (
        <div>
            <p>Myprofile</p>
            <Link to={'/Search'}>Search</Link>
        </div>
    )
}

export default My_profile