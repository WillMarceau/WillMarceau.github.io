import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectCard({ onClick, name, desc, role, tags }) {

    return (
        <button className="projButton" onClick={onClick}>
            <div className="projButtonLayout">
                <div>
                    <img src="/lets-cook.png" alt="logo" className="projPic"/>
                </div>
                <div className="projInfo">
                    <div className="nameIcon">
                        <h4 className="projName montserrat-bold">{name}</h4>
                        <OpenInNewIcon className="icon" fontSize="small"/>
                    </div>
                    <p className="projDesc montserrat-light">{desc}</p>
                    <div className="techList">
                        {tags.map((tag, index) => (
                            <p key={index} className="montserrat-bold tag" >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ProjectCard;