import React, { useState } from 'react'
import { MenuContainer, MenuTitle, MenuDescription, MenuCard, MenuItemsContainer, MenuItemIllustration, MenuItemTitle, MenuItemDescription, MenuItem} from './Menu.elements'
import { WhiteButton } from '../../globalStyles';
import './index.css'

const Menu = (props) => {
    const { title, description, items } = props.data
    const [size, setSize] = useState(50000)
    console.log(size)
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
                <div className="account-size-selection">
                    <div style={{marginRight: "25px", fontWeight: "bold", fontSize: "26px"}}>
                      Balance
                    </div>
                    <WhiteButton selected={size==25000} onClick={()=>setSize(25000)}>$25,000</WhiteButton>
                    <WhiteButton selected={size==50000} onClick={()=>setSize(50000)}>$50,000</WhiteButton>
                    <WhiteButton selected={size==100000} onClick={()=>setSize(100000)}>$100,000</WhiteButton>
                    <WhiteButton selected={size==200000} onClick={()=>setSize(200000)}>$200,000</WhiteButton>
                </div>
                <table style={{
                  width: "100%"
                }}>
                <tr>
                    <th></th>
                    <th style={{textAlign: "left"}}>Phase 1 - Assessment</th>
                    <th style={{textAlign: "left"}}>Phase 2 - Verification</th>
                    <th style={{textAlign: "left"}}>1000Plus Capital Funded</th>
                </tr>
                <tr>
                    <td><div>Trading Period</div></td>
                    <td><div>30 Days</div></td>
                    <td><div>60 Days</div></td>
                    <td><div>-</div></td>
                </tr>
                <tr>
                    <td><div>Minimum Trading Days</div></td>
                    <td><div>10 Days</div></td>
                    <td><div>10 Days</div></td>
                    <td><div>-</div></td>
                </tr>
                <tr>
                    <td><div>Maximum Daily Loss</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                </tr>
                <tr>
                    <td><div>Maximum Loss</div></td>
                    <td><div>${size*10/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                </tr>
                <tr>
                    <td><div>Profit Target</div></td>
                    <td><div>${size*10/100}</div></td>
                    <td><div>${size*5/100}</div></td>
                    <td><div>-</div></td>
                </tr>
                </table>
            </MenuItemsContainer>
        </MenuContainer>
    )
}

export default Menu
