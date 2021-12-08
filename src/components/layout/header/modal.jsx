import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './modal.module.css';

const Modal = ({ open, onClose }) => {

    if (!open) return null

    const ShowModalForm = (e) => {
        e.stopPropagation();
    }

    return ReactDom.createPortal(
        <div className={classes.popup} onClick={onClose}>
            <Form onClick={ShowModalForm}>
                <Form.Group className={classes.inputParent} controlId="formBasicText">
                    <Form.Control type="text" placeholder="Search" />
                    <Button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Form.Group>
            </Form>
        </div>,
        document.getElementById("portal")
    )
}

export default Modal