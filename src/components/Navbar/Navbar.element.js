import styled from "styled-components"
import { Button } from '../Main.js/FirstSection.element'
export const Nav = styled.nav`
height:80px;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:999;
background:#101522;
padding:0 8rem;
@media (max-width: 790px) {
padding:0 2rem;

}



`
export const BlockDiv = styled.div`
@media (max-width: 790px) {
    display:none;
}

`

export const Heading = styled.h1`
color:#fff;
cursor:pointer;

`
export const Link = styled.a`
color:#fff;
margin:0 1rem;
cursor:pointer;
&:hover {
    text-decoration:underline;
    
}

`

export const ButtonNav = styled(Button)`
padding:0.5rem 2rem;
&:hover{
    padding:0.5rem 3rem;
    text-decoration:underline;
}

`