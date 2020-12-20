import React, { useState, useEffect } from 'react';
import * as TI from "react-icons/ti";
import styled from 'styled-components';

const Boss = styled.div`
    margin-left: 260px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 550px){
      margin-left: 70px;
      margin-right: 10px;
    }
`;

const Div1 = styled.div`
    margin-top: 0;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

`;



function DataDisplay() {

    const [items, setItems] = useState([]);
    useEffect(() => {
       fetch("http://localhost:5000")
         .then(res => res.json())
         .then(
           (result) => {
           console.log(result);
             setItems(result.userData);
           }
         )
     }, []);

    const Duser = items.map((data) => {
        return ( 
            
            <tbody>
            <tr>
            <th key={data.id} scope="row">{data.id}</th>
                <td><img style={{width:"100px", height:"100px", borderRadius:"70px", border: "1px solid black" }} src={data.url} alt={data.name} /></td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.numberOfOrders}</td>
                <td>{data.joinDate}</td>
                <td>{data.suscribed}</td>
                <td>
                  <button><TI.TiUserDelete /></button>&nbsp;&nbsp;&nbsp;
                  <button><TI.TiUserAdd /></button>
                </td>
            </tr>
            </tbody>

        );
      })

    return (
      <Boss>
        <Div1 className="table-responsive">
            <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Profile</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Join Date</th>
                <th scope="col">Subscribed</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            {Duser}
            </table>
        
        </Div1>
      </Boss>  
    )
}

export default DataDisplay
