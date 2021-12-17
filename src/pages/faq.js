import React from 'react'
import {Layout, HIWCard} from '../components'
import { FaqItemsContainer, FeatureItemTitle, FeatureItemDescription, FaqItem} from '../components/Features/Features.elements'
import Content from './content/faq.json'

const FAQ = () => {
    return (
        <Layout>
          <div style={{display:"flex", flexDirection: "column"}}>
            <FaqItemsContainer style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                {Content.faq.questions.map((item) => {
                const show = item.title===""
                return (<FaqItem style={{marginBottom: "20px"}}> 
                  {!show && <FeatureItemTitle>
                        {item.title}
                    </FeatureItemTitle>
                  }
                    <FeatureItemDescription>
                        {item.description}
                    </FeatureItemDescription>
                </FaqItem>)})}
            </FaqItemsContainer>
          </div>
        </Layout>
    )
}

export default FAQ