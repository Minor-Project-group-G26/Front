import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Axios from 'axios';

const MyForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 650px;
    padding: 20px 40px 30px 40px;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -60%);
    font-family: 'Anton', sans-serif;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    transition: 0.5s ease;

    h1{
        margin: 0 auto;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        font-family: 'Fugaz One', cursive;
        color: #000;
        text-transform: uppercase;
    }

    @media screen and (max-width: 890px){
        width: 600px;
    }
    @media screen and (max-width: 800px){
        width: 550px;
    }
    @media screen and (max-width: 780px){
        width: 520px;
    }
    @media screen and (max-width: 750px){
        width: 500px;
    }
    @media screen and (max-width: 600px){
        width: 350px;
    }

`;

const Myinput = styled.input`
    display:block;
    font-family: 'Heebo', sans-serif;
    width: 100%;
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin:20px 0;
    padding: 20px;
    box-sizing: border-box;
    transition: 0.25s;
    &:focus{
        color: #444444;
    }

`
const MyButton = styled.input`
    font-family: 'Heebo', sans-serif;
    width: 100%;
    display:block;
    background-color: #020024;
    font-size: 1rem;
    border-radius: 5px;
    height: 35px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing:border-box;

    color: ${props => (props.primary ? 'violet' : '#00bfb6')};
    border: ${props =>
    props.primary ? '2px solid #040447' : '2px solid #00bfb6'};

&:hover {
    color: white;
    background-color: ${props =>
      props.primary ? '#040447' : '#00bfb6'};
  }

`;

function AddCast() {

    const [Cast, SetCast] = useState({
        cast:""
    });

    

    const CastSubmitHandler = async(e) =>{
        e.preventDefault();
        console.log(Cast)
        
        const newCast = new FormData();
        newCast.append('Name', Cast.cast);
        const res = await Axios({
            url: `http://127.0.0.1:5000/cast`, 
            data: newCast,
            method:'POST',
            headers: {'Content-Type': 'multipart/form-data'}
        });
        console.log(res);
    }

    useEffect(() => {
        
    },[Cast])

    return (
        <MyForm onSubmit={CastSubmitHandler}>
            <h1>Add New Cast</h1>
            <Myinput type="text" placeholder="Enter Cast Name" onChange={(e) => SetCast({...Cast, cast: e.target.value})} />
            <MyButton type="submit" value="Insert"></MyButton>
        </MyForm>
    )
}

export default AddCast