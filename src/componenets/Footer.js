import React from "react";
import{Row,Col} from 'react-bootstrap'

const Footer =()=>{
    const currentYear = new Date().getFullYear()
    //use{} to call the variable return Part

    return(
        <footer>
        <Row className="text-center m-1">
            <Col className="mt-3 ">
                VTU &copy;{currentYear}
            </Col>
        </Row>
        
        </footer>
    )
}
export default Footer;