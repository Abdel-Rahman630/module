import classes from './counter.module.css';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/esm/Col';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import redImg from '../../../../../assets/img/home/about/red.png';
import logo from '../../../../../assets/img/home/about/developed.png';
import logo2 from '../../../../../assets/img/home/about/customers.png';
import logo3 from '../../../../../assets/img/home/about/partners.png';
import { useState } from 'react';

export default function Counter(props) {

    const [aboutUs, setAboutUs] = useState([
        
        {
            "start": 0,
            "title": "Platforms Developed",
            "end": "100",
            img: logo
        },
        {
            "start": 1,
            "title": "Customers",
            "end": "150",
            img: logo2
        },
        {
            "start": 2,
            "title": "Partners",
            "end": "200",
            img: logo3
        }
        
    ])

    return (
        <div className={classes.counter}>
            <img src={redImg} className={classes.redImg} alt="" />
            <Row>
                {aboutUs.map(about => {
                    return (
                        <Col md={4} className={classes.counterItemParent}>
                            <div className={classes.counterItem}>
                                <img src={about.img} alt="" />
                                <CountUp
                                    start={about.start}
                                    end={about.end}
                                    duration={10}
                                    redraw={true}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                
                                <p>{about.title}</p>
                            </div>
                        </Col>
                    )
                })} 
               
            </Row>
        </div>
    );
}