import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" role="banner">
                <h1>This is my header: UM COS420 Interactive Textbook Parts</h1>
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50%",
                                height: "100%",
                                backgroundColor: "red",
                            }}
                        >
                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload. Hello World! -
                                Sarah Turmel
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
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
