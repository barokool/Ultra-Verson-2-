import styled from 'styled-components';
import { Div, Div2, Img, Heading, Para } from './FirstSection.element'

export const MainDiv = styled.div` 
background:#101522;
display:flex;
align-items:center;
justify-content:center;
padding: 4rem 2rem;
background:#fff;
@media (max-width: 790px) {
    flex-direction:column;
    padding-left: 64px;
    padding-right:64px;
}
`
export const Img2 = styled(Img)`
width :100%;
`

export const Heading2 = styled(Heading)`
color:#000;
padding-right: 4rem;
font-size:2.5rem;
@media (max-width: 790px) {
        font-size:1.5rem;
        padding:1rem 0;
}

`


export const SecondDiv = styled(Div2)`
background:#fff;
`
export const Para2 = styled(Para)`
font-size:1rem;
padding: 0.5rem 0;
`
export const SecondDivRight = styled.div`
padding-right:4rem;
@media (max-width: 790px) {
    padding:0;
}
`