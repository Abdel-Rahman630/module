import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <Fragment>
      <Header />
        {props.children}
      <Footer />
    </Fragment>
  );
}
