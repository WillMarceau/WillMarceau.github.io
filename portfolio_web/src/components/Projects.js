import React from "react";
import ProjectCardContainer from "../containers/projectCardContainer";

function Projects() {
    
    return(
        <section id="Projects">
            <h3 className="contentHeader">Projects</h3>
            <div className="projList">
                <ProjectCardContainer name="let's Cook" role="frontend manajor" desc="A login based web application made for those who struggle 
                with meal planning. The main purpose of the website is the user will be presented potential meals to cook in a tinder inspired manor. The user then can put the meal in their meal plan, dislikes or save the
                meal to their liked meal list. Any meal added to the meal plan will automaticalluy populate a shopping list for you to make the process of meal planning as painless as possible." 
                tags={["React", "CSS", "Python", "Flask"]} link="https://github.com/lilylogan/cs422_project" />
            </div>
        </section>
    )
}

export default Projects