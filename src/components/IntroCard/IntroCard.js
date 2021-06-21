import React from 'react'
import { IntroCardContainer, IntroTitle, IntroRight, StatTitle, StatValue, StatContainer, StatsContainer, DescriptionContainer } from './IntroCard.element'

const IntroCard = () => {
    return (
        <IntroCardContainer>
            <IntroTitle>
                Architects with different approach
            </IntroTitle>
            <IntroRight>
                <StatsContainer>
                    <StatContainer>
                        <StatValue>12</StatValue>
                        <StatTitle>Years Experience</StatTitle>
                    </StatContainer>
                    <StatContainer>
                        <StatValue>357</StatValue>
                        <StatTitle>Properties Built</StatTitle>
                    </StatContainer>
                    <StatContainer>
                        <StatValue>19</StatValue>
                        <StatTitle>Awards Gained</StatTitle>
                    </StatContainer>
                </StatsContainer>
                <DescriptionContainer>
                Founded in Copenhagen with offices worldwide, <b>Reflex</b> is a studio made up of a highly specialized team of architects, designers, engineers, thinkers and doers.
                </DescriptionContainer>
            </IntroRight>
        </IntroCardContainer>
    )
}

export default IntroCard
