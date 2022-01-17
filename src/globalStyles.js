import styled, {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "League Spartan";
    font-weight: 800;
    letter-spacing: 0.7px;
}
.no-mobile{
    display: inherit;
}
@media (max-width: 500px) {
 .no-mobile{
    display: none;
 }
}
`;

export const YellowButton = styled.button`
    background-color: #0070ba;
    font-weight: 600;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #0070ba;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #0070ba;
    }
    ${props => props.maxWidth && css`
        font-size: 1rem;
        width: 100%;`};
`;

export const Header = styled.div`
  padding: 40px 20px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

export const WhiteButton = styled.button`
    background-color: ${props => props.selected?'#0070ba':'white'};
    font-size: 1rem;
    font-weight: 600;
    width: 150px;
    margin-right: 10px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #0070ba;
    cursor: pointer;
    margin: 5px 5px;
    color: ${props => !props.selected?'#0070ba':'white'};
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #0070ba;
        color: white;
    }
    ${props => props.maxWidth && css`
        width: 100%;`};
`;

export const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Underline = styled.div`
    height: 6px;
    background: #172647;
    border-radius: 4px;
    width: 80%;
`;
export default GlobalStyle;