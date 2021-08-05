// background:#101522
import styled from 'styled-components'

export const Div = styled.div`
background:#101522;
display:flex;
align-items:center;
justify-content:center;
padding: 4rem 2rem;
@media (max-width: 790px) {
    flex-direction:column-reverse;
}

`
export const Div2 = styled.div`
background:#101522;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding: 0 4rem;
width:100%;
@media (max-width: 790px) {
        font-size:1.5rem;
        padding:1rem 2rem;
}
`

export const Img = styled.img`
width:100%;
`

export const Heading = styled.h1`
    color:#fff;
    font-size:2.5rem;
    @media (max-width: 790px) {
        font-size:1.5rem;
        padding:1rem 0;
}
`

export const Para = styled.p`
font-size:1.25rem;
color:#334756;
margin-right:auto;
@media (max-width: 790px) {
        font-size:1rem;
}
`

export const Button = styled.button`
padding:1rem 3rem;
font-size:1rem;
color:#fff;
background-color : #3e34f5;
margin-right:auto;
margin-top:2rem;
border-radius:10px;
max-width:100%;
border:none;
cursor:pointer;
&:hover { 
    padding:1rem 3.5rem;
    text-decoration:underline;
    transition: .2s ease-in-out;
}
`