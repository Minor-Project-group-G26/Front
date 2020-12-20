import React from 'react'
import { Link } from 'react-router-dom'
// import { motion } from "framer-motion"
import Carosuel from '../Module/Carousel/Carosuel'
import { Typography, makeStyles } from '@material-ui/core'
import { HomeStyles } from './Style'
// import './Category.css'
const useStyles = makeStyles(theme =>({
    slider:{
        marginTop: '4rem',
    },
    slideLink:{
        marginLeft: '2rem',
    },
    linkBtn:{
        color: '#eee',
        padding: '0.75rem 2rem',
        fontSize: '24px',
        textDecoration: 'none',
        fontWeight: 600,
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        background:'#b40303',
        transition: 'all 0.5s ease',
        border: 'transparent',
        borderRadius: '10px',
        '&:hover':{
            background: '#8b0606',
        }
    }
}))

const data = [{
    id: 0,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 1,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 2,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 3,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 4,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 5,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 6,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
},{
    id: 7,
    mname: "React",
    discription: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
}];

function Category() {
    const classes = useStyles()
    const homeStyle = HomeStyles()

    return (
        <main>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={( homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                        Action
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={( homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                        Horror
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={( homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                        Adventure
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={( homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                            Romantic
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={(homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                        Bollywood
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            <div className={(classes.slider, homeStyle.slider)}>
                <div className={( homeStyle.sliderHeader)}>
                    <Typography variant="h4" component="h2">
                        Science Fiction
                    </Typography>
                    <div className={classes.slideLink}>
                        <Link to='/category/Action' className={classes.linkBtn}>All</Link>
                    </div>
                </div>
                <Carosuel SlideData={data} />
            </div>
            

        </main>
    )
}

export default Category
