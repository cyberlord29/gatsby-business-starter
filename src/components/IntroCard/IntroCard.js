import React from 'react'
import { IntroCardContainer, IntroTitle, IntroRight, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, WhiteButton, YellowButtonContainer, YellowButton } from './IntroCard.element'

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
                        <WhiteButton>
                            Enter your address
                        </WhiteButton>
                        <WhiteButton>
                            Zip code
                        </WhiteButton>
                    </WhiteButtonsContainer>
                    <YellowButtonContainer>
                        <YellowButton>
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
