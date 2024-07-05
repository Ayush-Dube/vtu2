import React from "react";
import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Homescreen = () => {
    return (
        <>
            <Header />
            <marquee className='mt-2' ><h5>VTU -results for 2023-2024...<Link to='/result/loginpage'>Check Here </Link></h5></marquee>
            <Container style={{
                padding: '0px', borderRadius: '10px', overflow: 'hidden', boxShadow: 'box-shadow: 2px 2px 81px 9px rgba(185,166,193,0.79)',
            }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\vtuPics\vtuimg1.jpg"
                            alt="First slide"
                            style={{ padding: '0px', borderRadius: '10px', border: '1px solid black' }}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\vtuPics\vtuimg4.png"
                            alt="Second slide"
                            style={{ padding: '0px', borderRadius: '10px', border: '1px solid black' }}
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\vtuPics\vtuimg3.png"
                            alt="Third slide"
                            style={{ padding: '0px', borderRadius: '10px', border: '1px solid black' }}
                        />


                    </Carousel.Item>
                </Carousel>
            </Container >
            <Container>

                <Row className='my-4 '>
                    <Col sm={12} md={4}>
                        <h3><a>Mission</a></h3>
                        <p className="p-style">To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society. </p>
                        <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                        <Button>Mission</Button>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3><a>Vision</a></h3>
                        <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                        <p className="p-style">To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society. </p>
                        <Button>Vision</Button>
                    </Col>
                    <Col sm={12} md={4}> <h3><a>Mandate</a></h3>
                        <p className="p-style">The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.</p>
                        <p className="p-style">*Design need based programs that ensure adequate human resource of the right kind.
                            *Establish objective evaluation and certification systems for students,programs and institutions.
                            *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user.
                        </p>
                        <Button>Mandate</Button>
                    </Col>
                </Row>
            </Container>

            <Footer />

        </>
    )
}

export default Homescreen;