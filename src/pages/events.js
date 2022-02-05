import React from 'react'
import {IntroCardEventsPage, About, Layout, Courses,Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';
import { DescriptionContainer, FeatureItemLarge, IntroTitle } from '../components/IntroCard/IntroCard.element';
import { Button } from '../components/Booking/Booking.element';

const AboutPage = () => {
    return (
        <Layout>
            <IntroCardEventsPage/>
              <Banner>
                <div>
                  Learn My Exact Rule Based Blueprint for Trading Forex
                </div>
                <DescriptionContainer style={{color: "white"}}>
                  On this FREE Training Former Hedge Fund Trader Reveals His Little-Known FX Secrets That Anyone Can Use to Profit Consistently
                </DescriptionContainer>
                <FlexContainer style={{margin: "50px 20px", justifyContent: "space-around", alignItems:"center", color: "white"}}>
                  <iframe className="video" style={{borderRadius: "32px"}} src="https://www.youtube.com/embed/3ZQ6L4GXOJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div style={{padding: "50px"}}>
                    <IntroTitle style={{color: "white"}}>
                    What You Will Learn In The Webinar
                    </IntroTitle>
                    <div className="mobile-center">
                    <IntroTitle style={{color: "white", fontSize: "24px"}}>
                    My 80% Winning Trading Strategy
                    </IntroTitle>
                    <DescriptionContainer style={{color: "white",margin: "20px 0px"}}>
                    Learn my beginner friendly strategy that works on all major FX  pairs with over 10 years track record of results
                    </DescriptionContainer>
                    <IntroTitle style={{color: "white", fontSize: "24px"}}>
                    Learn How to Win Consistently 
                    </IntroTitle>
                    <DescriptionContainer style={{color: "white",margin: "20px 0px"}}>
                    Anyone can get lucky on a few trades but you are going to learn the secret to making profits over and over again. 
                    </DescriptionContainer>
                    <IntroTitle style={{color: "white", fontSize: "24px"}}>
                    Steps to  £100K Per Year Income
                    </IntroTitle>
                    <DescriptionContainer style={{color: "white",margin: "20px 0px"}}>
                    Follow a proven Trading Strategy and then leverage OPM to make a Six Figure Income in under 3 months.
                    </DescriptionContainer>
                    <a href="https://event.webinarjam.com/register/1click/1/zyx07cx?first_name=First&last_name=Last&email=YOU%40YOUREMAIL.com&phone_country_code=%2B1&phone_number=1234567890&timezone=GMT-7&schedule_id=1">
                      <Button>Register</Button>
                    </a>
                    </div>
                  </div>
                </FlexContainer>
              </Banner>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
