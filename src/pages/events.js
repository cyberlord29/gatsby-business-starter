import React from 'react'
import {IntroCardEventsPage, About, Layout, Courses,Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';
import { DescriptionContainer, FeatureItemLarge, IntroTitle } from '../components/IntroCard/IntroCard.element';
import { Button } from '../components/Booking/Booking.element';

const AboutPage = () => {
    return (
        <Layout>
            <IntroCardEventsPage/>

            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
