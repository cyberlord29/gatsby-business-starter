import React, {useEffect, useState} from 'react'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from '../ContactForm/ContactForm.elements'
import { Button } from '../Courses/Courses.elements'
import { Modal, ModalContainer } from '../../globalStyles'
import axios from 'axios';
import { navigate } from "gatsby"

const IndexPage = ({emailInput, showInput}) => {
  const [display, toggleModal] = useState(showInput)
  const [email, setEmail]  = useState()
  const [name, setName]  = useState()
  const submitLead = () => {
    axios.post(
        "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
        email,
        {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    );
    navigate('/thank-you');
  }
  useEffect(() => {
    toggleModal(showInput)
  }, [showInput,emailInput])

    if(!display) return(<></>);

    return (
      <>
        <ModalContainer>
          <Modal>
            <span style={{display: display,textAlign: "right", margin: "15px", fontSize: "20px", cursor: "pointer", color: "grey"}}
            onClick={()=>{toggleModal(false)}}>&#x2715;</span>
            <FormContainer>
                <ContactLabel style={{fontSize: "26px"}}>
                  Let us know more about you
                </ContactLabel>
                <InputContainer>
                    <Label>
                        Name
                    </Label>
                    <InputField onChange={(e)=>{setName(e.target.value)}} id="name"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Mobile
                    </Label>
                    <InputField onChange={(e)=>{setName(e.target.value)}} id="number"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Email
                    </Label>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} id="email" value={emailInput?emailInput:""}/>
                </InputContainer>
                <Button style={{fontSize: "30px"}} onClick={submitLead}>Submit</Button>
            </FormContainer>
          </Modal>
      </ModalContainer>
      </>
    )
}

export default IndexPage