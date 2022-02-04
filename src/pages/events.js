import React from 'react'
import {IntroCardEventsPage, About, Layout, Courses,Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';
import { DescriptionContainer, FeatureItemLarge, IntroTitle } from '../components/IntroCard/IntroCard.element';

const AboutPage = () => {
    return (
        <Layout>
            <IntroCardEventsPage/>
            <div style={{padding: "0px 5%"}}>
              <Header style={{padding: "0px", fontSize: "34px"}}>
                    <div>
                        <div>
                            Latest Events
                        </div>
                        <Underline/>
                    </div>
              </Header>
              </div>
              <FlexContainer style={{display: "flex", width: "100%", justifyContent: "center",
            backgroundColor: "#F7F9FF", padding: "50px 0px", justifyContent: "space-evenly"}}
            >
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                   Webinar
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                  Join
                  </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                  Webinar
                    </IntroTitle>
                    <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                      Join
                    </DescriptionContainer>
                </FeatureItemLarge>
                <FeatureItemLarge>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "16px"}}>
                  Webinar
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "16px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                    Join
                  </DescriptionContainer>
                </FeatureItemLarge>
            </FlexContainer>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
