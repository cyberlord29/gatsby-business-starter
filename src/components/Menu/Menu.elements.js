import styled from 'styled-components';

export const MenuContainer = styled.div`
    margin-top: 4%;
    width: 100%;
`;

export const MenuCard = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    padding-top: 30px;
`;

export const MenuTitle = styled.h2`
    line-height: 1.6;
    font-size: 2rem;
`;

export const MenuDescription = styled.div`
    line-height: 1.6;
    margin: auto;
    padding-top: 10px;
    text-align: center;

    color: grey;
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    margin: 4% 20%;
    width: 80%;
    overflow: scroll;
    padding-top: 20px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const MenuItem = styled.div`
`;

export const MenuItemIllustration = styled.div`
    border-radius: 10px;
    height: 200px;
    border: 1px solid #007AFF;

`;

export const MenuItemTitle = styled.h3`
    text-align: center;
    margin-top: 10px;
`;

export const MenuItemDescription = styled.h5`
    padding-top: 18px;
    text-align: center;
    width: 70%;
    margin: auto;
    justify-content: center;
    line-height: 1.6;
    color: grey;
`;