import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import carImg from './../assets/images/carImg.jpg'


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: '#3f4771'
    },
    media: {
        minHeight: 400
    }
}))

const Home = () => {
    const classes = useStyles()
    console.log("Reached Home.js.js")
    return (
        <Card>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={carImg} title="Car Image" />
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the Home page.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Home
