import styled, {css} from 'styled-components'
import { Link } from 'gatsby';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
`;

export const NavIconContainer = styled(Link)`
    flex-basis: 60%;
    justify-self: flex-start;
    text-decoration: none;
    cursor: pointer;
    display: flex;
`;

export const IconLabelContainer = styled.div`
    vertical-align: middle;
`;

export const IconLabel = styled.h5`
    padding-left: 10px;
    padding-top: 20px;
    color: black;
    font-size: 1.3rem;
    vertical-align: middle;
`;

export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 0;
`;

export const NavItem = styled.li`
    height: 50px;
    font-size: 1rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    margin-right: 10px;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    color: grey;
    width: 100%;

    &:active {
        color: black;
    }
    &:hover {
        color: black
    }
    ${props => props.bold && css`
        color: black
    `}
`;

export const ActiveIcon = styled.div`
    background-color: "#f05b5c";
    width: 65px;
    height: 65px;
    border-radius: 1000px;
    border-left: 50px solid white;
    border-bottom: 50px solid white;
    `;

export const NavButtonContainer = styled.div`
    margin-top: 10px;
`;


export const NavButton = styled.button`
    background-color: white;
    font-size: 1rem;
    color: #007AFF;
    font-weight: bold;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #007AFF;
    cursor: pointer;
    &:hover {
        background-color: #007AFF;
    }
`

