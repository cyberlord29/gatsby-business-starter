import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'gatsby';


export const IntroCardContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    margin-left: 250px;
    margin-bottom: 50px;
`;

export const IntroTitle = styled.h1`
    width: 300px;
    font-size: 3rem;
`;

export const IntroRight = styled(Container)`
    margin-top: 20px;
    display: block;
`;

export const StatsContainer = styled(Container)`
    display: flex;
`;

export const StatContainer = styled(Container)`
    display: inline;
`;

export const StatValue = styled.h2`
    text-align: left;
    color: #f05b5c;
    display: block;
`;

export const StatTitle = styled.p`
    text-align: left;
    margin-top: 7px;
    display: block;
    line-height: 1.4;
`;

export const DescriptionContainer = styled.p`
    margin-left: 150px;
    width: 700px;
    padding: 30px 10px 10px 10px;
    line-height: 1.5;
`;
