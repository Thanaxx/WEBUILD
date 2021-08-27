import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    min-height: auto;
    text-align: center;
    background-color: #051B35;

    @media screen and (max-width: 1000px){
        margin-top: 40px;
    }
`;

export const AboutText= styled.div`
    display: inline-block;
    margin: 0 auto;
    width: 70%;
    padding: 70px 0;
    color: white;

    @media screen and (max-width: 1000px){
        width: 90%;
    }

    h1{
        font-size: 60px;
        font-weight: bolder;
        padding: 15px 0;

        @media screen and (max-width: 1000px){
            font-size: 50px;
        }

        @media screen and (max-width: 1000px){
            font-size: 40px;
        }
    }

    p{
        padding: 15px 0;
        font-size: 20px;
    }

    Button{
        margin-top: 30px;
    }
`;