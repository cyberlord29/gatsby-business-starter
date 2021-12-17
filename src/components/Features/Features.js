import React from 'react'
import { FeatureContainer, FeatureTitle, FeatureDescription, FeatureCard, FeatureItemsContainer, FeatureItemIllustration, FeatureItemTitle, FeatureItemDescription, FeatureItem} from './Features.elements'
import one from '../../img/one.png'

const Features = (props) => {
    const {title, description, items} = props.data;
    return (
        <FeatureContainer>
            <FeatureCard>
                <FeatureTitle>
                  {title}
                </FeatureTitle>
                <FeatureDescription>
                   {description}
                </FeatureDescription>
            </FeatureCard>
            <FeatureItemsContainer>
                {items.map((item) => {
                console.log("../.."+item.image);
                return (<FeatureItem>
                    <FeatureItemIllustration>
                        <img src = {one} height={120}/>    
                    </FeatureItemIllustration> 
                    <FeatureItemTitle>
                        {item.title}
                    </FeatureItemTitle>
                    <FeatureItemDescription>
                        {item.description}
                    </FeatureItemDescription>
                </FeatureItem>)})}
            </FeatureItemsContainer>
        </FeatureContainer>
    )
}

export default Features
