import React from 'react'
import { BannerCard, BannerContainer, BannerDescription, BannerTitle, ButtonContainer } from './Banner.component'
import { YellowButton } from '../../globalStyles'

const Banner = () => {
    return (
        <BannerContainer>
            <BannerCard>
                <BannerTitle>
                    Free unlimited delivery for 30 days!
                </BannerTitle>
                <BannerDescription>
                    Inspiration, special offers and you believe should be available for same day delivery when we launch Moon
                </BannerDescription>
            </BannerCard>
            <ButtonContainer>
                <YellowButton>
                    Get started!
                </YellowButton>
            </ButtonContainer>
        </BannerContainer>
    )
}

export default Banner
