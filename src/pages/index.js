import React from 'react'
import {IntroCard, Features, Menu, ProductInfo, Banner, Layout} from '../components'


const IndexPage = () => {
    return (
            <div>
              <Layout>
                <IntroCard />
                <Features />
                <Menu />
                <ProductInfo />
                <Banner />
              </Layout>
            </div>
 
    )
}

export default IndexPage
