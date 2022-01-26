
import React from 'react'
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
const Navbar = () => {
    return (
       <Nav>
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
                    <NavLink to="/courses">
                        Courses
                    </NavLink>
                 </NavItem>
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
                            <Button onClick={() => window.document.getElementById('booking-box').scrollIntoView()} style={{marginTop: "0px", padding: "5px 10px"}}>
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

