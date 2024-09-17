import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import pic from "./1713575453058.png"; // with import

function App(): React.JSX.Element {
    return (
        <Container>
            <Row>
                <div
                    style={{
                        backgroundColor: "green",
                    }}
                >
                    <h1>This is my header :)</h1>
                </div>
                <Col>
                    <div
                        style={{
                            width: "50%",
                            height: "100%",
                            backgroundColor: "red",
                        }}
                    >
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World! - Sarah
                            Turmel
                        </p>
                        <img
                            src={pic}
                            alt="A picture of one of my favorite video game characters"
                            width="100%"
                            height="70%"
                        />
                    </div>
                </Col>
                <Col>
                    <div
                        style={{
                            width: "50%",
                            height: "100%",
                            backgroundColor: "red",
                        }}
                    >
                        <ol>
                            <li>Favorite game: Genshin Impact</li>
                            <li>Second favorite game: Zenless Zone Zero</li>
                            <li>Third favorite game: The Sims</li>
                        </ol>
                        <Button
                            onClick={() => {
                                console.log("Hello World");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
