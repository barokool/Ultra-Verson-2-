import styled from 'styled-components'
import { Div } from "./FirstSection.element"
import { Button } from './FirstSection.element'
export const Footerdiv = styled(Div)`
flex-direction:column;
padding-top:12rem;
padding-bottom:0;
width:100%;
@media (max-width: 790px) {
    padding-top:4rem;
}
`
export const SmallFooterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;
@media (max-width: 550px) {
    
}
`
export const Span = styled.span`
color:#fff;
margin : 0 2rem;
`


export const Link = styled.a`
color:#fff;
font-size:1rem;
margin: 0 1rem;
`

export const Para = styled.p`
color:#fff;
font-size:1rem;
padding:1rem 0;
@media (max-width: 550px) {
    display:grid;
    grid-template-columns: 100%;
    padding:0.5rem;
}
`

export const Heading = styled.h3`
color:#fff;
font-size:2rem;
@media (max-width: 790px) {
}

`

export const BigHeading = styled.h3`
color:#fff;
font-size:2rem;
padding:0 3rem;
@media (max-width: 790px) {
}

`


export const Input = styled.input`
padding:0.5rem 2rem;
border-radius:10px;
margin-right:4px;
`

export const FooterButton = styled(Button)`
padding:0.5rem 2rem;
margin:0;
`

export const SubsDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const GridDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:4rem 2rem;
@media (max-width: 790px) {
    display:grid;
    grid-template-columns: 50% 50%;
    
}
@media (max-width: 550px) {
    display:grid;
    grid-template-columns: 100%;
    
}
`
export const SmallGridDiv = styled.div`
padding:0 2rem;
@media (max-width: 790px) {
    padding:2rem;
}
@media (max-width: 550px) {
    padding:1.5rem;
}
`
