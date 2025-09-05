import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "/Users/kaceydove23/tasks/src/cats.jpg";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Hello World
            </header>
            <h1>Hello</h1>
            <p>Kacey Dove</p>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 300,
                                height: 100,
                            }}
                        ></div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 300,
                                height: 100,
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <div>
                <p>
                    <img
                        src={logo}
                        alt="Cats around a candle"
                        height="150"
                        width="150"
                    />
                </p>
                <p>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </p>
                <p>
                    List of My Favorite Things:
                    <ol>
                        <li>France</li>
                        <li>Music</li>
                        <li>Creativity</li>
                    </ol>
                </p>
            </div>
        </div>
    );
}

export default App;
