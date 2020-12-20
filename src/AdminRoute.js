import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "./Admin.css";
// import AddMovie from './components/Pages/AddMovie';
import AddMovie2 from './components/Admin/components/Pages/AddMovie2';
import EditMovie from './components/Admin/components/Pages/EditMovie';
import Login from './components/Admin/Login';
import LeftBar from './components/Admin/LeftMenu/LeftBar';
import BarGraph from './components/Admin/Testing/BarGraph';
import MovieData from './components/Admin/components/Pages/MovieData';
import DataDisplay from './components/Admin/components/Pages/DataDisplay';
import AddCategory from './components/Admin/components/Pages/AddCategory';
import AddDirector from './components/Admin/components/Pages/AddDirector';
import AddProducer from './components/Admin/components/Pages/AddProducer';
import AddCast from './components/Admin/components/Pages/AddCast';
import CommentList from './components/Admin/components/Pages/CommentList';



function AdminRoute() {
  return (
    <>   
      <Router>
      <LeftBar />
        <Switch>
                <Route path='/admin/login' exact component={Login} />
                <Route path='/admin/graph' exact component={BarGraph} />
                <Route path='/admin/movie/add' exact component={AddMovie2} />
                <Route path='/admin/movie/edit/:id' exact component={EditMovie} />
                <Route path='/admin/user/db' exact component={DataDisplay} />   
                <Route path='/admin/movie/db' exact component={MovieData} />   
                <Route path='/admin/movie/category' exact component={AddCategory} />   
                <Route path='/admin/movie/director' exact component={AddDirector} />   
                <Route path='/admin/movie/producer' exact component={AddProducer} />   
                <Route path='/admin/movie/cast' exact component={AddCast} />   
                <Route path='/admin/movie/commentslist' exact component={CommentList} />   
            </Switch>      
        </Router>     
    </> 
  );
}

export default AdminRoute;
