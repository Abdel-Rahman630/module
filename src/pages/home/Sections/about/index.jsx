import { Fragment, useState } from "react";
import classes from "./about.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import img from "../../../../assets/img/home/about/about.jpg";
import highlight from "../../../../assets/img/global/highlight.png";
import Counter from "./counter";

export default function About(props) {

  const [moreData, setMoreDate] = useState({
    
      smallTitle: "About Aswaaq",
      title: "Digital company specialized in providing transformative digital solutions and marketplaces",
      establishTitiel: "Established In",
      establishDate: 2020,
      img: img,
      items: [
        {
          "itemBody": "Enabling and operating online marketplaces and digital platforms"
        },
        {
          "itemBody": "Investing in people, technology, and partnership"
        }
      ],
      moreDataBody: "eAswaaq was established in 2020 to provide enterprise marketplace management, offer micro-lending services and seize market expanding and exporting opportunities, with an initial focus on Egypt’s sustainable developments strategy (Vision 2030). ",
      moreDataFooter: "Today eAswaaq Misr is a leading digital services provider, serving strategic sectors that are a key pillar to the Egyptian economy.",
    
    });

  return (
    <Fragment>
      <section className={classes.about}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={classes.aboutImg}>
                <div className={`wow fadeInLeft ${classes.imgParent}`} data-wow-duration="1.2s">
                  <img src={moreData.img} alt="" className="img-fluid" />
                  <img src={highlight} className={classes.highlight} alt="" />
                </div>
                <div className={classes.date}>
                  <div className={classes.dateContent}>
                    <span className="wow fadeInUp" data-wow-delay="0">{moreData.establishTitiel}</span>
                    <h6 className="wow fadeInUp" data-wow-delay="0.2s">{moreData.establishDate}</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={classes.content}>
                <div className="mainHeader">
                  <span className="span wow fadeInUp" data-wow-delay="0">{moreData.smallTitle}</span>
                  <h2 className="head wow fadeInUp" data-wow-delay="0.2s">{moreData.title}</h2>
                </div>
                <div className={classes.items}>
                  <Row>
                    {moreData.items.map((item) => {
                      return (
                        <Col md={6} className="mb-4 wow fadeInRight" data-wow-delay="0.3s">
                          <div className={classes.item}>
                            <p>{item.itemBody}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
                <div className={classes.moreData}>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">{moreData.moreDataBody}</p>
                  <span className="wow fadeInUp" data-wow-delay="0.5s">{moreData.moreDataFooter}</span>
                </div>
              </div>
            </Col>
          </Row>
          <Counter />
        </Container>
      </section>
    </Fragment>
  );
}
