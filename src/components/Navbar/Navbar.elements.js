import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'gatsby';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
`;

export const NavIconContainer = styled.div`
    flex-basis: 50%;
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

export const ActiveIcon = styled.div`
    background-color: "#f05b5c";
    width: 65px;
    height: 65px;
    border-radius: 1000px;
    border-left: 50px solid white;
    border-bottom: 50px solid white;
            `;

