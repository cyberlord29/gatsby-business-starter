import React from 'react'
import {Layout, HIWCard} from '../components'
import Content from './content/how-it-works.json'

const HowItWorks = () => {
    return (
        <Layout>
            <HIWCard data = {Content} />
        </Layout>
    )
}

export default HowItWorks