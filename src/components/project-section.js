import { useEffect, useState } from 'react';
import Project from "./project";
import axios from 'axios';

//For testing
const ProjectSection = (props) => {
    const [projectsList, setProjectsList] = useState(null);
    let formattedProjects = null;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/posts/')
    .then((response) => setProjectsList(response.data))
    .catch((err) => console.log(err))
        
    }, [])
    console.log(projectsList);
    if(projectsList === null) {
        formattedProjects = (<h1>Loading Projects...</h1>)
    } else {
        formattedProjects = projectsList.map(item => <Project image={item.post_image} title={item.post_title} content={item.post_content} />)
}

return(
    <div id="project-section" className="container-section">
        <h1 className="section-header">Projects</h1>
        <div className="projects-div">
        {formattedProjects}
        </div>
    </div>
)
}

export default ProjectSection;