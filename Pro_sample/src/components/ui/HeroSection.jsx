
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import "./hero-section.css"
import heroImg from '../../assets/images/hero.png'

function HeroSection(){
    return(
        <>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6' >
                        <div className="hero__content">
                            <h2> Discover rare digital art and collect <span>Sell </span>
                                NFT  </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Alias molestias quos adipisci, libero cum magnam facilis quam eius, sequi aliquam, 
                            </p>
                            <div className="hero__btns d-flex align-items-center gap-4 ">

                                <button clasName=" explore__btn d-flex align-items-center gap-2" >
                                    <Link to='/market'>Explore</Link>
                                </button>
                                <button clasName=" create__btn d-flex align-items-center gap-2"  >
                                    <Link to='/create'>Explore</Link>
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="Hero Image" className=" .hero__img w-100" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        </>
    );
}

export default HeroSection