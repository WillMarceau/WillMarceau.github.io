import React from "react";

function Download({ onClick }) {
    // this function holds the html for my downlaod button

    return(
        <button onClick={onClick} className="download">Download Resume</button>
    )
}

export default Download;