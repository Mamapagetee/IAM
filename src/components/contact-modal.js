import axios from 'axios';
import { useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';

const ContactModal = (props) => {
    const [show, setShow] = useState(false);

    const formEmail = useRef(null);
    const formSubject = useRef(null);
    const formMessage = useRef(null);
    const formStatus = useRef(null);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Checking if all fields are not blank
        if(formEmail.current.value.trim() === '' || formSubject.current.value.trim() === '' || formMessage.current.value.trim === '') {
            formStatus.current.classList ='contact-form-status contact-form-status-error';
            formStatus.current.textContent = 'Please make sure all inputs are filled in.';
        // Checking if e-mail field contains a valid e-mail address
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail.current.value.trim())) {
            formStatus.current.classList ='contact-form-status contact-form-status-error';
            formStatus.current.textContent = 'Invalid e-mail address';
        } else {
            // Sends request to drf back-end.
            axios.post('http://127.0.0.1:8000/Mail', {
            email: formEmail.current.value.trim(),
            subject: formSubject.current.value.trim(),
            message: formMessage.current.value.trim(),
        })
        .then(() => {
            formEmail.current.value = '';
            formSubject.current.value = '';
            formMessage.current.value = '';
            formStatus.current.classList ='contact-form-status contact-form-status-success';
            formStatus.current.textContent = 'Thanks for reaching out!';
        })
        .then(() => console.log('request sent successfully'))
        .catch(err => console.error(err));
        }
    } 
    
    return (
        <>
        <a className="nav-contact" onClick={handleShow}>Get in touch</a>
        <Modal show={show} onHide={handleClose} className="modal-custom" centered>
            <Modal.Body className="modal-contact-body">
                <button className='modal-close-btn' onClick={handleClose}> <AiOutlineClose /> </button>
                <div className='modal-body-div'>
                    <h3><b>Get in Touch</b></h3>
                    <p ref={formStatus} className='contact-form-status'></p>
                    <form>
                        <div className='contact-modal-header-div'>
                            <input ref={formEmail} className='contact-form-textinput contact-input-left' type='text' placeholder='email'></input>
                            <input ref={formSubject} className='contact-form-textinput contact-input-right' type='text' placeholder='subject'></input>
                        </div>
                        <textarea ref={formMessage} className='contact-form-textarea' placeholder='message'></textarea>
                        <button className='contact-form-btn' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default ContactModal;