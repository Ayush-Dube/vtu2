import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResultLoginPage = () => {
    const [registerInput, setRegisterInput] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    

    const submitHandler = (e) => {

        e.preventDefault()
        console.log("submit");

        if (registerInput === '') {
            setMsg('Please enter Valid Id')
        } else {
            axios.get('http://localhost:3001/studentinfo')
                .then((response) =>{
                    response.data.map((data) => {
                        if (data.registerId === registerInput) {
                            navigate(`/resultpage/${registerInput}`)
                        } else {
                            setMsg('Invalid RegisterID')
                        }
                    })
                })
                .catch((err) => console.log('You got an Error:', err))
        }
    }


    const changeHandler = (e)=>{
        setRegisterInput(e.target.value)
        setMsg('')
    }


    return (
        <>
            <Container className=" pt-5">
                <h3>Results Login Page</h3>
                <Link to='/' className="btn btn-success my-5">Home!</Link>
                <Row className="text-center">
                    <Col>
                        <h4>Check Your Result Here...</h4>
                        <Form  onSubmit={submitHandler} style={{ color: 'blue', fontSize: '21px' }}>
                            <label>Enter Your USN:-</label>
                            <input placeholder="USN" type='text'  onChange={changeHandler}></input>
                            <p>{registerInput}</p>
                            <Button className="m-3" onClick={submitHandler}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <div className="text-danger text-center">{msg}</div>
            </Container>
        </>
    )
}
export default ResultLoginPage;