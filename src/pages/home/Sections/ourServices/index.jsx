import Container from 'react-bootstrap/Container';
import classes from './ourServices.module.css';
import Offer from '../../../../UI/box/';

export default function OurServices() {

  return (
    <section className={classes.ourServices}>
       <Container>
            <div className="mainHeader">
                <span className="span wow fadeInUp" data-wow-delay="0">Our Services</span>
                <h2 className="head wow fadeInUp" data-wow-delay="0.2s">What we’re offering</h2>
            </div>
            <Offer />
       </Container>
    </section>
  )};