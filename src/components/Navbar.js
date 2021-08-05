import React from 'react'
import HamburNav from './Navbar/HamburNav'
import { Nav, Heading, Link, ButtonNav, BlockDiv } from './Navbar/Navbar.element'



const Navbar = () => {
    return (
        <div>
            <Nav>
                <div>
                    <Heading>ULTRA</Heading>
                </div>
                <BlockDiv>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Products</Link>
                    <ButtonNav>Sign up</ButtonNav>
                </BlockDiv>
                <HamburNav />
            </Nav>
        </div>
    )
}

export default Navbar
