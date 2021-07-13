import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: 30px;
    margin-left: 30px;
    padding-left: 50px;
    padding-right: 50px;
    @media screen and (max-width : 991px) {
    padding-left: 30px;
    padding-right: 30px;

    }
`;
export const YellowButton = styled.button`
    background-color: #ef9d3a;
    font-size: 1rem;
    font-weight: 600;
    width: 150px;
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
    width: 150px;
    margin-right: 10px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid #ef9d3a;
    cursor: pointer;
    color: #ef9d3a;
    &:hover {
        background-color: #ef9d3a;
        color: white;
    }
`;
export default GlobalStyle;