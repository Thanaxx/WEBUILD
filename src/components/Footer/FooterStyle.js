import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: #051B35;
    min-height: auto;
    padding: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    p{
        font-weight: 500;
        font-size: 18px;
        color: white;
        padding: 10px 0;
    }

    @media screen and (max-width: 768px){
        padding: 50px 10px;
    }
`;

export const FooterForm = styled.form`
    margin: 5px 0;
     
     input{
         border: none;
         background-color: white;
         color: #262D3D;
         font-weight: 700;
         padding: 8px 10px;
         margin: 0px 5px;
         outline: none;

        ::placeholder{
            color: #EAC91D;
            font-weight: 600;
        }

        @media screen and (max-width: 768px){
            margin: 5px;
        }
     }
     button{
        padding: 8px 10px;
        background-color: transparent;
        border: 1px solid #EAC91D;
        color: #EAC91D;
        cursor: pointer;

        :hover{
            background-color: #EAC91D;
            color: #4D4E3C;
            font-weight: bold;
        }
     }
`;

export const FooterLinks = styled.div`
        padding: 10px 0;
`;

export const LinkName = styled(Link)`
        text-decoration: none;
        color: white;
        margin: 0px 10px;
`;

export const FooterPatent = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: lighter;
`;

export const FooterCnd = styled.p`
    padding: 10px 0;
`;

export const LinkCnd = styled(Link)`
        text-decoration: none;
        color: white;
        margin: 0px 10px;
        font-weight: lighter;
        font-size: 14px;
`;
