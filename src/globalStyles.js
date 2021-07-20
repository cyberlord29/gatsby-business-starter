import styled, {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`;



export const YellowButton = styled.button`
    background-color: #ef9d3a;
    font-weight: 600;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #ef9d3a;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #ef9d3a;
    }
    ${props => props.maxWidth && css`
        font-size: 1rem;
        width: 100%;`};
`;
export const WhiteButton = styled.button`
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 150px;
    margin-right: 10px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #ef9d3a;
    cursor: pointer;
    color: #ef9d3a;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #ef9d3a;
        color: white;
    }
    ${props => props.maxWidth && css`
        width: 100%;`};
`;
export default GlobalStyle;