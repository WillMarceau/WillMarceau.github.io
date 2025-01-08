import React from "react";
import ProjectCard from "../components/projectCard";

function ProjectCardContainer({ name, desc, role, tags, link }) {
    const clickHandler = () => {
        window.open(link, '_blank')
    }

    return (
        <ProjectCard name={name} desc={desc} role={role} onClick={clickHandler} tags={tags}/>
    )
}

export default ProjectCardContainer;