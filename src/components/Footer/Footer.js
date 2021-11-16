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
import logo from '../../img/logo.png'

const Footer = () => {
    return (
        <FooterContainer>
             <NavIconContainer>
                {/* <StaticImage src="../../img/logo2.png" height = {60} width={70}/> */}
                <IconLabelContainer>
                </IconLabelContainer>
            </NavIconContainer> 
            <SocialMediaContainer>
                <FaLinkedinIn />
                <FaFacebookF />
                <AiOutlineTwitter />
            </SocialMediaContainer>
            <CopyrightContainer>
                <IconLabel>
                    <img
                        src={logo}
                        height={50}
                    >
                    </img>
                </IconLabel>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer
