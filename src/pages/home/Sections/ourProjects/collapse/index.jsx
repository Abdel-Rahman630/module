import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons/faSortDown';
import classes from './collapse.module.css';
import { useState } from 'react';


export default function Collapse() {

  const [collaseData, setCollapseDate] = useState([
    {
        "key": "0",
        "title": "AGRI MISR",
        "body": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers."
    },
    {
        "key": "1",
        "title": "AYADI Misr",
        "body": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers."
    },
    {
        "key": "2",
        "title": "EGY Monuments",
        "body": "aims to become the most trusted & reliable marketplace in the agro-industry, by developing the agribusiness value chain and deliver agro-industrial products with the best prices and top quality to all farmers."
    }
  ])

  return (
    <div className={classes.collapse}>
        <Accordion defaultActiveKey="0">
          {collaseData.map(collapse => {
            return (
              <Accordion.Item eventKey={collapse.key} className="wow fadeInLeft">
                  <Accordion.Header>
                    {collapse.title}
                    <FontAwesomeIcon icon={faSortDown} />     
                  </Accordion.Header>
                  <Accordion.Body>{collapse.body}</Accordion.Body>
              </Accordion.Item>
            )
          })}
          
        </Accordion>
    </div>
)};