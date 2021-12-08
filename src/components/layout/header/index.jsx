import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/img/global/aswaq.png';
import classes from './header.module.css';
import Modal from './modal';



export default function Header(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [stickyNavbar, setStickyNavbar] = useState(false)
    const [overlayNavbar, setOverlayNavbar] = useState()

    const ShowModalHandler = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen)
    }

    const changeNavStyle = () => {
        if (window.scrollY >= 80) {
            setStickyNavbar(true)
        } else {
            setStickyNavbar(false)
        }
    }

    const showOverlay = () => {
        if (document.getElementById("toggler").classList.contains("collapsed")) {
            setOverlayNavbar(true)
        } else {
            setOverlayNavbar(false)
        }
    }
    


    window.addEventListener('scroll', changeNavStyle);

    return (
        <Fragment>
            <header className={overlayNavbar ? `${classes.overlay}` : ``}>
                <Navbar className={stickyNavbar ? `${classes.navbar} ${classes.active}` : `${classes.navbar}`} bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>
                            <img className={classes.logo} src={logo} alt="eAswaq" />
                        </Navbar.Brand>
                        <div className={classes.buttonsParent}>
                            <button onClick={ShowModalHandler} className={classes.showSmall}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <Navbar.Toggle  onClick={showOverlay} id="toggler" aria-controls="basic-navbar-nav" className={classes.burgerIcon} />
                        </div>
                        <Navbar.Collapse className={classes.anchorParent} id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to={"/home"} className={classes.anchorLink} >Home</Nav.Link>
                                <Nav.Link as={Link} to={'/about'} className={classes.anchorLink} >About Us</Nav.Link>
                                <Nav.Link as={Link} to={'/ourPillars'} className={classes.anchorLink} >Our Pillars</Nav.Link>
                                <Nav.Link as={Link} to={'/ourServices'} className={classes.anchorLink} >Our Services</Nav.Link>
                                <Nav.Link as={Link} to={'/ourPartners'} className={classes.anchorLink} >Our Partners</Nav.Link>
                                <Nav.Link as={Link} to={'/news-media'} className={classes.anchorLink} >News & Media</Nav.Link>
                                <Nav.Link as={Link} to={'/contactUs'} className={classes.anchorLink} >Contact Us</Nav.Link>
                                <button onClick={ShowModalHandler} className={classes.showLarge}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <a className={classes.anchorLink} href="tel:+202 38271400" rel="noreferrer">
                                    <svg id="Group_271" data-name="Group 271" width="12.5" height="12.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.809 17.63">
                                        <path id="Path_2789" data-name="Path 2789" d="M354.641,391.914l1.214-1.214a2.028,2.028,0,0,0,.446-1.893l-.084-.256a2.39,2.39,0,0,0-1.464-1.384l-2.241-.612a2.194,2.194,0,0,0-1.919.5l-.81.811a8.6,8.6,0,0,1-6.053-6.053l.811-.812a2.192,2.192,0,0,0,.5-1.916l-.612-2.242a2.4,2.4,0,0,0-1.386-1.464l-.256-.085a2.034,2.034,0,0,0-1.895.447l-1.213,1.215a2.247,2.247,0,0,0-.355.832,14.316,14.316,0,0,0,14.446,14.479,2.239,2.239,0,0,0,.87-.352" transform="translate(-339.324 -374.636)" fill="#fff" />
                                        <path id="Path_2790" data-name="Path 2790" d="M356.637,384.134a9.473,9.473,0,0,0-9.463-9.462h-.311v1.768h.311a7.7,7.7,0,0,1,7.695,7.694v.312h1.768Z" transform="translate(-338.828 -374.672)" fill="#fff" />
                                        <path id="Path_2791" data-name="Path 2791" d="M353.206,384.234v-.312a6.039,6.039,0,0,0-6.031-6.031h-.312v1.769h.312a4.267,4.267,0,0,1,4.263,4.262v.312Z" transform="translate(-338.828 -374.46)" fill="#fff" />
                                        <path id="Path_2792" data-name="Path 2792" d="M346.862,382.878h.312a.833.833,0,0,1,.831.832v.312h1.769v-.312a2.6,2.6,0,0,0-2.6-2.6h-.312Z" transform="translate(-338.828 -374.249)" fill="#fff" />
                                    </svg>
                                    <span>+202 38271400 </span>
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </Fragment>
    )
};
