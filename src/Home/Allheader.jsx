import { useState, useEffect } from "react";
import {  Container, Row, Col } from "react-bootstrap";
import { FaSmile, FaTag, FaBell, FaShoppingCart, FaInfinity, FaHandPointDown } from "react-icons/fa";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-12-22") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="countdown text-center" style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", padding: "0px", borderRadius: "10px", background: "#fff" }}>
      <h2>
        <FaBell className="animated-bell" /> Limited Time Offers Ending Soon!
      </h2>
      <div className="lead">
        <h1 className="sale-title">
          Sale <FaSmile className="happy-icon" /> <FaTag className="discount-icon" />
        </h1>
        {Object.keys(timeLeft).length ? (
          <>
            <span className="time-box">{timeLeft.days}d </span>
            <span className="time-box">{timeLeft.hours}h </span>
            <span className="time-box">{timeLeft.minutes}m </span>
          </>
        ) : (
          <span style={{ fontWeight: 'bold', color: 'red' }}>Offer Expired!</span>
        )}
        <FaBell className="animated-bell" />
      </div>
    </div>
  );
}

function PromoVideo() {
  return (
    <div className="promo-video text-center">
      <h2 className="promo-title">Watch Our Latest Offers</h2>
      <FaHandPointDown className="pointing-hand" />
      <video width="100%" height="300" controls className="promo-video-element">
        <source src="/images/istockphoto-1954855689-640_adpp_is.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function AllHeader() {
  return (
    
    <div className="all-header">
       <div style={{ width: '100%', height: '600px', overflow: 'hidden', padding: "0px"  }}>
  <img
    className="img-fluid"
    src="images/1.jpg"
    alt="First slide"
    style={{
      width: '100%',
      height: '90%',  
    }}
  />
</div>

      <Container className="my-3">
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <Countdown />
          </Col>
          <Col md={6}>
            <PromoVideo />
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default AllHeader;
