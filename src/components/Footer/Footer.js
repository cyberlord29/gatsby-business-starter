import React from 'react'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import { StaticImage } from 'gatsby-plugin-image';
import { 
    FooterContainer, 
    SocialMediaContainer,
    CopyrightContainer,
    NavIconContainer,
    IconLabelContainer,
    IconLabel
} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
             <NavIconContainer>
                {/* <StaticImage src="../../img/logo2.png" height = {60} width={70}/> */}
                <IconLabelContainer>
                    <IconLabel>
                        1000Plus Capital
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
            <SocialMediaContainer>
                <FaLinkedinIn />
                <FaFacebookF />
                <AiOutlineTwitter />
            </SocialMediaContainer>
            <CopyrightContainer>
                100PlusCapital 2021 All rights reserved
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
