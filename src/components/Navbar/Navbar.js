import React from 'react'
import {Nav, NavbarContainer, NavIcon, NavMenu, NavItem, NavLink} from './Navbar.elements'


const Navbar = () => {

   
    return (
       <Nav>
           <NavbarContainer>
             <NavIcon src = "https://cdn.dribbble.com/users/2328616/screenshots/11047882/media/9176c1eed2452a79deccf37316f06027.png?compress=1&resize=400x300" alt = "Logo"></NavIcon>
             <NavMenu>
                 <NavItem>
                     <NavLink>
                         About Us
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
