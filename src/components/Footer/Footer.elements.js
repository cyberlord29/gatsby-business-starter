import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    height: 404px;
    background-color: #313131;
`;

export const FooterLeft = styled.div`
    flex-basis: 50%;
`;

export const FooterRight = styled.div`
    height: 504px;
`;

export const FooterLabel = styled.h1`
    color: white;
    padding-left: 52px;
    padding-top: 52px;
    padding-right: 32px;
    font-size: 2.5rem;
`;

export const ContactsContainer = styled.div`
    display: grid;
    padding-left: 52px;
    padding-top: 52px;
    grid-row-gap: 50px;
    grid-template-columns: 250px 150px;
`;

export const ContactContainer = styled.div``;

export const ContactLabel = styled.h5`
    color: grey;
    margin-bottom: 18px
`;

export const ContactInfo = styled.h5`
    margin-bottom: 12px;
    color: white;
    line-height: 2.5;
`;

export const ContactEmail = styled.a`
    color: #f05b5c;
    cursor: pointer;
`;

export const BottomContainer = styled.div`
    display: flex;
    padding-left: 496px;
    padding-right: 496px;
    padding-top: 100px;
    padding-bottom: 64px;
    background-color: #313131;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    width: 204px;
    justify-content: space-between;
`;

export const CopyrightContainer = styled.p`
    margin-left: 304px;
    color: grey;
`;
