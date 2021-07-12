import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
    margin-top: 4%;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    justify-content: space-between;
`;

export const ProductImage = styled.div`
    display: flex;
    width: 50%;
    height: 500px;
    border: 2px solid orange;
`;

export const ProductCard = styled.div`
    width: 35%;
`;

export const ProductTitle = styled.h1`
    font-size: 2.25rem;
    line-height: 1.6;
`;

export const ProductDescription = styled.p`
    margin-top: 50px;
    color: gray;
    line-height: 1.6;
`;

export const WhiteButton = styled.button`
    background-color: white;
    font-size: 1rem;
    margin-top: 40px;
    font-weight: 600;
    width: 30%;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #ef9d3a;
    cursor: pointer;

    &:hover {
        background-color: #ef9d3a;
    }
`;

