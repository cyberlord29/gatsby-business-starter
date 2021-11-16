import React from 'react'
import { BannerCard, BannerContainer, BannerDescription, BannerTitle, ButtonContainer } from './Banner.component'
import { YellowButton } from '../../globalStyles'

const Banner = (props) => {
    const {title, description, buttonText} = props.data;
    return (
        <BannerContainer>
            <BannerCard>
                <BannerTitle>
                    {title}
                </BannerTitle>
                <BannerDescription>
                    {description}
                </BannerDescription>
            </BannerCard>
            <ButtonContainer>
                <a href="https://launchpad.londontradinginstitute.com" target="_blank">
                <YellowButton>
                  {buttonText}
                </YellowButton>
                </a>
            </ButtonContainer>
        </BannerContainer>
    )
}

export default Banner
