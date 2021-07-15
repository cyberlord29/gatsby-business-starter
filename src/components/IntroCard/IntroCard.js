import React from 'react'
import { IntroCardContainer, IntroTitle, IntroRight, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer } from './IntroCard.element'
import { WhiteButton, YellowButton } from '../../globalStyles'
const IntroCard = () => {
    return (
        <IntroCardContainer>
            <IntroLeftContainer>
                <IntroTitle>
                    Become the best Delivery man
                </IntroTitle>
                <DescriptionContainer>
                    50% of workers dont have access to health and safety resources. We're on fix them in a quick delivery time
                </DescriptionContainer>
                <ButtonsContainer>
                    <WhiteButtonsContainer>
                        <WhiteButton maxWidth>
                            Enter your address
                        </WhiteButton>
                        <WhiteButton maxWidth>
                            Zip code
                        </WhiteButton>
                    </WhiteButtonsContainer>
                    <YellowButtonContainer>
                        <YellowButton maxWidth>
                            Go to menus
                        </YellowButton>
                    </YellowButtonContainer>
                </ButtonsContainer>
            </IntroLeftContainer>
            <IntroRight>
            </IntroRight>
        </IntroCardContainer>
    )
}

export default IntroCard
