import Col from 'react-bootstrap/Col';
import classes from './ourProjects.module.css';
import Collapse from './collapse';
import Row from 'react-bootstrap/Row';
import img from "../../../../assets/img/home/ourProjects/project.jpg";
import icon from "../../../../assets/img/home/ourProjects/icon.png";
import highlight from "../../../../assets/img/global/highlight.png";

export default function OurProjects() {

  const data =
    {
      smallTitle: "Our Projects",
      title: "The company goals are in line with Egypt’s national social development goals",
      img: img,
      body: "leading digital services provider, serving strategic sectors that are a key pillar to the Egyptian economy.",
      icon: icon,
      
    }

  return (
    <section className={classes.ourProject}>
       <div className="leftContainer">
            <Row>
              <Col lg={6} className="orderlg-1 order-2">
                <div className={classes.ourProjectHeader}>
                  <div className="mainHeader">
                      <span className="span wow fadeInUp" data-wow-delay="0">{data.smallTitle}</span>
                      <h2 className="head wow fadeInUp" data-wow-delay="0.2s">{data.title}</h2>
                  </div>
                </div>
                <Collapse />
              </Col>
              <Col lg={6} className="order-1 order-lg-2">
                <div className={classes.ourProjectimg}>
                  <div className={`wow fadeInRight ${classes.imgParent}`}>
                    <img src={data.img} alt="" className="img-fluid" />
                    <img src={highlight} className={classes.highlight} alt="" />
                  </div>
                  <div className={`wow fadeInUp ${classes.imgContent}`}>
                  <img src={data.icon} alt="" className="img-fluid" />
                    <p>{data.body}</p>
                  </div>
                </div>
              </Col>
            </Row>
       </div>
    </section>
)};