import styled from "styled-components";

export const WrapperCard = styled.div`
    width: 330px;
    height: 370px;
    margin: 14px auto;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;

    @media (min-width: 700px) {
        margin: 14px;
    }
`;

export const CardGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: linear-gradient(140deg, #D45B7A, #FDA576);
`;

export const UserImage = styled.img`
    width: 126px;
    height: 126px;
    border-radius: 100%;
    position: absolute;
    top: 40px;
    border: 3px solid #FFFFFF;
    box-shadow: 0px 4px 10px rgb(111 112 115 / 30%);
`;

export const Description = styled.div`
    margin-top: 230px;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 600;
    color: #47484A;
`;

export const Role = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    color: #47484A;
    text-align: center;
    margin-top: 10px;
`;