import React, { useState } from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import { navigate } from "gatsby"

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = (props) => {
    const [email, setEmail] = useState(0, "")
    
    const submitLead = () => {
        axios.post(
            "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
            email,
            {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        );
    }
    return (
        <IntroCardContainer>
            <IntroLeftContainer style={{padding: "3rem 3rem", flexBasis: "50%"}}>
                <div>
                <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px"}}>
                    A Trader’s Life Can Get Lonely.
                </IntroTitle>
                <DescriptionContainer style={{marginBottom: "5px"}}>
                    {'Join Our Private & Free Community.'}
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "12px", marginBottom: "10px"}}>
                    {'Get our Professional Live Chart Analysis for Crypto’s & FX.'}
                </DescriptionContainer>
                <div style={{display: "flex"}}>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email"></InputField>
                    <Button onClick={submitLead}>JOIN NOW</Button>
                </div>
                <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                    {'Meet Like-Minded Members and Learn Faster.'}
                </DescriptionContainer>
                </div>
            </IntroLeftContainer>
            <IntroLeftContainer className="" style={{flexBasis: "50%"}}>
                <div style={{width: "100%"}}>
                    <img
                        src={landing}
                        style={{width: "100%", objectFit: "contain", objectPosition: "top right"}}
                    >
                    </img>
                    <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <FeatureItem>
                        Experienced Mentors
                    </FeatureItem>
                    <FeatureItem>
                        Professional Traders
                    </FeatureItem>
                    <FeatureItem>
                        Weekly Webinars
                    </FeatureItem>
                    </div>
                </div>
            </IntroLeftContainer>
        </IntroCardContainer>
    )
}

export default IntroCard
