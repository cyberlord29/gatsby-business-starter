import React from 'react'
import {ServicesContainer, ServicesLabel, ServicesCard, ServicesTitle, ServicesDescription, ServiceTypeContainer, ServiceTypeIndex, ServiceType} from './Services.elements';
const Services = () => {
    return (
        <ServicesContainer>
            <ServicesLabel>
                -- services
            </ServicesLabel>
            <ServicesCard>
                <ServicesTitle>
                    We shape the life of tomorrow
                </ServicesTitle>
                <ServicesDescription>
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>01/</ServiceTypeIndex>
                       <ServiceType>architecture</ServiceType>
                   </ServiceTypeContainer>
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>02/</ServiceTypeIndex>
                       <ServiceType>landscape design</ServiceType>
                   </ServiceTypeContainer>                  
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>03/</ServiceTypeIndex>
                       <ServiceType>pavement design</ServiceType>
                   </ServiceTypeContainer>
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>04/</ServiceTypeIndex>
                       <ServiceType>interior</ServiceType>
                   </ServiceTypeContainer>
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>05/</ServiceTypeIndex>
                       <ServiceType>graphic design</ServiceType>
                   </ServiceTypeContainer>
                   <ServiceTypeContainer>
                       <ServiceTypeIndex>06/</ServiceTypeIndex>
                       <ServiceType>exterior</ServiceType>
                   </ServiceTypeContainer>
                </ServicesDescription>
            </ServicesCard>
        </ServicesContainer>
    )
}

export default Services
