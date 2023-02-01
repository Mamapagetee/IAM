import { useState, useRef } from 'react';
import ProjectModal from './project-modal';

const Project = (props) => {
    const { image, title, content } = props;
    const projectTitle = useRef(null);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);


    return (
        <div className="div-project">
            <img className="project-img" src={image} onMouseEnter={() => projectTitle.current.style.opacity = 0} onMouseLeave={() => projectTitle.current.style.opacity = 1} onClick={handleShow}></img>
            <p ref={projectTitle} className="project-title">{title}</p>
            <ProjectModal {...props} setShow={setShow} show={show} handleShow={handleShow} />
        </div>
    )
}

export default Project;