import React from 'react'
import { MenuContainer, MenuTitle, MenuDescription, MenuCard, MenuItemsContainer, MenuItemIllustration, MenuItemTitle, MenuItemDescription, MenuItem} from './Menu.elements'
import './index.css'

const Menu = (props) => {
    const { title, description, items } = props.data
    return (
        <MenuContainer>
            <MenuCard>
                <MenuTitle>
                  {title}
                </MenuTitle>
                <MenuDescription>
                  {description}
                </MenuDescription>
            </MenuCard>
            <MenuItemsContainer>       
                <table style={{
                    width: "80%"
             }}>
                <tr>
                    <th></th>
                    <th style={{textAlign: "left"}}>Basic</th>
                    <th style={{textAlign: "left"}}>Advanced</th>
                    <th style={{textAlign: "left"}}>Funded</th>
                </tr>
                <tr>
                    <td>Trading Period</td>
                    <td>30 Days</td>
                    <td>60 Days</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Minimum Trading Days</td>
                    <td>10 Days</td>
                    <td>20 Days</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Maximum Daily Loss</td>
                    <td>5%</td>
                    <td>5%</td>
                    <td>5%</td>
                </tr>
                <tr>
                    <td>Maximum Loss</td>
                    <td>10%</td>
                    <td>5%</td>
                    <td>5%</td>
                </tr>
                <tr>
                    <td>Profit Target</td>
                    <td>10%</td>
                    <td>5%</td>
                    <td>-</td>
                </tr>
                </table>
            </MenuItemsContainer>
        </MenuContainer>
    )
}

export default Menu
