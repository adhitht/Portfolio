import React from "react";
import "../styles/ProjectsListComponent.css"

function ProjectsListComponent({name, image, desc, link}) {
    return (
        <div className="project-wrap">
            <img src={image} alt={name} className="project-image"/>
            <div className="project-name" onClick={()=> { link ? window.open(link): console.log('No Link found')}}>{name}</div>
            <div className="project-desc">{desc}</div>
        </div>
    )
}

export default ProjectsListComponent;