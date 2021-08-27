import React from 'react';
import {FooterContainer, FooterForm, FooterLinks, LinkName, FooterPatent, FooterCnd, LinkCnd} from './FooterStyle';

function Footer() {
    return (
        <>
        <FooterContainer>
        <p>Receive free business tools and resources</p>

            <FooterForm>
                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                    <input type="email" placeholder="Email Address" />
                    <button>SIGN UP</button>
            </FooterForm>

            <FooterLinks>
                <LinkName to="/webdesign">WEB DESIGN</LinkName>
                <LinkName  to="/branding">BRANDING</LinkName>
                <LinkName  to="/works">ALL IN ONE</LinkName>
            </FooterLinks>

            <FooterPatent>
                ©2021 WBLD, All Rights Reserved
            </FooterPatent>

            <FooterCnd>
                <LinkCnd to="/contact">Terms and Conditions |</LinkCnd>
                <LinkCnd to="/contact">Privacy Policy  |</LinkCnd>
                <LinkCnd to="/contact">Cookies Policy</LinkCnd>
            </FooterCnd>
        </FooterContainer>
        </>
    )
}

export default Footer
