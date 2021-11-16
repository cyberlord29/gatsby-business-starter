
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
import logo from '../../img/logo.png'
const Navbar = () => {
    return (
       <Nav>
           <NavbarContainer>
             <NavIconContainer to = '/'>
                <IconLabelContainer>
                    <IconLabel>
                        <img
                        src={logo}
                        height={50}
                        >
                        </img>
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
             <NavMenu>
                 <NavItem>
                        {/* <NavLink to="/contact">
                            Contact
                        </NavLink> */}
                 </NavItem>
             </NavMenu>
             <NavButtonContainer>
                <NavButton>
                    <NavLink bold to="/pricing">
                        Pricing
                    </NavLink>
                </NavButton>
             </NavButtonContainer>
           </NavbarContainer>

       </Nav>
    )
}

export default Navbar

