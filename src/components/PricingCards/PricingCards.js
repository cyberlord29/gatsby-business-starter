import React from 'react'
import {
    PricingCardsContainer,
    PricingCard,
    PricingPlanName,
    Price,
    PriceCycle,
    PriceDescription,
    PerksContainer,
    Perk,
    PriceContainer,
    PerkContainer
} from './PricingCards.elements'

import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { WhiteButton } from '../../globalStyles';

const PricingCardsData = [
    {
        planName : 'Intro',
        price: '$19',
        cycle: '/ Month',
        description: 'For most businesses that want to optimize web queries',
        perks: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
        ],
        isFeatured: false,
    },
    {
        planName : 'Base',
        price: '$29',
        cycle: '/ Month',
        description: 'For most businesses that want to optimize web queries',
        perks: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
        ],
        isFeatured: true,
    },
    {
        planName : 'Popular',
        price: '$39',
        cycle: '/ Month',
        description: 'For most businesses that want to optimize web queries',
        perks: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
        ],
        isFeatured: false,
    },
];

const PricingCards = () => {
    return (
    <PricingCardsContainer>
        {PricingCardsData.map((pricingCard) => 
        <PricingCard {...pricingCard.isFeatured ? "primary" : ""}> 
           <PricingPlanName>
               {pricingCard.planName}
           </PricingPlanName>
           <PriceContainer>
                <Price>{pricingCard.price}</Price>
                <PriceCycle>{pricingCard.cycle}</PriceCycle>
           </PriceContainer>
           <PriceDescription>{pricingCard.description}</PriceDescription>
           <PerksContainer>
               {pricingCard.perks.map((perk) => 
               (
               <PerkContainer>
                    <IoCheckmarkDoneCircle color = "#ef9d3a" />
                   <Perk>
                   {perk}
                    </Perk> 
               </PerkContainer>
               )
            )}
           </PerksContainer>
           <WhiteButton>Buy now</WhiteButton>
        </PricingCard>)}
    </PricingCardsContainer>
    );
}

export default PricingCards
