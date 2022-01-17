import React from 'react'
import {IntroCard, About, Layout, Courses,Testimonial, Booking } from '../components'
import Content from './content/home.json'

const IndexPage = () => {
    return (
        <Layout>
            <IntroCard data = {Content.introCard}/>
            <Courses/>
            <About/>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
