import { React, useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import Markstable from "./Markstable";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const ResultDisplayer = () => {
    // setTimeout(() => {
    //     axios.get('http://localhost:3001/studentinfo').then((res) => console.log(res.data[1].studentName))
    // }, 3500)
    // axios.get('http://localhost:3001/studentinfo').then((res) => console.log(res.data[1].studentName))

    const [studentData, setStudentData] = useState([])
    const value = useParams()
    console.log('param value',value.anyValue)// This values comes in the form of an Object..thats y u have to 

    // axios.get('http://localhost:3002/resultInfo').then((respo)=>console.log(respo))
    // axios.get('http://localhost:3002/resultInfo').then((respo)=>console.log(respo.data))

    useEffect(() => {
        axios.get('http://localhost:3001/studentinfo')
            .then((respo) => {
                respo.data.map((element) => {
                    // console.log(element)
                    if (element.registerId === value.anyValue) {  //i was misspelling anyValue as anyvalue,therefore state was not getting updated
                        setStudentData(element)   // i was putting studentData
                    }
                })
            }).catch((error)=>console.log('hers is The mistake',error))
    }, [])
    console.log(studentData)

    return (
        <>
            <center><h3>Viesvesvaraya Technological University</h3><br></br><h6>VII Semester B.E Examination Result,2024</h6></center>

            <Container className="mt-3">
                <Row>
                    <Col>
                        <Table borderless className="py-1">
                            <tr>
                                <td>StudentName:</td>
                                <td style={{ color: 'Blue', fontWeight: 'bolder' }}>{studentData.studentName}</td>
                            </tr>
                            <tr>
                                <td>Father's/Mother's Name:</td>
                                <td><b>{studentData.fatherName}</b></td>
                            </tr>
                            <tr>
                                <td>College Name:</td>
                                <td><b>{studentData.collegeName}</b></td>
                            </tr>
                        </Table>
                    </Col>
                    <Col>
                        <Table borderless >
                            <tr>
                                <td>RegisterId /USN :</td>
                                <td style={{ color: 'Blue', fontWeight: 'bolder' }}>{studentData.registerId}</td>
                            </tr>
                            <tr> <Link to='/result/loginpage' className="btn btn-success my-5" >Result Page!</Link></tr>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Markstable  marksData={studentData}/>
            {/* if this api had all the data , wecould have used this single api ,but since the data is in different api, 
            i have to relate to that second api and , make aaxios call then feed the data */}


        </>
    )
}
export default ResultDisplayer;