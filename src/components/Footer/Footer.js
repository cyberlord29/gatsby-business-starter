import React from 'react'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import { 
    FooterContainer, 
    FooterLeft, 
    FooterRight,
    FooterLabel, 
    ContactsContainer, 
    ContactLabel, 
    ContactInfo, 
    ContactEmail, 
    ContactContainer,
    BottomContainer,
    SocialMediaContainer,
    CopyrightContainer,
} from './Footer.elements'
const Footer = () => {
    return (
        <div>
        <FooterContainer>
            <FooterLeft>
            </FooterLeft>
            <FooterRight>
                <FooterLabel>
                    Contact Us
                </FooterLabel>
                <ContactsContainer>
                    <ContactContainer>
                        <ContactLabel>
                            For Clients
                        </ContactLabel>
                        <ContactInfo>
                            +38 (097) 534 74 50
                        </ContactInfo>
                        <ContactEmail>
                            jp@reflex.com
                        </ContactEmail>
                    </ContactContainer>
                    <ContactContainer>
                        <ContactLabel>
                            Office
                        </ContactLabel>
                        <ContactInfo>
                            st. Marion Jola, 13, Toge, 02000
                        </ContactInfo>
                    </ContactContainer>
                    <ContactContainer>
                        <ContactLabel>
                            For Contractors
                        </ContactLabel>
                        <ContactInfo>
                            +38 (067) 483 28 81
                        </ContactInfo>
                        <ContactEmail>
                            info@reflex.com
                        </ContactEmail>
                    </ContactContainer>
                </ContactsContainer>
            </FooterRight>
        </FooterContainer>
        <BottomContainer>
            <SocialMediaContainer>
                <FaLinkedinIn color = "white" />
                <FaFacebookF color = "white" />
                <AiOutlineTwitter color = "white" />
            </SocialMediaContainer>
            <CopyrightContainer>
                Company 2019 All rights reserved
            </CopyrightContainer>
        </BottomContainer>
                    </div>
    )
}

export default Footer
