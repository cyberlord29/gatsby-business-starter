import styled from 'styled-components';

export const FeatureContainer = styled.div`
    margin-top: 4%;
    width: 100%;
`;

export const FeatureCard = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    padding-top: 30px;
`;

export const FeatureTitle = styled.h2`
    line-height: 1.6;
    font-size: 2rem;
`;

export const FeatureDescription = styled.div`
    line-height: 1.6;
    margin: auto;
    padding-top: 10px;
    text-align: center;
    width: 500px;
    color: grey;
`;

export const FeatureItemsContainer = styled.div`
    display: flex;
    width: 65%;
    margin: auto;
    padding-top: 20px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const FeatureItem = styled.div`
    @media (max-width: 500px) {
        margin-bottom: 30px;
    }
`;

export const FeatureItemIllustration = styled.div`
    border-radius: 100px;
    height: 200px;
    border: 1px solid orange;

`;

export const FeatureItemTitle = styled.h3`
    text-align: center;
    margin-top: 10px;
`;

export const FeatureItemDescription = styled.h5`
    padding-top: 18px;
    text-align: center;
    width: 70%;
    margin: auto;
    justify-content: center;
    line-height: 1.6;
    color: grey;
`;