import React from 'react'
import { AboutUsContainer, AboutUsLabel, AboutUsTitle, AboutUsDescription, AboutUsCard, ReadMoreLink } from './AboutUs.elements'

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <AboutUsLabel>
                -- about us
            </AboutUsLabel>
            <AboutUsCard>
                <AboutUsTitle>
                    A whole different kind of architecture firm
                </AboutUsTitle>
                <AboutUsDescription>
                    We do it through expertise, creativity, and attention to every detail-our ingredients for over <b>12 years</b> of success. We are driven by an ambition to enable architecture to become a sustainable change agent. Our starting point is always what buildings can do for people and local communities.
                </AboutUsDescription>
                <ReadMoreLink>
                    Read More
                </ReadMoreLink>
 
            </AboutUsCard>
        </AboutUsContainer>
    )
}

export default AboutUs
