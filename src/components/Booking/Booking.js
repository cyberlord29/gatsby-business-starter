import React, { useState } from 'react'

import { Banner, InputField, Button } from './Booking.element'
import { FlexContainer, Underline } from '../../globalStyles'
import './index.css'

const Booking = ({lone}) => {

    const [form, setForm]  = useState({name: "", email: ""})

    const initCalendly = () => {
      console.log(form)
       window.Calendly.initPopupWidget({
         url: 'https://calendly.com/andy-demi/strategy',
         prefill: form
       });
    }

    return (
        <div id="calendly" style={{backgroundColor: "#F7F9FF", padding: `${lone?"0px":"5%"}`}}>
          <Banner style={{ height: "auto", borderRadius: "6px" }}>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "8px"}}>
                Book free consultation with a Sr.Trader
            </div>
            <Underline width={10} style={{backgroundColor: "white"}}/>
          </div>
              <FlexContainer style={{marginBottom: "30px" }}>
                <div style={{marginRight: "10px", marginTop: "14px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>Your Name</div>
                    <InputField id="name" onChange={(e)=>setForm({...form,name: e.target.value})} placeholder="Type your name"></InputField>
                </div>
                <div style={{marginTop: "15px", marginBottom: "20px" }}>
                    <div style={{fontSize: "14px", textAlign: "left"}}>Your Email</div>
                    <InputField id="email"onChange={(e)=>setForm({...form,email: e.target.value})} placeholder="Type your email"></InputField>
                </div>
              </FlexContainer>
              <Button onClick={initCalendly}>BOOK FREE CONSULATION</Button>
          </div>
          </Banner>
        </div>
    )
}

export default Booking
