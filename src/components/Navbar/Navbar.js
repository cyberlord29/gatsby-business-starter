
import React, {useState} from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavIconContainer,
    NavMenu, NavItem, 
    NavLink, ActiveIcon, 
    NavButton, 
    NavButtonContainer, 
    IconLabelContainer, 
    IconLabel
} from './Navbar.elements'
import { StaticImage }from 'gatsby-plugin-image'

const Navbar = () => {

    const [selectedIndex, setselectedIndex] = useState(0);

    const handlePageChange = (index) => {
        setselectedIndex(index);
    }
    return (
       <Nav>
           <NavbarContainer>
             <NavIconContainer>
                <StaticImage src="../../img/logo2.png" height = {60} width={70}/>
                <IconLabelContainer>
                    <IconLabel>
                        Dulcet
                    </IconLabel>
                </IconLabelContainer>
            </NavIconContainer> 
             <NavMenu>
                 <NavItem>
                     <NavLink>
                         How it works
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink>
                         Contact
                     </NavLink>
                 </NavItem>
             </NavMenu>
             <NavButtonContainer>
                <NavButton>
                     Pricing
                </NavButton>
             </NavButtonContainer>
           </NavbarContainer>

       </Nav>
    )
}

export default Navbar

