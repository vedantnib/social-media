import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'

const App = () => {
    console.log("Reached App.js")
    return (
        <BrowserRouter>
        <ThemeProvider theme = {theme}>
            <MainRouter />
        </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;
