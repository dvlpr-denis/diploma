import React from 'react';
import './edit-header.css';
import {Link} from 'react-router-dom';

function EditHeader () {
    return (
        <header className="editheader">
            <Link to="/">
                <img src="src/components/editheader/image/user.png" alt=""/>
            </Link>
        </header>
    );
}

export default EditHeader;