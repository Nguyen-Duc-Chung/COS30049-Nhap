import React,{useState} from "react";

import CommonSection from '../components/ui/Common-section/CommonSection'
import NftCard from '../components/ui/Nft-card/NftCard'
import { NFT__DATA } from '../assets/data/data'

import { Container, Row, Col } from "reactstrap"

import '../styles/market.css'

function Market() {

    const [data, setData] = useState(NFT__DATA)

    const handleCategory =()=>{}

    const handleItems =()=>{}

    // /////////////////
    const handleSort =(e)=>{
        const filterValue = e.target.value

        if(filterValue === 'high' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 6)

            setData(filterData)
        }
        if(filterValue === 'mid' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6 )

            setData(filterData)
        }
        if(filterValue === 'low' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50 )

            setData(filterData)
        }

    };

    return(
        <>
         <CommonSection title={"MarketPlace"} />
          
          <section>
            <Container className='mainCon'>
                <Row className='mainRow' >
                    <Col lg='12' className=' mainCol mb-5'>
                        <div className="market__product__filter d-flex align-items-center  justify-content-around ">
                            <div className="filter__left  d-flex align-items-center gap-5 ">
                                <div className="all__category__filter">
                                    <select onChange={handleCategory} >
                                        <option> All Categories </option>
                                        <option value="art"> Art </option>
                                        <option value="music"> Music</option>
                                        <option value="domain-name"> Domain Name</option>
                                        <option value="virtual-world"> Virtual World</option>
                                        <option value=""> Trending Cards</option>
                                    </select>
                                </div>

                                <div className="all__items__filter">
                                    <select onChange={handleItems} >
                                        <option>All Items</option>
                                        <option value="single-item"> Single Items </option>
                                        <option value="bundle"> Bundle</option>
                                    </select>
                                </div>
                            </div>

                            <div className="filter__right">
                                    <select onChange={handleSort} >
                                        <option> Sort By </option>
                                        <option value="high"> High rate </option>
                                        <option value="mid"> Mid rate </option>
                                        <option value="low"> Low rate </option>
                                    </select>

                            </div>
                        </div>
                    </Col>

                    {
                        data?.map(item=>(

                            <Col lg='3' md='4' sm='6' className="mb-4" key={item.id}>
                                <NftCard item={item}></NftCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>          
          </section>
        </>
    );
}

export default Market;