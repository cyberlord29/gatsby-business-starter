import React from 'react'
import { BannerCard, BannerContainer, BannerDescription, BannerTitle, ButtonContainer } from './Banner.component'
import { YellowButton } from '../../globalStyles'
import { ContactLabel, Form, FormContainer, InputContainer, InputField, Label } from '../ContactForm/ContactForm.elements'

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
                <FormContainer style={{margin: "40px 0px"}}>
                    <Form onSubmit = {()=>{}}>
                        <InputContainer>
                            <Label>
                                Full Name
                            </Label>
                            <InputField id="name"/>
                        </InputContainer>
                        <InputContainer>
                            <Label>
                                Email
                            </Label>
                            <InputField id="email"/>
                        </InputContainer>
                        <InputContainer>
                            <Label>
                                Mobile
                            </Label>
                            <InputField id="mobile"/>
                        </InputContainer>
                        <YellowButton wrap>Get Started</YellowButton>
                    </Form>
                </FormContainer>
            </BannerCard>
        </BannerContainer>
    )
}

export default Banner
