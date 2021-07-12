import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'gatsby';


export const IntroCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
    margin-left: 10%;
    margin-right: 10%;
`;

export const IntroLeftContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
`;

export const IntroTitle = styled.h1`
    display: flex;
    flex-basis: 50%;
    font-size: 4rem;
    line-height: 1.3;
`;

export const IntroRight = styled.div`

`;

export const DescriptionContainer = styled.p`
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.10rem;
    color: grey;
    width: 75%;
    line-height: 1.6;
`;

export const ButtonsContainer = styled.div`
    width: 75%;
`;

export const WhiteButtonsContainer = styled.div`
    display: flex;
    
`;

export const YellowButtonContainer = styled.div`
    margin-top: 20px;
`;

export const YellowButton = styled.button`
    background-color: #ef9d3a;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #ef9d3a;
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
    border: 2px solid #ef9d3a;
    cursor: pointer;

    &:hover {
        background-color: #ef9d3a;
    }

`;
