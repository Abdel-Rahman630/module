import classes from './pillar.module.css';
import classes2 from '../../../../../UI/Link/Link.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../../../../assets/img/home/ourPillars/1.png';
import img2 from '../../../../../assets/img/home/ourPillars/2.png';
import img3 from '../../../../../assets/img/home/ourPillars/3.png';
import img4 from '../../../../../assets/img/home/ourPillars/4.png';
import logo1 from '../../../../../assets/img/home/ourPillars/agrimisr.png';
import logo2 from '../../../../../assets/img/home/ourPillars/ayadyMisr.png';
import logo3 from '../../../../../assets/img/home/ourPillars/nmec.png';
import logo4 from '../../../../../assets/img/home/ourPillars/konoz.png';
import logo5 from '../../../../../assets/img/home/ourPillars/tamwel.png';
import { Fragment, useState } from 'react';
import MainLink from '../../../../../UI/Link';

export default function Pillar(props) {

    const [pillar, setPellar] = useState([
        {
            img: img,
            "title": "eCommerce",
            "content": "eAswaaq Misr core business lies in creating the Multi-tenant Specialized Market Place: Constituting of specialized ecomemrce platforms that are owned, created, managed & operated by eAswaaq Misr.",
            logo1: logo1,
            logo2: logo2,
            "link": "Know more",
            "srcLink": "pillar/:1",
            "color": "green",
            "BGcolor": "BGgreen"
        },
        {
            img: img2,
            "title": "eTourism",
            "content": "eAswaaq Misr Powered Market Places, that are specialized ecommerce platforms created, managed and operated by eAswaaq Misr, for the Ministry of Tourism &Antiquities.",
            logo1: logo3,
            logo2: logo4,
            "link": "Know more",
            "srcLink": "pillar/:2",
            "color": "blue",
            "BGcolor": "BGblue",
            "smallSize": "smallImg"
        },
        {
            img: img3,
            "title": "eLending",
            "content": "Tamweel Misr will be the only digital lending platform offeringa wide array of micro lending products and portfolio, from individual to tailored farmer’s loans, to CDA’s with the edge of offeringa revolving credit feature.",
            logo1: logo5,
            "link": "Know more",
            "srcLink": "pillar/:3",
            "color": "orange",
            "BGcolor": "BGorange"
        },
        {
            img: img4,
            "title": "eSaving",
            "content": "The CBE has recently approved formalizing of saving and borrowing groups known as village savings and loan associations , predominantly to financially, socially and economically support ladies that have minimal to no income.",
            "content2": "The objective of digital saving groups is to enable the development of fintech ecosystems to play a key role in improving financial inclusion.",
            "link": "Know more",
            "srcLink": "pillar/:4",
            "color": "lightBlue",
            "BGcolor": "BGlightBlue",
        }
    
    ])

    return (
            <Fragment>
                {pillar.map(post => {
                    return (
                        <div className={classes.pillar}>
                            <Row>
                                <Col lg={6} className={classes.contentParent}>
                                    <div className={classes.content}>
                                        <h4 className={`wow fadeInUp ${post.color}`} data-wow-delay="0.1s">{post.title}</h4>
                                        <p className="wow fadeInUp" data-wow-delay="0.3s">{post.content}</p>
                                        <p className="wow fadeInUp" data-wow-delay="0.4s">{post.content2}</p>
                                        <div className={classes.logosParent}>
                                            <img src={post.logo1} alt="" data-wow-delay="0.6s" className={`wow fadeInLeft img-fluid ${post.smallSize}`} />
                                            <img src={post.logo2} alt="" data-wow-delay="0.7s" className={`wow fadeInLeft img-fluid ${post.smallSize}`} />
                                        </div>
                                        <MainLink to={post.srcLink}  className={`${classes2.mainAnchorLink} ${post.BGcolor} `}>
                                            <span>{post.link}</span>
                                        </MainLink>
                                    </div>
                                </Col>
                                <Col lg={6} className={`wow fadeInDown ${classes.imgParent}`}>
                                    <div className={classes.img}>
                                        <img src={post.img} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </Fragment>
        
    );
}