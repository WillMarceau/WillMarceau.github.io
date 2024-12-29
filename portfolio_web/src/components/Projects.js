import React from "react";
import ProjectCardContainer from "../containers/projectCardContainer";

function Projects() {
    return(
        <div id="Projects">
            <h3 className="contentHeader">Projects</h3>
            <div className="projList">
                <ProjectCardContainer name="let's Cook" role="frontend manajor" desc="description here" />
            </div>
        </div>
    )
}

export default Projects