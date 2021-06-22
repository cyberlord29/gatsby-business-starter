import styled from 'styled-components';

export const AboutUsContainer = styled.div`
    display: flex;
    margin-top: 4%;
    margin-left: 15%;
    width: 100%;
`;

export const AboutUsLabel = styled.h4`
    display: flex;
    color: gray;
    flex-basis: 15%;
    font-weight: 500;
    padding-top: 5%;
`;

export const AboutUsCard = styled.div`
    display: block;
    flex-basis: 30%;
    padding-top: 30px;
`;

export const AboutUsTitle = styled.h2`
    line-height: 1.6;
    font-size: 2rem;
`;

export const AboutUsDescription = styled.p`
    margin-top: 7%;
    line-height: 1.6;
    margin-bottom: 10%;
`;

export const ReadMoreLink = styled.a`
    color: #f05b5c;
    font-weight: 600;
    font-size:1.25rem;
    padding-bottom: 5px;
    border-bottom: 2px solid #f05b5c;
    cursor: pointer;

    &:after {
        content: '   →'
    }
`;

