import React from "react";
import ProjectCard from "../components/projectCard";

function ProjectCardContainer({ name, desc, role, tags }) {
    const clickHandler = () => {
        return 1
    }

    return (
        <ProjectCard name={name} desc={desc} role={role} onClick={clickHandler} tags={tags}/>
    )
}

export default ProjectCardContainer;