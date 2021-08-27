import styled from "styled-components";

export const PricingContainer = styled.div`
    background-color: #051B35;
    min-height: 100vh;
    padding: 0px 100px;

    @media screen and (max-width: 1200px){
        padding: 0px 20px;
    }

    @media screen and (max-width: 1000px){
        padding: 0px 10px;
    }

    h2{
        color: #EAC91D;
        font-size: 40px;
        margin-bottom: 20px;
        /* margin-left: 40px; */
        font-weight: 800;
    }
`;

export const Prices = styled.div`
    display: flex;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }

    main{
        width: 27%;
        background-color: white;
        margin: auto;
        padding: 20px 10px;
        border-radius: 5px;
        color: #051B35;

        @media screen and (max-width: 800px){
            width: 70%;
            margin-top: 50px;
        }


        @media screen and (max-width: 500px){
            width: 90%;
        }

        :hover{
            transform: scale(1.05);
        }


        .priceBox{
            text-align: center;

            img{
                margin-bottom: 10px;
            }

            .title{
                font-size: 18px;
                font-weight: bolder;
                letter-spacing: 1px;
            }

            h1{
                font-size: 45px;
            }
        }

        .services{
            margin: 10px 0px;
            text-align: center;


            h4{
                margin-bottom: 20px;
                font-size: 13px;
            }

            h2{
                font-size: 15px;
                font-weight: 600;
                letter-spacing: 1px;
                color: #051B35;
                align-items: center;
                text-align: center;
                line-height: 10px;
                width: 100%;
            }
        }

        :nth-child(2){
            padding: 40px 10px;
        }
    }

    Button{
        width: 100%;
        border-radius: 5px;
    }
`;