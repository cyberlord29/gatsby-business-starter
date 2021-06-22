import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'gatsby';


export const IntroCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4%;
    margin-left: 15%;
    margin-right: 15%;
`;

export const IntroTitle = styled.h1`
    display: flex;
    flex-basis: 40%;
    font-size: 4.5rem;
    line-height: 1.2;
`;

export const IntroRight = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
    flex-direction: column;
`;

export const StatsContainer = styled.div`
    margin-top: 5%;
    width: 90%;
    display: flex;
`;

export const StatContainer = styled.div`
    display: block;
    width: 10%;
    margin-right: 25%;
`;

export const StatValue = styled.h2`
    text-align: left;
    color: #f05b5c;
    font-size: 2.75rem;
    display: block;
`;

export const StatTitle = styled.p`
    text-align: left;
    margin-top: 7px;
    display: block;
    line-height: 1.6;
`;

export const DescriptionContainer = styled.p`
    font-size: 1.10rem;
    width: 90%;
    line-height: 1.5;
`;
