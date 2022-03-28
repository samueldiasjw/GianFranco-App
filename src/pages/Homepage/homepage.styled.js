import styled from "styled-components";

export const HomepageHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Circle = styled.div`
    background-color: #fff;
    position: inherit;
    border-radius: 50%;
    animation: ripple 1.5s linear infinite;

    @-webkit-keyframes ripple {
        0% {
            box-shadow: 0 0 0 0 rgba(235, 67, 54, 0.3),
              0 0 0 1em rgba(235, 67, 54, 0.3), 0 0 0 3em rgba(235, 67, 54, 0.3),
              0 0 0 5em rgba(235, 67, 54, 0.3);
          }
          100% {
            box-shadow: 0 0 0 1em rgba(235, 67, 54, 0.3),
              0 0 0 3em rgba(235, 67, 54, 0.3), 0 0 0 5em rgba(235, 67, 54, 0.3),
              0 0 0 8em rgba(235, 67, 54, 0);
          }
        }
        
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(235, 67, 54, 0.3),
              0 0 0 1em rgba(235, 67, 54, 0.3), 0 0 0 3em rgba(235, 67, 54, 0.3),
              0 0 0 5em rgba(235, 67, 54, 0.3);
          }
          100% {
            box-shadow: 0 0 0 1em rgba(235, 67, 54, 0.3),
              0 0 0 3em rgba(235, 67, 54, 0.3), 0 0 0 5em rgba(235, 67, 54, 0.3),
              0 0 0 8em rgba(235, 67, 54, 0);
          }
    }

    @media (max-width: 800px) {
        animation: ripple800 1.5s linear infinite;
    }

    @-webkit-keyframes ripple800 {
        0% {
            box-shadow: 0 0 0 0 rgba(235, 67, 54, 0.3),
              0 0 0 1em rgba(235, 67, 54, 0.3), 0 0 0 2em rgba(235, 67, 54, 0.3),
              0 0 0 3em rgba(235, 67, 54, 0.3);
          }
          100% {
            box-shadow: 0 0 0 1em rgba(235, 67, 54, 0.3),
              0 0 0 2em rgba(235, 67, 54, 0.3), 0 0 0 3em rgba(235, 67, 54, 0.3),
              0 0 0 4em rgba(235, 67, 54, 0);
          }
        }
        
        @keyframes ripple800 {
          0% {
            box-shadow: 0 0 0 0 rgba(235, 67, 54, 0.3),
              0 0 0 1em rgba(235, 67, 54, 0.3), 0 0 0 2em rgba(235, 67, 54, 0.3),
              0 0 0 3em rgba(235, 67, 54, 0.3);
          }
          100% {
            box-shadow: 0 0 0 1em rgba(235, 67, 54, 0.3),
              0 0 0 2em rgba(235, 67, 54, 0.3), 0 0 0 3em rgba(235, 67, 54, 0.3),
              0 0 0 4em rgba(235, 67, 54, 0);
          }
    }
`;

export const WrapperLogo = styled.div`
    padding: 50px;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 600px) {
        padding: 80px;
    }
`;

export const ImgLogo = styled.img`
    height: 30vmin;
    pointer-events: none;
`;