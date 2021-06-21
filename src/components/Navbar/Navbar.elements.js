import styled from 'styled-components'
import { Container } from '../../globalStyles';
import {Link} from 'gatsby';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 70px;
    ${Container}
`;

export const NavIcon = styled.img`
    height: 60px;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 0;
`;

export const NavItem = styled.li`
    color: ${props => props.active ? "#f05b5c" : "black"};
    height: 50px;
    font-size: 1rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin-right: 50px;

    &:hover {
        color: #f05b5c;
        border-bottom: 2px solid #f05b5c;

    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
`;

