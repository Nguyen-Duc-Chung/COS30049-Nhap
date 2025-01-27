import React from 'react';

import CommonSection from '../components/ui/Common-section/CommonSection';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {NFT__DATA} from "../assets/data/data"
import LiveAuction from '../components/ui/Live-auction/LiveAuction';
import '../styles/nft-details.css'
import { Link } from "react-router-dom";

function NftDetails() {

    const {id} = useParams()

    const singleNft = NFT__DATA.find( item => item.id === id )


    return(
        <>
         <CommonSection title={singleNft.title} />
         
         <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' >
                       <img src={singleNft.imgUrl} alt="" className="w-100 single__nft-img " />
                    </Col>

                    <Col lg='6'  md='6' sm='6' >
                        <div className="single__nft__content">


                            <h2>{singleNft.title}</h2>

                            <div className="nft__creator d-flex gap-3 align-items-center ">
                                <div className="creator__img">
                                    <img src={singleNft.creatorImg} alt="" className="w-100" />
                                </div>
                                <div className="creator__detail">
                                    <p>Created By</p>
                                    <h6>{singleNft.creator}</h6>
                                </div>
                            </div> 

                            <div className="nft__spec w-100">
                                <div className="nft__price">Price: <span>{singleNft.currentBid} ETH</span> </div>
                                <div className="category">Category: <span>{singleNft.category}</span>  </div>
                                <div className="cre_date">Created date: <span>{singleNft.createDate}</span> </div>
                            </div>

                            <p className="my-4" >{singleNft.desc}</p>

                            <button className="singleNft-btn d-flex align-items-center gap-2 w-100" >
                                <i class="ri-shopping-bag-line" ></i>
                                <Link to='/wallet' >Place a Bid</Link>
                            </button>


                        </div>
                    </Col>
                </Row>
            </Container>
         </section>

         <LiveAuction />
        </>
    );
}
export default NftDetails