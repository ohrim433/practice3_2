import React from 'react';

function Header({authorSort, citySort}) {
    const sa = () => {
        authorSort()
    };

    const sc = () => {
        citySort()
    };

    return (

        <nav className="navbar navbar-dark bg-primary">
            <h1>Header</h1>
            <a href="#" className="btn btn-primary" onClick={sa}>byAuthorName</a>
            <a href="#" className="btn btn-primary" onClick={sc}>byCity</a>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </nav>
    );
}

export default Header;

// rsf - shortcut for functional component