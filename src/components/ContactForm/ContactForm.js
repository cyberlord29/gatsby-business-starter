import React from 'react'
import { YellowButton } from '../../globalStyles'
import { ContactLabel, Form, FormContainer, InputContainer, InputField, Label } from './ContactForm.elements'

const ContactForm = () => {
    return (
        <FormContainer>
            <Form>
                <ContactLabel>
                    Contact Us
                </ContactLabel>
                <InputContainer>
                    <Label>
                        Full Name
                    </Label>
                    <InputField />
                </InputContainer>
                <InputContainer>
                    <Label>
                        Email
                    </Label>
                    <InputField />
                </InputContainer>
                <InputContainer>
                    <Label>
                        Mobile
                    </Label>
                    <InputField />
                </InputContainer>
                <YellowButton wrap>Submit</YellowButton>
            </Form>
        </FormContainer>
    )
}

export default ContactForm
