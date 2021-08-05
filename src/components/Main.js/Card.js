import React from 'react'
import { Button } from './FirstSection.element'
import { FirstPara, SecondPara, SmallDiv, SmallerDiv, Span } from './ThirdSection.element'
const Card = () => {
    return (
        <SmallDiv>
            <SmallerDiv>
                <FirstPara>Starter Pack</FirstPara>
                <FirstPara>$99.99</FirstPara>
                <Span>per month</Span>

            </SmallerDiv>

            <SecondPara>100 New Users </SecondPara>
            <SecondPara>$10.000 Budget</SecondPara>
            <SecondPara>Retargeting analytics</SecondPara>
            <Button>
                Choose Plan
            </Button>
        </SmallDiv>
    )
}

export default Card
