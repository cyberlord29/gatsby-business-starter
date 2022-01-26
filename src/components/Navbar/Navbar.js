
import React, {useState} from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavIconContainer,
    NavMenu, 
    NavItem, 
    NavLink, 
    NavButton, 
    NavButtonContainer, 
    IconLabelContainer, 
    IconLabel
} from './Navbar.elements'
import logo from '../../img/logo-h.svg'
import { Button } from '../Courses/Courses.elements'
import { ModalContainer, Modal } from '../../globalStyles'
import Booking from '../Booking/Booking'

const Navbar = () => {
    const [show, toggleModal]  = useState(false)

    return (
       <Nav>
               { show && <ModalContainer>
     <Modal>
        <Booking lone></Booking>
     </Modal>
 </ModalContainer>}
           <NavbarContainer>
             <NavIconContainer to = '/'>
                <IconLabelContainer>
                    <IconLabel>
                        <img
                            className="icon"
                            src={logo}
                            height={50}
                        >
                        </img>
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
             <NavMenu className="no-mobile">
                <NavItem>
                    <NavLink to="/">
                        Home
                    </NavLink>
                 </NavItem>
                 {/* <NavItem>
                    <NavLink to="/courses">
                        Courses
                    </NavLink>
                 </NavItem> */}
                 <NavItem>
                    <NavLink to="/about">
                        About
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                 </NavItem>
                 {/* <NavItem>
                    <NavLink to="/about">
                        Free Resources
                    </NavLink>
                 </NavItem> */}
                 <NavItem>
                    <NavLink to="/indicators">
                        Indicators
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/">
                            <Button style={{padding: "5px 10px", marginTop: "0px"}} onClick={() =>{toggleModal(true)}}>
                            Free Consultation
                        </Button>
                    </NavLink>
                 </NavItem>
             </NavMenu>
             {/* <NavButtonContainer>
                <NavButton>
                    <NavLink bold to="/pricing">
                        Pricing
                    </NavLink>
                </NavButton>
             </NavButtonContainer> */}
           </NavbarContainer>

       </Nav>
    )
}

export default Navbar

