import styled from 'styled-components'

export const IntroCardContainer = styled.div`
    padding: 70px 20px;
    background-color: black;
    color: white;
    margin-top: 20px;
    padding-left: 10%;
    display: flex;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const IntroLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    @media (max-width: 500px) {
        width: 100%;
        flex-basis:80%;
    }
`;

export const IntroTitle = styled.h1`
    display: flex;
    flex-basis: 60%;
    font-size: 4rem;
    line-height: 1.3;
`;

export const DescriptionContainer = styled.p`
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.10rem;
    color: white;
    line-height: 1.6;
`;

export const ButtonsContainer = styled.div`
`;

export const WhiteButtonsContainer = styled.div`
    display: flex;
`;

export const YellowButtonContainer = styled.div`
    margin-top: 20px;
`;

export const YellowButton = styled.button`
    background-color: #0070ba;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

export const WhiteButton = styled.button`
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    margin-right: 10px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #0070ba;
    cursor: pointer;

    &:hover {
        background-color: #0070ba;
    }

    &:last-child {
        margin-right: 0;
    }

`;
