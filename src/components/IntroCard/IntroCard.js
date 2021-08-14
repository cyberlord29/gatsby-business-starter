import React from 'react'
import { IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer } from './IntroCard.element'
import { WhiteButton, YellowButton } from '../../globalStyles'
const IntroCard = (props) => {
    const { title, description, buttons } = props.data
    return (
        <IntroCardContainer>
            <IntroLeftContainer>
                <IntroTitle>
                    {title}
                </IntroTitle>
                <DescriptionContainer>
                    {description}
                </DescriptionContainer>
                <ButtonsContainer>
                    <YellowButtonContainer>
                        <YellowButton maxWidth>
                            {buttons.buttonText3}
                        </YellowButton>
                    </YellowButtonContainer>
                </ButtonsContainer>
            </IntroLeftContainer>
        </IntroCardContainer>
    )
}

export default IntroCard
