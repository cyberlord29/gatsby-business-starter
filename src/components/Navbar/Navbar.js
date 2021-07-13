
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

const Navbar = () => {
    return (
       <Nav>
           <NavbarContainer>
             <NavIconContainer to = '/'>
                <IconLabelContainer>
                    <IconLabel>
                        Dulcet
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
             <NavMenu>
                 <NavItem>
                     <NavLink to="/how-it-works">
                         How it works
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink to="/contact">
                         Contact
                     </NavLink>
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

