import React, {useState} from 'react'
import {  Button, InputField, IntroCardContainer, IntroTitle, DescriptionContainer, IntroLeftContainer, ButtonsContainer, WhiteButtonsContainer, YellowButtonContainer, FeatureItem, IntroLeftContainerHeader, FeatureItemLarge } from './IntroCard.element'
import landing from '../../img/landing.png'
import axios from 'axios';
import { FlexContainer, RadioButton, RadioButtonLabel } from '../../globalStyles';
import { navigate } from "gatsby"

const IntroCard = (props) => {
    const [email, setEmail] = useState(0, "")
    const [select, setSelect] = useState("optionA");

    const handleSelectChange = event => {
      const value = event.target.value;
      setSelect(value);
    };

    const submitLead = () => {
        axios.post(
            "https://hooks.zapier.com/hooks/catch/2431386/bd6vpsv",
            email,
            {headers:  {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        );
        navigate('/thank-you')
    }

    return (
        <div>
          <IntroCardContainer style={{backgroundColor: "rgb(23, 38, 71)", marginTop: "8px"}}>
              <IntroLeftContainerHeader style={{backgroundColor: "rgb(23, 38, 71)"}}>
                  <div>
                  <IntroTitle style={{letterSpacing: "1.7px", marginBottom: "20px", color: "white"}}>
                    Register for our next live trading event
                  </IntroTitle>
                <div style={{display: "flex", color: "white"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="radio" id="age1" name="crypto" />
                        <label style={{margin: "0px 5px"}} >Crypto</label>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="radio" id="age2" name="forex" />
                        <label style={{margin: "0px 5px"}} >Forex</label><br/>  
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                    <input type="radio" id="age3" name="algo"  />
                    <label style={{margin: "0px 5px"}} >Algo</label><br/><br/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="radio" id="age3" name="opt" />
                        <label style={{margin: "0px 5px"}} >Options</label><br/><br/>
                    </div>
                </div>
                  <div style={{display: "flex"}}>
                    <InputField onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email"></InputField>
                    <Button onClick={submitLead}>REGISTER NOW</Button>
                </div>
                  </div>
              </IntroLeftContainerHeader>
              <IntroLeftContainer className="" style={{flexBasis: "50%"}}>
                  <div style={{width: "100%"}}>
                      <img
                          src={landing}
                          style={{width: "100%", objectFit: "contain", objectPosition: "top right"}}
                          >
                      </img>
                  </div>
              </IntroLeftContainer>
          </IntroCardContainer>
        </div>
    )
}

export default IntroCard
