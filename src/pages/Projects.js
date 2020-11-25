import React from "react"
import Jumbotron from "../components/Jumbotron"
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
// import Col from "../components/Col";
import Img0 from "../images/EventSafe.png"
import Img1 from "../images/CombatFitness.png"
import Img2 from "../images/06-server-side-apis-homework-demo.png"
import Img3 from "../images/Fitness-Tracker.gif"
import Img4 from "../images/workdayscheduler.png"
import Img5 from "../images/Note-Taker.png"


function Projects() {
    return (
        <div>
            <Jumbotron />
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <h1 className="text-center">Projects</h1>
                        <hr />
                    </div>
                </Row>class
                <Row>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img0} className="card-img-top" alt="Event Safe" />
                            <div className="card-body">
                                <h5 className="card-title">Event Safe</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://mark4348.github.io/EventSafe/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Mark4348/EventSafe.git" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img1} className="card-img-top" alt="Weather Dashboard" />
                            <div className="card-body">
                                <h5 className="card-title">Combat Fitness</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://combatfitness.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Sarah-Nguyen1993/Combat-Fitness" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img2} className="card-img-top" alt="Weather Dashboard" />
                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://vincent-diaz.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Vincent-Diaz/Weather-Dashboard.git" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img3} className="card-img-top" alt="Template Engine" />
                            <div className="card-body">
                                <h5 className="card-title">Fitness Tracker</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://workout-tracker52.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Vincent-Diaz/Workout-Tracker.git" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img4} className="card-img-top" alt="Work Day App" />
                            <div className="card-body">
                                <h5 className="card-title">Work Day Scheduler App</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://vincent-diaz.github.io/Work-day-scheduler-app/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Vincent-Diaz/Work-day-scheduler-app.git" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="card">
                            <img src={Img5} className="card-img-top" alt="Note Taker" />
                            <div className="card-body">
                                <h5 className="card-title">Note Taker</h5>
                            </div>
                            <div className="card-body">
                                <a href="https://still-reaches-43618.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Live URL
                                </a>
                                <a href="https://github.com/Vincent-Diaz/Note-Taker.git" target="_blank" rel="noopener noreferrer" className="card-link">
                                    Github Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>
    )
}
export default Projects