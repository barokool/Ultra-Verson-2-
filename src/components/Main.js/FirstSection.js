import React from 'react'
import { Div, Div2, Img, Heading, Para, Button } from '../Main.js/FirstSection.element'
import Firstimg from '../images/svg-1.svg'
const FirstSection = () => {
    return (
        <Div>
            <Div2>
                <Para>Marketing Agency</Para>
                <Heading>Lead Generation Specialist for Online Businesses</Heading>
                <Para>We help businesses owners increase their revenue. Our team of unique specialist can help you achieve your business
                    goals </Para>
                <Button>Get started</Button>
            </Div2>
            <Div>
                <Img src={Firstimg} alt="firstimg" />
            </Div>
        </Div>
    )
}

export default FirstSection
