import React from "react";
import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import Trending from "../components/ui/Trending-section/Trending";
import StepSection from "../components/ui/Step-section/StepSection";
import IntroSection from "../components/ui/Intro-section/IntroSection";

function Home() {
    return(
        <>
        <IntroSection/>
        <HeroSection/>
        <LiveAuction />
        <SellerSection />
        <Trending />
        <StepSection />
        </>
    );
}

export default Home;