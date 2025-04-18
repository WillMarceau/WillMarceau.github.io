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
                <ProjectCardContainer name="MRI Tumor Classifier" desc="A CNN ML model with a focus on low recall rate that can scan MRI images to classify brain tumors into 
                four categories, Glioma Tumor, Meningioma Tumor, Pituitary Tumor and No Tumor. It's best performance achieved over a 97% accuracy and 95% recall on all classes, Minimizing false negative diagnoses that could negatively impact a patient's survival rate."
                tags={["Python", "Pytorch", "Juypter"]} link="https://github.com/WillMarceau/cs453_project" img="/MRI_Icon.png"/>
                <ProjectCardContainer name="Story-Pass" desc="An application aims to help those who can not keep up with Cyber Security Standards of today either due to memory issues, technical illiteracy or
                an inability to access modern tech. Our solution is a local secure password manager where you sign in with a sequence of 6 images that form a story. This story password was inspired by memory and graphical password research to enable users to better remember
                a password, while keeping it hard to crack. This way we can give users a safe way to store more advanced passwords for other applications and keep up with evolving Security Standards." 
                tags={["Python", "Tkinter", "SQLite"]} link="https://github.com/SeanLear/Story-Pass" img="/StorySecure_Logo.webp"/>
                <ProjectCardContainer name="Chat Program for Unix" desc="A chat service using a self defined protocol with a client and multiple server architecture where users can chat across different servers. Servers are protected with loop detection and crash recovery and
                messages are passed between servers in the topology." tags={["C / C++", "UDP", "multi-threading"]} link="https://github.com/WillMarceau/Chat-C-Unix" img="/Chat.png"/>
                <ProjectCardContainer name="Wrif" desc="CURRENTLY IN PROGRESS, a 3D puzzle-platformer game set in a futuristic cyberpunk inpsired city. Developed in the Unity game engine." tags={["C#", "Unity"]} link="https://github.com/WillMarceau/Wrif" img="/Temp_Wrif.png"/>
            </div>
        </section>
    )
}

export default Projects