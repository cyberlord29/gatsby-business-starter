import React from 'react'
import { MenuContainer, MenuTitle, MenuDescription, MenuCard, MenuItemsContainer, MenuItemIllustration, MenuItemTitle, MenuItemDescription, MenuItem} from './Menu.elements'

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
                {items.map((item) => <MenuItem>
                    <MenuItemIllustration />     
                    <MenuItemTitle>
                        {item.title}
                    </MenuItemTitle>
                    <MenuItemDescription>
                        {item.description}
                    </MenuItemDescription>
                </MenuItem>)}
            </MenuItemsContainer>
        </MenuContainer>
    )
}

export default Menu
