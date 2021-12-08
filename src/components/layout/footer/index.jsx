import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import classes from './footer.module.css';
import { Fragment } from 'react';
import { Link,  BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../../assets/img/global/mainFooterLogo.png';
import footerLogo from '../../../assets/img/global/footerLogo.png';

export default function Footer() {
    return (
        <Fragment>
            <Router>
                <footer>
                    <Container>
                        <Row>
                            <Col xs={12} lg={3}>
                                <div className={classes.footerDetails}>
                                    <Link to="/home" className="wow fadeInUp">
                                        <img className={classes.logo} src={logo} alt="eAswaq" />
                                    </Link>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">Welcome to our website design agency. Lore ipsum simply text amet cing elit.</p>
                                    <ul className="list-unstyled mb-lg-0 mb-4">
                                        <li className="wow bounceIn" data-wow-delay="0.4s">
                                            <a href="https://m.facebook.com/easwaaq/" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li className="wow bounceIn" data-wow-delay="0.5s">
                                            <a href="https://www.instagram.com/easwaaq/?igshid=1f79u5htu3cvz" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li className="wow bounceIn" data-wow-delay="0.6s">
                                            <a href="/" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={3} className="wow fadeInLeft" data-wow-delay="0.8s">
                                <div className={classes.linksParent}>
                                    <h4>Explore</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="/aboutUs">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/ourPillars">Our Pillars</Link>
                                        </li>
                                        <li>
                                            <Link to="/ourServices">Our Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/ourPartners">Our Partners</Link>
                                        </li>
                                        <li>
                                            <Link to="/news-media">News & Media</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={3} className="wow fadeInLeft" data-wow-delay="1s">
                                <div className={classes.linksParent}>
                                    <h4>Contact</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className={classes.address} href="https://www.google.com/maps/search/Ground+Floor,+Building+B+2111+KM+28+Cairo+-+Alex+Desert+Road.+Smart+Village+-+Giza/@30.0610027,31.0302831,16.39z" rel="noreferrer" target="_blank">Ground Floor, Building B 2111 KM 28 Cairo - Alex Desert Road, Smart Village, Giza</a>
                                        </li>
                                        <li>
                                            <a className={classes.phone} href="tel:+202 38271400" rel="noreferrer">+202 38271400 - </a>
                                             <a className={classes.phone} href="tel:38271500" rel="noreferrer"> 38271500</a>
                                        </li>
                                        <li>
                                            <a className={classes.red} href="mailto:Needhelp@Moniz.Com" rel="noreferrer">Needhelp@Moniz.Com</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} lg={3} className="wow fadeInLeft" data-wow-delay="1.2s">
                                <div className={classes.contentParent}>
                                    <h4>grid4</h4>
                                    <p>Welcome to our website design agency. Lore ipsum simply text amet cing elit.</p>
                                    <img src={footerLogo} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={classes.copyright}>
                        <p>Designed & Developed by <a href="https://icon-creations.com/" target="_blank" rel="noreferrer">Icon Creations</a></p>
                    </div>
                </footer>
            </Router>
        </Fragment>
    )
};
