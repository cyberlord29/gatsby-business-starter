import React, { useState } from 'react'
import {  InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import { navigate } from "gatsby"
import { FlexContainer } from '../../globalStyles';
import { Banner } from '../About/About.element';
import { Button } from '../Courses/Courses.elements';

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = (props) => {
    const [email, setEmail] = useState(0, "")
    
    const submitLead = () => {
        axios.post(
            "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
            email,
            {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        );
        navigate('/thank-you')
    }

    return (
        <div>
          <IntroCardContainer style={{paddingBottom: "50px"}}>
              <IntroLeftContainerHeader>
                  <div>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px"}}>
                    Pro FX Indicators
                  </IntroTitle>
                  <DescriptionContainer  style={{fontSize: "18px", marginTop: "5px", color: "#8790A5", maxWidth: "500px"}}>
                    The LTI trading indicators have been created to simulate the same rule-based approach that the big institutions follow.
                    <br/><br/>
                    They help you make more accurate and consistent trading decisions, and ultimately improve your trading results.
                  </DescriptionContainer>
                  </div>
              </IntroLeftContainerHeader>
              <IntroLeftContainer className="" style={{flexBasis: "50%"}}>
                  <div style={{width: "100%"}}>
                      <img
                          src={landing}
                          style={{width: "100%", objectFit: "contain", objectPosition: "top right"}}
                          >
                      </img>
                  </div>
              </IntroLeftContainer>
          </IntroCardContainer>
        </div>
    )
}

export default IntroCard
