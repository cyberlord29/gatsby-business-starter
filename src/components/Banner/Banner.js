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
                <YellowButton>
                    {buttonText}
                </YellowButton>
            </ButtonContainer>
        </BannerContainer>
    )
}

export default Banner
