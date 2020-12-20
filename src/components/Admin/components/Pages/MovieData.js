import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';
import Modal from '../guarav/Modal';
import {Avatar} from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Axios from 'axios';
import Hell from '../guarav/Hell'
import EditMovie from './EditMovie';



const Boss = styled.div`
    margin-left: 260px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1200px){
      margin-left: 160px;
    }

    @media screen and (max-width: 1000px){
      margin-left: 100px;
    }

    @media screen and (max-width: 580px){
      margin-left: 100px;
    }

    @media screen and (max-width: 550px){
      margin-left: 70px;
    }
`;

const Div1 = styled.div`

    margin-top: 0;
    position: relative;
    width: 98%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

`;

const Div2 = styled.div`
  a{
    text-decoration:none;
  }

  .mobile{
    display: none;
  }
  position:fixed;
  right: 2rem;
  background: #b6b6b6;
  bottom: 2rem;
  width:220px;
  height:45px;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
  margin: 450px 20px 0 800px;
  border: 3px solid #00bfb6; // Neon Color
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);

  .laptop{
    position: relative;
    font-weight: 900;
    text-align: center;
    text-decoration: none;
    color: #000;
    z-index: 3;
    transition: all 0.5s ease;
  }
  &:before{
    content: "";
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    background:#2F4050;

  }
  &:before{
    left: -225px;
  }
  &:hover{
    .laptop{
      color: #00bfb6;
      transition: all 0.5s ease;
    }
  }
  &:hover:before{
    left:0;
    transition: all 0.5s ease;
  }

   @media (max-width: 1000px) {
    flex-direction: row;
    transition: 0.3s ease-in-out;
    margin-left: 780px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    .laptop{
      display: none;
    }
    .mobile{
      position: relative;
      display: block;
      font-weight: 900;
      font-size: 24px;
      margin-top: -5px;
      color: #fff;
    }
    &:hover{
      .mobile{
      color: #00bfb6;
      transition: all 0.5s ease-in-out;
      }
    }
  }


`;

const StyledTableCell = withStyles((theme) => ({
  head: {
      backgroundColor: '#2F4050',
      color: theme.palette.common.white,
  },
  body: {
      fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
      },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
      minwidth: 700,
      width: '90%',
      margin: '2rem',
      overflowX: 'scroll'
  },
  root: {
      width: '70%',
      display: 'flex',
      marginLeft:'20%',
      marginRight:'20%',
  },
  linkCell:{
    maxWidth: 200,
    wordBreak: 'break-all'
  },
  size:{
    width: 150
  }
});


function MovieData() {

    const classes = useStyles();
    const [items, setItems] = useState([]);
    useEffect(() => {
       fetch("http://localhost:5000/movie")
         .then(res => res.json())
         .then(
           (result) => {
           console.log(result);
             setItems(result);
           }
         )
     }, []);

    const Film = items.map((data) => {
        return (
                            <StyledTableRow key={data.Id}>
                                <StyledTableCell  scope="row" align="center">{data.Id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                  <Avatar 
                                  className="avatar" 
                                  style={{marginLeft:'auto',marginRight:'auto' ,verticalAlign: 'middle', width:'100px', height:'100px'}} 
                                  src={data.Poster!= null? `http://127.0.0.1:5000/get-file/MoviePoster/${data.Poster}`: ""} 
                                  alt={data.Title} />
                                </StyledTableCell>
                                <StyledTableCell  scope="row" align="center">{data.Title}</StyledTableCell>
                                <StyledTableCell className={classes.linkCell} scope="row" align="center">{data.Link}</StyledTableCell>
                                <StyledTableCell scope="row" align="center">{data.Category}</StyledTableCell>
                                <StyledTableCell className={classes.size} scope="row" align="center">
                                  <a href={"edit/"+data.Id}><button style={{marginRight:'10px', borderRadius:'5px'}} ><EditIcon/></button></a>
                                  <button style={{borderRadius: '5px'}}><DeleteForeverIcon /></button>
                                </StyledTableCell>
                                <StyledTableCell className={classes.size} scope="row" align="center"><Modal showModalData={data} /></StyledTableCell>
                            </StyledTableRow>
                        
        );
      })

    return (
      <Boss >
        
        <Div1 style={{overflowX:'auto'}}>
         
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
          <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">POSTER</StyledTableCell>
                            <StyledTableCell align="center">TITLE</StyledTableCell>
                            <StyledTableCell className={classes.linkCell} align="center">LINK</StyledTableCell>
                            <StyledTableCell align="center">CATEGORIES</StyledTableCell>
                            <StyledTableCell className={classes.size} align="center">ACTION</StyledTableCell>
                            <StyledTableCell className={classes.size} align="center">SEE MORE</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Film}
                    </TableBody>
          </Table>
            </TableContainer>
               
        </Div1>
        <Div2>
            <a href="/admin/movie/add"><span className="mobile">+</span></a>
            <a href="/admin/movie/add"><span className="laptop">ADD MOVIE</span></a>
            
        </Div2>
        
      </Boss>
    )
}

export default MovieData
