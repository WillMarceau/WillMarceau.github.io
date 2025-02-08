import React from "react";
import ProjectCardContainer from "../containers/projectCardContainer";

function Projects() {
    
    return(
        <section id="Projects">
            <h3 className="contentHeader">Projects</h3>
            <div className="projList">
                <ProjectCardContainer name="let's Cook" role="frontend manajor" desc="A login based web application made for those who struggle 
                with meal planning. The main purpose of the website is the user will be presented potential meals to cook in a Tinder-inspired manor. The user then can put the meal in their meal plan, dislikes or save the
                meal to their liked meal list. Any meal added to the meal plan will automaticalluy populate a shopping list for you to make the process of meal planning as painless as possible." 
                tags={["React", "CSS", "Python", "Flask", "SQL"]} link="https://github.com/lilylogan/cs422_project" img="/lets-cook.png"/>
                <ProjectCardContainer name="MRI Tumor Classifier" desc="Currently in Progress, this is a ML model that can scan MRI images to classify brain tumors into 
                four categories, Glioma Tumor, Meningioma Tumor, Pituitary Tumor and No Tumor. We are attempting to use a Multilayer Perceptron Architecture and are focusing our model on having 
                a low Recall or false negative rate. Additionally, the output of the model will change based on how confident it is in its classification."
                tags={["Python", "Pytorch"]} link="https://github.com/WillMarceau/cs453_project" img="/MRI_Icon.png"/>
                <ProjectCardContainer name="Story Secure" desc="Currently in Progress in a private Repo, this application aims to help those who can not keep up with Cyber Security Standards of today either due to memory issues, technical illiteracy or
                an inability to access modern tech. Our solution is a local secure password manager where you sign in with a sequence of 6 images that form a story. This story password was inspired by memory research to enable users to better remember
                a password, while keeping it hard to crack. This way we can give users a safe way to store more advanced passwords for other applications and keep up with evolving Security Standards." 
                tags={["Python", "Tkinter", "SQLite"]} img="/StorySecure_Logo.webp"/>
            </div>
        </section>
    )
}

export default Projects