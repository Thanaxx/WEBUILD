import React from 'react'
import { AboutContainer, AboutText } from './AboutStyle'
import { Folio } from '../Button/Button'

function About() {
    return (
        <>
            <AboutContainer>
                <AboutText data-aos='zoom-in'>
                    <h1>We Accelerate Your Business Growth In The Digital Era</h1>
                    <p>Learn how to build a responsive React website using React Hooks and React Router in this beginner tutorial. We are going to build the front end UI using React JS. The main sections of the site are made with reusable components that you can customize and add wherever you want.</p>
                    <Folio buttonStyle='btn--secondary' buttonSize='btn--normal'>Learn more </Folio>
                </AboutText>
            </AboutContainer>
        </>
    )
}

export default About
