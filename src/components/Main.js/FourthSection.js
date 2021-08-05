import React from 'react'
import { Div, Div2, Img, Heading, Para, Button } from '../Main.js/FirstSection.element'
import Thirdimg from '../images/svg-3.svg'
const FourthSection = () => {
    return (
        <Div>
            <Div>
                <Img src={Thirdimg} alt="thirdimg" />
            </Div>
            <Div2>
                <Para>Secure Database</Para>
                <Heading>All your data is stored on our secure server</Heading>
                <Para>You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe. </Para>
                <Button>Sign Up Now</Button>
            </Div2>

        </Div>
    )
}

export default FourthSection
