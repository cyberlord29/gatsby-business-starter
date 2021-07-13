import React from 'react'
import { PricingBannerContainer, BannerTitle, BannerDescription } from './PricingBanner.elements'

const PricingBanner = () => {
    return (
        <PricingBannerContainer>
            <BannerTitle>
                Simple, transparent and flexible pricing
            </BannerTitle>
            <BannerDescription>
                No contracts, No surprise fees
            </BannerDescription>
        </PricingBannerContainer>
    )
}

export default PricingBanner
