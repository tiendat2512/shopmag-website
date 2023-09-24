import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'
import "./Components/home.css"
import { ThemeProvider, createTheme } from '@mui/material'

const textStyled = createTheme({
    typography: {
        fontFamily: "monospace",
    },
    

})

export default function HomePage() {
    return (
        <>
        <ThemeProvider theme={textStyled}>
            <Header />
            <Content />
            <Footer />
        </ThemeProvider>
        </>
    )
}
