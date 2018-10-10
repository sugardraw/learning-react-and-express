
import React from "react";


const Header = props => {
    return (

        <header className="text-center mt-3 p-3" >
            <h1 className="text-primary">My List </h1>
            <span className="tagline text-info">{props.tagline}</span>
        </header >

    )
}








export default Header;