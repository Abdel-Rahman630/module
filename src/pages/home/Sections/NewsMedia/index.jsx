import { Fragment } from "react";
import classes from './newsMedia.module.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Blog from '../../../../UI/card/index';

export default function NewsMedia(props) {

    return (
        <Fragment>
            <section className={classes.newsMedia}>
                <Container>
                    <div className="mainHeader">
                        <span className="span wow fadeInUp" data-wow-delay="0">News & Media</span>
                        <h2 className="head wow fadeInUp" data-wow-delay="0.2s">Latest from the blog</h2>
                    </div>
                    <div className={classes.blogs}>
                        <Row>
                            <Blog />
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
}