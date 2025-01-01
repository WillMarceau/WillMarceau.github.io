import React from "react";

function ProjectCard({ onClick, name, desc, role }) {

    return (
        <button className="projButton" onClick={onClick}>
            <div className="projButtonLayout">
                <div>
                    <img src="/lets-cook.png" alt="logo" className="projPic"/>
                </div>
                <div className="projInfo">
                    <h4 className="projName montserrat-bold">{name}</h4>
                    <p className="montserrat-light">{desc}</p>
                    <div className="techList">
                        <p className="montserrat-light">React</p>
                        <p className="montserrat-light">CSS</p>
                        <p className="montserrat-light">Python</p>
                        <p className="montserrat-light">Flask</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ProjectCard;