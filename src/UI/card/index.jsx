import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortUp} from '@fortawesome/free-solid-svg-icons/faSortUp';
import Card from 'react-bootstrap/esm/Card';
import Link from 'react-router-dom/Link';
import Col from "react-bootstrap/esm/Col";
import img from '../../assets/img/home/blog/1.jpg';
import img2 from '../../assets/img/home/blog/2.jpg';
import img3 from '../../assets/img/home/blog/3.jpg';

export default function Blog(props) {

    const [blog, setBlog] = useState([
        {
            img: img,
            "day": "05",
            "month": "jul",
            "id": 1,
            "date": "05Jul",
            "title": "Welcome to our website design agency. Lore ipsum simply text amet cing elit.",
            "content": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers.",
            "blogArticle": "blog/:1",
            "goTo": 'Read More'
        },
        {
            img: img2,
            "day": "05",
            "month": "jul",
            "id": 2,
            "date": "05Jul",
            "title": "Welcome to our website design agency. Lore ipsum simply text amet cing elit.",
            "content": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers.",
            "blogArticle": "blog/:2",
            "goTo": 'Read More'
        },
        {
            img: img3,
            "day": "05",
            "month": "jul",
            "id": 3,
            "date": "05Jul",
            "title": "Welcome to our website design agency. Lore ipsum simply text amet cing elit.",
            "content": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers.",
            "blogArticle": "blog/:3",
            "goTo": 'Read More'
        }
    
    ])

    return (
        <Fragment>
            {blog.map(post => {
                return (
                    <Col lg={4} sm={6} className="mb-lg-0 mb-4">
                        <Card key={post.id}>
                            <div className="imgParent wow bounceIn" data-wow-delay="0.2s">
                                <Card.Img src={post.img} />
                            </div>
                            <Card.Body>
                                <h6 className="wow bounceInUp" data-wow-delay="0.2s">
                                    <span>{post.day}</span>
                                    {post.month}
                                </h6>
                                <Card.Title className="wow fadeInUp" data-wow-delay="0.4s">{post.title}</Card.Title>
                                <Card.Text className="wow fadeInUp" data-wow-delay="0.5s">{post.content}</Card.Text>
                                <Link  className="wow fadeInLeft" data-wow-delay="0.6s" to={post.blogArticle}>
                                    <span>{post.goTo}</span>
                                    <FontAwesomeIcon icon={faSortUp} />    
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Fragment>
    );
}