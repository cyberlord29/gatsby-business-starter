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

const PricingCards = (props) => {
    const plans = props.data
    return (
    <PricingCardsContainer>
        {plans.map((pricingCard) => 
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
