import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Signup from './components/Signin/Signup'
import Homepage from './components/Homepage/Homepage'
import BgPoster from './login_bg.jpg'
import Signin from './components/Signin/Signin'
import Category from './components/Homepage/Category'
import Plan from './components/Plan/Plan'
import Profile from './components/Profile/Profile'
// import Admin from './components/Admin/Admin'
import Login from './components/Admin/Login'
import { makeStyles } from '@material-ui/core'
import CustomModal from './components/Module/Modal/CustomModal'


const useStyles = makeStyles(theme=>({
  '@global': {
    html: {
      WebkitFontSmoothing: 'auto',
    },
    span:{
        color:'#fff'
    }
  }
}))

function UserRoute() {

  const [LoginUser, setLoginUser] = useState(false);
  // const classes = useStyles()

  useEffect(() => {
    const token = localStorage.getItem('USER_TOKEN');
    const email = localStorage.getItem('USER_NAME');
    console.log(LoginUser);
    if(token && email){
      setLoginUser(true);
    }
    return ()=> {setLoginUser(false);}
  },[LoginUser])

  return (
    <Router>
      <div>
        <img className="background" src={BgPoster} alt="background" />
      </div>
        {/* <Login /> */}
        <Navbar LoginUser={LoginUser} />

        <Switch>
          <Route path='/' exact >
            {/* <Navbar /> */}
            <Homepage />
          </Route>
          <Route exact path='/category' >
            {/* <Navbar /> */}
            <Category />
          </Route>
          <Route exact path='/plan' >
            {/* <Navbar /> */}
            <Plan LoginUser={LoginUser} />
          </Route>
          <Route exact path='/user/signup'  >
            {/* <Navbar /> */}
            <Signup />
          </Route>
          <Route exact path='/user/signin' >
            {/* <Navbar /> */}
            <Signin />
          </Route>
          <Route exact path='/user/profile' >
            {/* <Navbar /> */}
            <Profile  />
          </Route>
          <Route exact path='/admin/login' >
            {/* <Navbar /> */}
            <Login  />
          </Route>
          
          <Route exact path='/modal' >
            <main><CustomModal /></main>
          </Route>
        </Switch>
      
      <Footer />
      
    </Router>
  );
}

export default UserRoute;
