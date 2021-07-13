import React from 'react'
import { MenuContainer, MenuTitle, MenuDescription, MenuCard, MenuItemsContainer, MenuItemIllustration, MenuItemTitle, MenuItemDescription, MenuItem} from './Menu.elements'

const MenuItems = [
    {
        image : '',
        title : 'Eat Good Food',
        description: 'It is simple we list your menu online, help you process orders, pick them up and deliver them'
    },
    {
        image : '',
        title : 'Best Quality',
        description: 'It is simple we list your menu online, help you process orders, pick them up and deliver them'
    },
    {
        image : '',
        title : 'Fastest Delivery',
        description: 'It is simple we list your menu online, help you process orders, pick them up and deliver them'
    },
];

const Menu = () => {
    return (
        <MenuContainer>
            <MenuCard>
                <MenuTitle>
                  What's on the menu
                </MenuTitle>
                <MenuDescription>
                  Draft your posts, coordinate with your and orchestrate your social media marketing campaigns everything
                </MenuDescription>
            </MenuCard>
            <MenuItemsContainer>
                {MenuItems.map((item) => <MenuItem>
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
