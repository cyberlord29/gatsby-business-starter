import React from 'react'
import {Layout, PricingBanner, PricingCards} from '../components/'
import Content from './content/pricing.json'

const pricing = () => {
    return (
        <Layout>
            <PricingBanner title = {Content.title} description = {Content.description} />
            <PricingCards data = {Content.plans}/>
        </Layout>
    )
}

export default pricing
