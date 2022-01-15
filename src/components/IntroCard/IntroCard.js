import React from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer } from './IntroCard.element'
import { WhiteButton, YellowButton } from '../../globalStyles'

const IntroCard = (props) => {
    const { title, description, buttons } = props.data
    return (
        <IntroCardContainer>
            <IntroLeftContainer style={{padding: "150px 10px", width: "80%"}}>
                <IntroTitle style={{letterSpacing: "1.7px"}}>
                    A Trader’s Life Can Get Lonely.
                </IntroTitle>
                <DescriptionContainer>
                    {'Join Our Private & Free Community.'}
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "12px", marginTop: "5px"}}>
                    {'Get our Professional Live Chart Analysis for Crypto’s & FX.'}
                </DescriptionContainer>
                <div style={{display: "flex"}}>
                    <InputField placeholder="Type your email"></InputField>
                    <Button>JOIN NOW</Button>
                </div>
                <DescriptionContainer style={{fontSize: "12px", marginTop: "5px", color: "#8790A5"}}>
                    {'Meet Like-Minded Members and Learn Faster.'}
                </DescriptionContainer>
            </IntroLeftContainer>
            <IntroLeftContainer>
                <div style={{width: "100%", height: "100%", backgroundColor: "blue"}}>
                    image
                </div>
            </IntroLeftContainer>
        </IntroCardContainer>
    )
}

export default IntroCard
