import styled from "styled-components";

export const WrapperButton = styled.a`
    width: 350px;
    height: 370px;
    margin: 14px auto;
    background-color: #8C7CEE;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    color: white;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 5px 4px 20px 5px rgba(0,0,0,0.10);


    @media (min-width: 700px) {
        margin: 20px;
    }
`;

export const ButtonImage = styled.img`
    padding: 10px;
    width: 300px;
`;