import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Logout from "./components/login/Logout";

const App = () => {
  return (
    <div>
    <Router>
      <Header />
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col xs="2">
              <Sidebar />
            </Col>
            <Col xs="10">
              <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
								<Route path = "/Logout" element={<Logout/>}>
								</Route>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
    </Router>
    </div>
  );
};

export default App;

