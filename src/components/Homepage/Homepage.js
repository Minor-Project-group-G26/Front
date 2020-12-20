import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import './Homepage.css';
import Carosuel from '../Module/Carousel/Carosuel';
import { Typography } from '@material-ui/core';
import Axios from 'axios'; 
import {HomeStyles} from './Style'


const MovieData = [{
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
}]

function Homepage() {
  const classes = HomeStyles()
  const [latestMovieData, setlatestMovieData] = useState([]);
  // const [hollywoodMovieData, sethollywoodMovieData] = useState([]);
  // const [trendingMovieData, settrendingMovieData] = useState([]);
  const [oldMovieData, setoldMovieData] = useState([]);

  const GetMovieData = async(Movie,type, limit) =>{
    try {
      const res = await Axios.get(`http://localhost:5000/movie`)
      console.log(MovieData);
      Movie(res.data);
      return true;
    } catch (error) {
      return false;    
    }
    
  }
  useEffect(() => {
    console.log(latestMovieData);
      setlatestMovieData(MovieData);
      // sethollywoodMovieData(GetMovieData('hollywood', 12));
      // settrendingMovieData(GetMovieData('trending', 12));
      GetMovieData(setoldMovieData,'old', 12);
      // console.log()
  },[])
  return (
    <main>
      <div className={classes.banner}>
        <div className="header center">
          <h1>Watch Unlimited Movies, Shows and many more</h1>
        </div>
        <div className="normal center">
          <h3>Watch your favorite movies and shows anywhere anytime anyplace </h3>
        </div>
        <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
          <div className={("center", classes.getStarted)}>
            <Link to='/user/signup' className={classes.getStartedBtn}>GET STARTED</Link>
          </div>
        </motion.div>

      </div>
      <div className={classes.slider}>
        <div className={classes.sliderHeader}>
        <Typography variant="h4" component="h2">
             Latest Movies
        </Typography>
        </div>
        <Carosuel SlideData={latestMovieData}  />
      </div>
      <div className={classes.slider}>
        <div className={classes.sliderHeader}>
        <Typography variant="h4" component="h2">
            Hollywood Movies
        </Typography>
        </div>
        <Carosuel SlideData={latestMovieData}  />
      </div>
      <div className={classes.slider}>
        <div className={classes.sliderHeader}>
        <Typography variant="h4" component="h2">
             Trending Movies
        </Typography>
        </div>
        <Carosuel SlideData={latestMovieData}  />
      </div>
      <div className={classes.slider}>
        <div className={classes.sliderHeader}>
        <Typography variant="h4" component="h2">
             Old Movies
        </Typography>
        </div>
        <Carosuel SlideData={oldMovieData}  />
      </div>
    </main>
  )
}

export default Homepage
