import React from "react"
import Navbar from "./components/Navbar"
import { createGlobalStyle } from 'styled-components'
import FirstSection from "./components/Main.js/FirstSection"
import SecondSection from "./components/Main.js/SecondSection"
import ThirdSection from "./components/Main.js/ThirdSection"
import FourthSection from "./components/Main.js/FourthSection"
import Footer from "./components/Main.js/Footer"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding:0;
  margin:0;
  font-family: 'Poppins', sans-serif;
}`
function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;
