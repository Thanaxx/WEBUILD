import React from 'react'
import {TagHead, TagName } from './Snamestyle'
import { Button } from '../Button/Button'

function Tag() {
    return (
        <>
            <TagHead data-aos='zoom'>
                <TagName>
                    <h1>Learn how to build a responsive React website using React Hooks and React</h1>
                    <Button buttonSize='btn--large'>GET STARTED NOW</Button>
                </TagName>
            </TagHead>
        </>
    )
}

export default Tag
