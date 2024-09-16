import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div>
            <h1>This is my header :)</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World! - Sarah Turmel
            </p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="Onedrive/Sarah - University of Maine System/Slideshow/1713575453058.jpg"
                            alt="A picture of one of my favorite video game characters"
                        />
                    </Col>
                    <Col>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
