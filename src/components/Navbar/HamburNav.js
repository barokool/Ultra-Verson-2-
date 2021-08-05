import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useState } from 'react'
import { ButtonNav } from './Navbar.element'

const Nav = styled.nav`
color:#fff;
font-size:1rem;
@media (min-width: 790px) {
    display:none;
}
`
const Ye = styled.a`
color:#fff;
margin:0 1rem;
cursor:pointer;
&:hover {
    text-decoration:underline;
    
}
`
const ButtonNavMenu = styled(ButtonNav)`
margin-right:0;
width:50%;
margin:2rem auto;
`


const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
  background: black;
  height:60vh;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  /* to align the icon */
  text-align: center;
    line-height:5rem;
    transition:.5s ease-in-out;
`

const MainDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    background:black;
    transition:.5s ease-in-out;

`
const Button = styled.button`
position:absolute;
top:1rem;
right:1.5rem;
padding:5px 10px;
`


const HamburNav = () => {
    const [click, setClick] = useState(false)

    let menu
    if (click) {
        menu = (
            <MainDiv >
                <Div>
                    <Ye>Home</Ye>
                    <Ye>Services</Ye>
                    <Ye>Products</Ye>
                    <ButtonNavMenu>Sign up</ButtonNavMenu>
                </Div>
                <Button onClick={() => { setClick(!click) }}>X

                </Button>
            </MainDiv>
        )
    }
    else menu = ""
    return (
        <Nav>
            <div >
                <FontAwesomeIcon icon={faBars}
                    style={{ display: click ? "none" : "block" }}
                    onClick={() => {
                        setClick(!click)

                    }} />
            </div>
            {menu}

        </Nav >
    )
}

export default HamburNav;
