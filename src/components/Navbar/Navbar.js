
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
                    <NavLink to="/about">
                        Events
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/about">
                        Free Resources
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/about">
                        Indicators
                    </NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink to="/about">
                        Free Consultation
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

