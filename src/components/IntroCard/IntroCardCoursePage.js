import React, { useState } from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, ButtonSecondary } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import { navigate } from "gatsby"

axios.defaults.baseURL = 'https://hooks.zapier.com';

const IntroCard = ({title, description}) => {
    const [email, setEmail] = useState(0, "")
    
    const submitLead = () => {
        axios.post(
            "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
            email,
            {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        );
        navigate('/thank-you')
    }
    const initCalendly = () => {
        // console.log(form)
         window.Calendly.initPopupWidget({
           url: 'https://calendly.com/andy-demi/strategy',
         });
      }
    return (
        <IntroCardContainer>
            <IntroLeftContainerHeader>
                <div>
                <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px"}}>
                    {title}
                </IntroTitle>
                <DescriptionContainer style={{marginBottom: "5px", fontSize: "14px"}}>
                    {description}
                </DescriptionContainer>
                <div style={{display: "flex"}}>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email"></InputField>
                    <Button onClick={submitLead}>JOIN NOW</Button>
                </div>
                <DescriptionContainer  style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                    {'Get my free starter call, videos and documents'}
                </DescriptionContainer>
                <ButtonSecondary onClick={initCalendly}
                 style={{fontSize:"16px", marginTop: "25px"}}>Book A Free Strategy Call</ButtonSecondary>
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
    )
}

export default IntroCard
