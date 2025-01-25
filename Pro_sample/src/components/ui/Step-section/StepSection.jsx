
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import './step-section.css'

const STEP__DATA =[
    {
        title:'Setup your wallet',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               ipsum, alias consecteturem corrupti harum velit nobis minima quasi.`,
        icon: 'ri-wallet-line'
    },
    {
        title:'Create your collection',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               ipsum, alias consecteturem corrupti harum velit nobis minima quasi.`,
        icon: 'ri-layout-line'
    },
    {
        title:'Add your NFTs',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               ipsum, alias consecteturem corrupti harum velit nobis minima quasi.`,
        icon: 'ri-image-line'
    },
    {
        title:'List them for sale',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               ipsum, alias consecteturem corrupti harum velit nobis minima quasi.`,
        icon: 'ri-list-check'
    },
]

function StepSection(){
    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                    <h3 className="step__title">
                        Create and sell your NFTS
                    </h3>
                    </Col>

                    {
                        STEP__DATA.map((item,index)=>
                        <Col lg='3' md='4' sm='6' key={index} className='mb-4' >
                            <div className="single__step__item">
                                <span><i class={item.icon}></i></span>
                                <div className="step__item__content">
                                    <h5>
                                        <Link to='/wallet' >{item.title}</Link>
                                    </h5>
                                    <p className="mb-2" >{item.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        )
                    }

                </Row>
            </Container>
        </section>
        </>
    );
}

export default StepSection