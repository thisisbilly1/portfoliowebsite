import { useState, useEffect } from "react"
import { Card, Row, Col, Nav, Navbar } from "react-bootstrap"
import RockMonsterContainer from "./RockMonster/RockMonsterContainer"
//import SwordContainer from "../frontend/SwordContainer"
import "../../assets/AR.css"

import LOIteration from "./LOIteration"
import ARIteration from "./ARIteration"


const AR = ({ should3DRender }) => {
    const [iteration, setIteration] = useState(0)
    const [shouldRender, SetshouldRender] = useState(false)

    useEffect(() => {
        if (should3DRender) {
            setTimeout(() => {
                SetshouldRender(true)
            }, 500)
        } else SetshouldRender(false)
    }, [should3DRender])


    return (
        <>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Story</Card.Title>
                            <p>Adventure Road is an MMORPG that my brother and I imagined when we were still in high school. Inspired by games like Blizzard's WOW, Dungeons and Dragons, we were determined to make our own MMORPG.</p>
                            <p>Our goal was to create a free online RPG experience that we could play with friends and create a community around. We just wanted to create something that was fun.</p>
                            <p>This project has has many iterations. Most notably, going from 2D to 3D. The game, and code, have grown with me. I hope I can continue to make people happy through programming.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl>
                    {shouldRender && <RockMonsterContainer />}
                </Col>
            </Row>

            <h4 className="text-center mt-3 mb-3">Adventure Road Versions</h4>

            <Navbar expand="lg" className="p-2 pb-0 w-100">
                <Nav className="w-100">
                    <Row className="w-100">
                        <Col>
                            <Nav.Item>
                                <Nav.Link active={iteration === 0} onClick={e => setIteration(0)}>2D Version</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                            <Nav.Item>
                                <Nav.Link active={iteration === 1} onClick={e => setIteration(1)}>3D Version</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>


                </Nav>
            </Navbar>

            {iteration === 0 && <LOIteration />}
            {iteration === 1 && <ARIteration />}
        </>
    )
}

export default AR