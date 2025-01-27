import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/ui/Common-section/CommonSection';
import'../styles/trans-history.css'

function TransHistory(){
    return(
        <>
        <CommonSection title='Transaction History' />


        <Container className="history__container">
        
           <Row>
                <Col>
                    From
                </Col>
        
                <Col>
                    To
                </Col>

                <Col>
                    Amount
                </Col>
           </Row>

           <Row>
                <Col>
                    From
                </Col>
        
                <Col>
                    From
                </Col>

                <Col>
                    From
                </Col>
           </Row>
        

        </Container>


        
        </>
    )
}

export default TransHistory