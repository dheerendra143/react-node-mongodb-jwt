import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import App from "./../App";
import Create from "./../Component/User/Create"
import Login from "./../Component/User/Login";
import Menu from "./../Component/Sidebar/Menu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./../Component/Header/Header";
import Footer from "./../Component/Footer/Footer";
import { connect } from "react-redux";

const Routers = ({ isLoggedin }) => {

    return (
        <BrowserRouter>
            <Container fluid>
                <Row className="portal-header">
                    <Col xs={12} md={12}> <Header /></Col>
                </Row>
                <Row>
                    <Col className="portal-sidebar" xs={12} md={2}>  <Menu /></Col>
                    <Col className="portal-main" xs={12} md={10}>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="login" element={<Login />} />
                            <Route path="addUser" element={<Create />} />
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <p>Theres nothing here!</p>
                                        Click<Link to="/"> here</Link> to Home
                                    </main>
                                }
                            />
                        </Routes>
                    </Col>
                </Row>
                <Row className="portal-footer">
                    <Col xs={12} md={12}> <Footer /></Col>
                </Row>

            </Container>

        </BrowserRouter>
    )
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(Routers);