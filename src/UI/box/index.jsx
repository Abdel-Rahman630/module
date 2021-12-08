import { useState } from 'react';
import classes from './offer.module.css';
import Link from 'react-router-dom/Link';
import logo from '../../assets/img/home/offer/offer1.png';
import logo2 from '../../assets/img/home/offer/offer2.png';
import logo3 from '../../assets/img/home/offer/offer3.png';
import logo4 from '../../assets/img/home/offer/offer4.png';
import logo5 from '../../assets/img/home/offer/offer5.png';

export default function Offer(props) {

    const [dataServices, setDataServices] = useState([
        {
            img: logo,
            "body": "E-commerce Platforms Development & Operation",
            link: ":offer1"
        },
        {
            img: logo2,
            "body": "Digital Lending & Financial Services",
            link: ":offer2"
        },
        {
            img: logo3,
            "body": "End to End Logistics Solution",
            link: ":offer3"
        },
        {
            img: logo4,
            "body": "Local & Global Products Marketing",
            link: ":offer4"
        },
        {
            img: logo5,
            "body": "Financial Settlements Services",
            link: ":offer5"
        }
    
    ])

    return (
        <div className={classes.boxParent}>
            {dataServices.map(post => {
                return (
                    <div className={classes.custCol}>
                        <div className={classes.box}>
                            <div className={classes.imgParent}>
                                <img className="wow bounceIn" data-wow-delay="0.1s" src={post.img} alt="" />
                            </div>
                            <p className="wow fadeInUp" data-wow-delay="0.3s">{post.body}</p>
                            <Link to={post.link}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.408 26.649">
                                    <path id="Path_2892" data-name="Path 2892" d="M291.863,247.623,266.455,234.3l11.727,13.325-11.727,13.324Z" transform="translate(-266.455 -234.297)" fill="#1b3668" opacity="0.3"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}