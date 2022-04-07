import styled from "styled-components";
import LoginKey from "../../images/key-login.svg";

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

export const Popup = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-family: Montserrat;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
`;

export const PopupInner = styled.div`
    display: grid;
    max-width: 542px;
    border-radius: 8px;
    box-shadow: 0 0 8px 0 rgba(68, 21, 85, 0.);
    background-color: #EDEDED;
    padding-top: 34px;
    position: relative;
`;

export const PopupHeader = styled.div`
    p{
        width: 20px;
        margin: 4px;
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
`;

export const PopupImg = styled.img`
    width: 100%;
    height: 375px;

    @media (min-width: 500px) {
        max-width: 500px;
        height: 500px;
    }

    @media (max-height: 500px) {
        height: 300px;
    }
`;

export const PasswordWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 30px;
        height: 30px;
        margin-left: 14px;
        background: url(${LoginKey});
        background-repeat: no-repeat;
        background-position: center;
        border: 0;
    }

    @media (max-height: 500px) {
        padding: 6px;
        height: 40px;
    }
`;

export const PasswordInput = styled.input`
    height: 26px;
    margin-left: 14px;
    border: 1px solid #000000;
    border-radius: 4px;

    &:focus {
        outline: none;
    }
`;