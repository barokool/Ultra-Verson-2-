import React from 'react'
import { MainDiv, Img2, SecondDiv, Heading2, Para2, SecondDivRight } from './Second.element'
import { Button } from '../Main.js/FirstSection.element'
import Profile from '../images/profile.jpg'
const SecondSection = () => {
    return (
        <MainDiv>
            <SecondDiv>
                <Img2 src={Profile} alt="profileimg" />
            </SecondDiv>
            <SecondDivRight>
                <Para2>Sarah Jueni</Para2>
                <Heading2>
                    Ultra helped me increase my revenue by over 3x in less than 3 months!
                </Heading2>
                <Para2>
                    Their team is wonderful! I can't believe i didn't start working with them earlier.
                </Para2>
                <Button>
                    View case Study
                </Button>
            </SecondDivRight>
        </MainDiv>
    )
}

export default SecondSection
