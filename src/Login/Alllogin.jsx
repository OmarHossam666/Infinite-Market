import React, { useState } from 'react';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

const Alllogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials);
  };

  return (
    <div>
      <Allnavbar />
      <Container className="login-container">
        <h1 className="mb-4">Login</h1>
        <Form onSubmit={handleLogin} className="animated-bounce-form">
          <div className="input-container">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md={3} className="form-label">Email :</Form.Label>
              <Col md={6}>
                <Form.Control
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="form-control"
                />
              </Col>
            </Form.Group>
          </div>

          <div className="input-container">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md={3} className="form-label">Password :</Form.Label>
              <Col md={6}>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="form-control"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="extra-links">
            <a href="/register" className="register-link">Don't have an account? Sign up</a><br />
            <a href="/forgot-password" className="forgot-password-link">Forgot your password?</a>
          </div>
          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>
          <div className="social-login">
            <button className="social-btn facebook-btn">Login with Facebook</button>
            <button className="social-btn google-btn">Login with Google</button>
          </div>
        </Form>
        <p className="security-text">Your login information is secure and encrypted.</p>
      </Container>
      <Allfooter />
    </div>
  );
};

export default Alllogin;
