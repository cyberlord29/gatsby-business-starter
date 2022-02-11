import React, {useEffect, useState} from 'react'
import { ContactLabel, FormContainer, InputContainer, InputField, Label } from '../ContactForm/ContactForm.elements'
import { Button } from '../Courses/Courses.elements'
import { Modal, ModalContainer } from '../../globalStyles'
import axios from 'axios';
import { navigate } from "gatsby"
import { set } from 'lodash';

const IndexPage = ({emailInput, showInput, course}) => {
  const [display, toggleModal] = useState(false)
  const [email, setEmail]  = useState(emailInput)
  const [name, setName]  = useState()
  const [mobile, setMobile]  = useState()

  const submitLead = () => {
    axios.post(
      `https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv?course=${course}&email=${email}&name=${name}&mobile=${mobile}`,
      email,
      {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
    );
    navigate('/thank-you');
  }
  useEffect(() => {
    console.log(showInput)
    if(showInput>1)
    toggleModal(true)
  }, [showInput])

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
                    <InputField onChange={(e)=>{setMobile(e.target.value)}} id="number"/>
                </InputContainer>
                <InputContainer>
                    <Label>
                        Email
                    </Label>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} id="email" value={email}/>
                </InputContainer>
                <Button style={{fontSize: "30px"}} onClick={submitLead}>Submit</Button>
            </FormContainer>
          </Modal>
      </ModalContainer>
      </>
    )
}

export default IndexPage