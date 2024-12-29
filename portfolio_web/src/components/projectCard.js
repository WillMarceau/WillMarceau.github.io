import React from "react";

function ProjectCard({ onClick, name, desc, role }) {

    return (
        <button className="projButton" onClick={onClick}>
            <div>
                Pic
            </div>
            <p>{name}</p>
            <p>{desc}</p>
            <p>{role}</p>
            <div>
                <p>tags here</p>
            </div>
        </button>
    )
}

export default ProjectCard;