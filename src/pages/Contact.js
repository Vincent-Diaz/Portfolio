import React from "react"
import Container from "../components/Container"
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-12">
                        <h1>Contact</h1>
                        <ul>
                            <li>Email: diazkik@yahoo.com</li>
                            <li>Mobile: (806)-282-1662</li>
                        </ul>
                        <hr />
                    </Col>
                </Row>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </Container>
        </div>
    )
}
export default Contact