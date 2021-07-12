import React from 'react'
import { FeatureContainer, FeatureTitle, FeatureDescription, FeatureCard, FeatureItemsContainer, FeatureItemIllustration, FeatureItemTitle, FeatureItemDescription, FeatureItem} from './Features.elements'

const FeatureItems = [
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

const Features = () => {
    return (
        <FeatureContainer>
            <FeatureCard>
                <FeatureTitle>
                  Why we are the best
                </FeatureTitle>
                <FeatureDescription>
                   This minimalist and eclectic composed of several recycled invites from scratch to share a passion for cooking
                </FeatureDescription>
            </FeatureCard>
            <FeatureItemsContainer>
                {FeatureItems.map((item) => <FeatureItem>
                    <FeatureItemIllustration />     
                    <FeatureItemTitle>
                        {item.title}
                    </FeatureItemTitle>
                    <FeatureItemDescription>
                        {item.description}
                    </FeatureItemDescription>
                </FeatureItem>)}
            </FeatureItemsContainer>
        </FeatureContainer>
    )
}

export default Features
