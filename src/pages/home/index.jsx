import { Fragment } from 'react';
import MainSlider from './Sections/mainSlider/index';
import About from './Sections/about';
import OurProjects from './Sections/ourProjects';
import OurPillars from './Sections/ourPillars/index';
import Clients from './Sections/Clients';
import OurServices from './Sections/ourServices';
import NewsMedia from './Sections/NewsMedia';

export default function Home() {
    return (
        <Fragment>
            <MainSlider />
            <About />
            <OurProjects />
            <OurPillars />
            <OurServices />
            <Clients />
            <NewsMedia />
        </Fragment>
    )
};
