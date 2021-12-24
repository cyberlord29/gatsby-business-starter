import React from 'react'
import {Layout, HIWCard} from '../components'
import { FaqItemsContainer, FeatureItemTitle, FeatureItemDescription, FaqItem} from '../components/Features/Features.elements'
import Content from './content/faq.json'

const FAQ = () => {
    const toggle = (i) => {
      let toggle = document.getElementById(`${i}`);
      if(toggle.style.display==='none')
        toggle.style.display='revert'
      else
        toggle.style.display='none'
    }
    return (
        <Layout>
          <div style={{display:"flex", flexDirection: "column"}}>
            <FaqItemsContainer style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                {Content.faq.questions.map((item,i) => {
                const show = item.title===""
                return (<FaqItem style={{marginBottom: "20px", position: "relative"}}> 
                  {!show && <FeatureItemTitle 
                    onClick={()=> toggle(i)}
                  >
                        <div>
                          {item.title}
                        </div>
                        <div style={{position: "absolute", right: "25px", top: "32px"}}>&#8964;</div>
                    </FeatureItemTitle>
                  }
                    <FeatureItemDescription id={i} style={{display: "none"}}>
                        {item.description}
                    </FeatureItemDescription>
                </FaqItem>)})}
            </FaqItemsContainer>
          </div>
        </Layout>
    )
}

export default FAQ