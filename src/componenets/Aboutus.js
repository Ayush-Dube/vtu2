import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from './Header'
import Footer from './Footer'


const Aboutus = () => {
    return (
        <>
            <Header/>
            <Container className="my-5">
                <Row >
                    <Col sm={12} md={6} className="coli">
                        <Image className="imgBox" src='/vtuPics/Mission.jpg' fluid />
                    </Col>
                    <Col sm={12} md={6} className="coli p-5">
                        <h1>Mission</h1>
                        <p>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>

                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="coli p-5">
                        <h1>Vision</h1>
                        <p>To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                    </Col>
                    <Col sm={12} md={6} className="coli">
                        <Image className="imgBox" src='/vtuPics/vision.jpg' fluid />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="coli">
                        <Image className="imgBox" src='/vtuPics/mandate.jpg' fluid />
                    </Col>
                    <Col sm={12} md={6} className="coli p-5">
                        <h1>Mandate</h1>
                        <p>The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                            *Design need based programs that ensure adequate human resource of the right kind.
                            *Establish objective evaluation and certification systems for students,programs and institutions.
                            *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.</p>

                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="coli">
                        <Image className="imgBox" src='/vtuPics/mandate.jpg' fluid />
                    </Col>
                    <Col sm={12} md={6} className="coli p-5">
                        <h1>Mandate</h1>
                        <p>The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                            *Design need based programs that ensure adequate human resource of the right kind.
                            *Establish objective evaluation and certification systems for students,programs and institutions.
                            *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.</p>

                    </Col>
                </Row>
            </Container>
            <Footer/>


        </>
    );
};
export default Aboutus;