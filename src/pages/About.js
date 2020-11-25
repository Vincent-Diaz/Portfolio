import React from "react"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Img from "../images/mainphoto.jpg"
import Resume from "../Vincent_Diaz_Resume.pdf"

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-12">
                        <h1>About Me</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-3">
                        <img src={Img} alt="headshot" className="img-thumbnail" />
                        <a className="link1" href="https://github.com/Vincent-Diaz" target="_blank" rel="noopener noreferrer">
                            Link to Github Profile
                        </a>
                        <hr />
                        <a className="link2" href="https://www.linkedin.com/in/vincent-diaz-89a4609b/" target="_blank" rel="noopener noreferrer">
                            Link to Linkedin Profile
                        </a>
                        <hr />
                        <a className="link3" href={Resume} target="_blank" rel="noopener noreferrer">
                            Link to Resume
                        </a>
                    </Col>
                    <Col size="lg-9">
                        <p>Welcome to my portfolio page! Now that you are here, let me tell you a bit about myself. I am currently enrolled at the University of Texas in Austin Coding Bootcamp. I'm an aspiring Web Developer pursing a new career path. I was born and raised in Amarillo, TX a smaller city in the West Texas. Originally I going to relocate to Austin for this bootcamp until the in-class option was canceled due to the COVID-19 pandemic. But, that did not stop me from pursing something that has become a passion of mine. The plan is to move to a bigger city after graduating from the program. I graduated from Caprock High in 2013. I went on to attend West Texas A&M in Canyon, TX for two and a half semesters.  </p>
                        <p>More recently back in 2016, I was hired for a career-level position for a government agency through the Department of Energy. Due to needing a security clearance, I was unable to start until 2018 after recieving my clearance. In between that time I took some free coding courses online and really enjoyed them. Once I started my job for the DOE I put coding to the side to focus on my career. After some unfortunate circumstances out of my control, I had to unfortunately resign from the company. I used that opportunity to pursue full stack web development. Something I have always wanted to do. I developed a sense of drive and endless effort over the years and plan to utilize that in this program and my new career! </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col size="lg-12">
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About