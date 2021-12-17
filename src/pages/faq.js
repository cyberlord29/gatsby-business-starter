import React from 'react'
import {Layout, HIWCard} from '../components'
import { FeatureItemsContainer, FeatureItemTitle, FeatureItemDescription, FeatureItem} from '../components/Features/Features.elements'
import Content from './content/faq.json'

const FAQ = () => {
    return (
        <Layout>
          <div style={{display:"flex", flexDirection: "column"}}>
            <FeatureItemsContainer style={{display:"flex", flexDirection: "column"}}>
                {Content.faq.questions.map((item) => {
                return (<FeatureItem style={{marginBottom: "20px"}}>  
                  {!item.tite && 
                    <FeatureItemTitle>
                        {item.title}
                    </FeatureItemTitle>
                  }
                    <FeatureItemDescription>
                        {item.description}
                    </FeatureItemDescription>
                </FeatureItem>)})}
            </FeatureItemsContainer>
          </div>
        </Layout>
    )
}

export default FAQ