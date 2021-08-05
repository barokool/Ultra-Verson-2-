import React from 'react'
import { Footerdiv, Para, Heading, BigHeading, FooterButton, Input, SubsDiv, GridDiv, SmallGridDiv, SmallFooterDiv, Link, Span } from "./Footer.element"
const Footer = () => {
    return (
        <Footerdiv>
            <SubsDiv>
                <BigHeading>Join our exclusive membership to receive the latest news and trends </BigHeading>
                <Para>You can unsubscribe at any time</Para>
                <form>
                    <Input type="text" placeholder="Email..." />
                    <FooterButton>Subscribe</FooterButton>
                </form>
            </SubsDiv>
            <GridDiv>

                <SmallGridDiv>
                    <Heading>About us</Heading>
                    <Para>How it works</Para>
                    <Para>Careers</Para>
                    <Para>Terms of service</Para>

                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Contact Us</Heading>
                    <Para>Support</Para>
                    <Para>Destinations</Para>
                    <Para>Sponsorships</Para>
                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Videos</Heading>
                    <Para>Submit video</Para>
                    <Para>Agency</Para>
                    <Para>Influecer</Para>
                </SmallGridDiv>
                <SmallGridDiv>
                    <Heading>Social Media</Heading>
                    <Para>Instagram</Para>
                    <Para>Facebook</Para>
                    <Para>Twitter</Para>
                </SmallGridDiv>
            </GridDiv>

            {/* Underfooter */}
            <SmallFooterDiv>

                <div>
                    <Span>
                        Ultra 2020 © Thai Doan Gia Bao
                    </Span>
                </div>

            </SmallFooterDiv>
        </Footerdiv>
    )
}

export default Footer
