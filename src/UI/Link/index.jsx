import { Link } from "react-router-dom";

export default function MainLink(props) {

    return (
       <Link {...props}>
           {props.children}
       </Link>
    );
}