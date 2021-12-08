import Container from 'react-bootstrap/Container';
import classes from './ourPillars.module.css';
import Pillar from './pillar/index';


export default function OurPillars() {

  return (
    <section className={classes.ourPillars}>
       <Container>
            <div className="mainHeader">
                <h2 className="head wow fadeInUp">Our Pillars</h2>
            </div>
            <Pillar />
            
       </Container>
    </section>
  )};