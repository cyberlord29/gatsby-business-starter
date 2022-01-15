import styled from 'styled-components'

export const IntroCardContainer = styled.div`
    background-color: #F7F9FF;
    color: #132B4C;
    padding-left: 5%;
    display: flex;
    width: 100%;
    @media (max-width: 500px) {
        width: 100%;
    }
    height: 500px;
`;

export const IntroLeftContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (max-width: 500px) {
        width: 100%;
        flex-basis:80%;
    }
`;

export const InputField = styled.input`
    display: block;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px 0px 0px 6px;
    border: none;
    padding: 10px 12px;
    width: 50%;
    margin-top: 10px;
    height: 50px;
`;

export const Button = styled.button`
    background: #FFAB00 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 4px 4px 0px;
    border: none;
    margin-top: 10px;
    height: 50px;
    padding: 0px 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
`;


export const IntroTitle = styled.h1`
    display: flex;
    font-size: 2rem;
    line-height: 1.3;
`;

export const DescriptionContainer = styled.p`
    display: block;
    font-size: 20px;
    color: #132B4C;
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
