import styled from 'styled-components'

export const Div = styled.div`
background:#4b59f7;
display:flex;
justify-content:center;
align-items:center;
padding:4rem;
@media (max-width: 790px) {
        display:grid;
}
`
export const SmallDiv = styled.div`
margin:1rem;
background-color:#1f1f1f;
padding:2rem;
border-radius:5px;

&:hover {
  transition: 0.5s ease-out;  
  padding:3rem;
  transform:scale(1);
}
`
export const FirstPara = styled.p`
color:#fff;
text-align:center;
padding:0.25rem;
font-size:1.5rem;
`

export const Span = styled(FirstPara)`
font-size:1rem;
`


export const SecondPara = styled.p`
text-align:center;
padding:0.25rem;
color:#6e6e71;
`
export const SmallerDiv = styled.div`
padding-bottom:1rem;
`