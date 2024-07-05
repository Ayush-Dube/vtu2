import { React, useEffect, useState } from "react";
import { Container, Table, } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import {ToWords} from 'to-words'

const Markstable = ({ marksData }) => {

    // console.log('props received',props)
    // console.log('props received',props.marksData)
    console.log('props received', marksData.registerId)

    const [resultDetails, setResultdetails] = useState([]);

    const towords = new ToWords();

    useEffect(() => {
        axios.get('http://localhost:3002/resultInfo')
            .then((res) => {
                console.log(res.data)
                let temp = res.data.filter((item) => item.studentId === marksData.registerId)
                console.log('temp', temp)
                setResultdetails(temp)
            })
            .catch((err) => console.log('this is the error :', err))
    }, [marksData])


    console.log('finally', resultDetails);

    function getTotalScore(someVal) {
        console.log('received', someVal)
        let sum = 0;
        resultDetails.map((eachitem) => sum += parseInt(eachitem[someVal]))
        console.log('tot', sum);
        return sum
    }

    function finalResult() {
        let count = 0;
        resultDetails.map((eachitem) => {
            if (eachitem.result === 'FAIL') {
                count += 1
            } else { }
        })
        console.log('failcount', count);

        if (count == 0) {
            return 'PASS'
        } else {
            return 'FAIL'
        }
    }

    function scoreTeller() {

        let count = 0;
        resultDetails.map((eachitem) => {
            if (eachitem.result === 'FAIL') {
                count += 1
            } else { }
        })

        let maxMrks = getTotalScore('max_marks');
        let gotMrks = getTotalScore('obtained_marks');
        let percent = Math.floor((gotMrks / maxMrks) * 100)

        let status;
        if (count > 0) {
            status = 'Failed'
        }
        else {
            if (percent >= 75) {
                status = "First Class with Distinction"
            } else if (percent < 75 && percent >= 60) {
                status = 'First Class'
            } else {
                status = "Second Class"
            }
        }

        return status
    }

    function percentageTeller() {
        let maxMrks = getTotalScore('max_marks');
        let gotMrks = getTotalScore('obtained_marks');
        let prcntsymbol = "%";
        let mypercent = Math.floor((gotMrks / maxMrks) * 100)
        return [mypercent,prcntsymbol]

    }

    function presentDate() {
        let date = new Date;

        let day = date.getDate();
        let monthindex = date.getMonth();
        let year = date.getFullYear()
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

        return `${day}-${months[monthindex]}-${year}`        
    }

    function inWords(){
        const a = getTotalScore('obtained_marks')
        let text = towords.convert(a)
        return text
    }
    return (
        <>
            <Container>
                <p>{marksData.studentName},{marksData.registerId}</p>
                <Table id='markstable101' borderless responsive>
                    <thead>
                        <tr>
                            <th rowSpan={2}>Sl No</th>
                            <th colSpan={2}>Subject
                               
                            </th>
                            <th colSpan={3}>Examination Marks </th>
                            <th rowSpan={2}>Result</th>
                        </tr>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject Name</th>
                            <th>Max</th>
                            <th>Min</th>
                            <th>Obtained</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            resultDetails.map((evryitem, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{evryitem.code}</td>
                                    <td>{evryitem.subject}</td>
                                    <td>{evryitem.max_marks}</td>
                                    <td>{evryitem.min_marks}</td>
                                    <td>{evryitem.obtained_marks}</td>
                                    <td>{evryitem.result}</td>
                                </tr>

                            ))
                        }

                        <tr>
                            <th colspan={3}>Grand Total</th>
                            <td>{getTotalScore('max_marks')}</td>
                            <td>{getTotalScore('min_marks')}</td>
                            <td>{getTotalScore('obtained_marks')}</td>
                            <th className={`${finalResult()}One`}>{finalResult()==="PASS"? 'All Cleared':"Not Cleared"}</th>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container>
                <p><b>Total Marks Obtained in Words: </b><span style={{color:"darkgreen",fontWeight:"bolder"}}>{inWords()}</span></p>
                <p><b>Result of Semester :</b>{scoreTeller()}</p>
                <p><b>Percentage :</b>{percentageTeller()}</p>
                <p><b>Date : </b>{presentDate()}</p>
            </Container>
            <Footer />
        </>
    )
}

export default Markstable;

