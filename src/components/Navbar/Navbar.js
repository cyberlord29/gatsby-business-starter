import React, {useState} from 'react'
import {Nav, NavbarContainer, NavIconContainer, NavMenu, NavItem, NavLink, ActiveIcon} from './Navbar.elements'
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
                <StaticImage src="../../img/logo1.png" height = {60} width={70}/>
            </NavIconContainer> 
             <NavMenu>
                 <NavItem>
                     <NavLink>
                         About Us
                         {/* {selectedIndex == 0  ? <ActiveIcon /> : <div></div> } */}
                     </NavLink>
                     
                 </NavItem>
                 <NavItem>
                     <NavLink>
                         Services
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink>
                         Projects
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink>
                         Awards
                     </NavLink>
                 </NavItem>
             </NavMenu>
           </NavbarContainer>

       </Nav>
    )
}

export default Navbar
