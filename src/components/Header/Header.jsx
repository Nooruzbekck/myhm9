import React from "react";
import classes from './Header.module.css'
import { Row, Col } from "react-bootstrap";

function Header() {
    return (
      <Row>
        <Col>
          <div className={classes.root}>Header</div>
        </Col>
      </Row>
    );
}
export default Header;

