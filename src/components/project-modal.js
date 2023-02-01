import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai';

const ProjectModal = (props) => {
    const { image, title, content, show, setShow, handleShow} = props;

    const handleClose = () => setShow(false);

    
    return (
        <>
        <Modal show={show} fullscreen={true} onHide={handleClose} className="modal-xl"  centered>
            <Modal.Body className='modal-project-custom'>
                <button className='modal-close-btn' onClick={handleClose}> <AiOutlineClose /> </button>
                <img className='modal-img' src={image}></img>
                <div className='modal-divider'>&nbsp;</div>
                <div className='modal-body-div'>
                <p style={{fontWeight: 'bold'}}>{title}</p>
                <p>{content}</p>
                </div>
            </Modal.Body>

        </Modal>
        </>
    )
        
}

export default ProjectModal;