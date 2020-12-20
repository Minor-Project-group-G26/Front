import React, { useState, useEffect } from 'react';
import styled, { css }  from "styled-components";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Axios from 'axios';


// function addClass() { 
//     var v = document.getElementById("mobile"); 
//     v.className.append("col-sm-4");
// } 

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin:10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;
const StyledFormWrapper = styled.div`
    margin: 0 0 40px 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;
const StyledForm = styled.form`

    margin:40px 30px;
    font-family: 'Heebo', sans-serif;
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

    .Up{
        padding-top: 20px;
    }
    h2 {
        text-transform: uppercase;
        font-family: 'Fugaz One', cursive;
        text-align: center;
        color: black;
    }
    .movieposter{
        padding-bottom:10px;
    }
    label.fontsize {
        font-size: 20px;
    }
    label.top {
        margin-top: 20px;
    }
    label.down{
        padding-bottom: 10px;
    }
    label.shift{
        text-align: center;
    }
`;

const Finput = styled.input.attrs({ type: 'file' })`
        display: block;
        width: 100%;
        font-size: 17px;
        position: relative;
        margin-bottom:20px;
        font-family: 'Heebo', sans-serif;    
`;

const StyledInput = styled.input`
    display:block;
    width: 100%;
    ${sharedStyles}
`;
const StyledButton = styled.button`
    display:block;
    width: 100%;
    background-color: #020024;
    font-size: 1rem;
    border-radius: 5px;
    height: 40px;
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

// const StyledFieldset = styled.fieldset`
//     border: 1px solid #ddd;
//     border-radius: 5px;
//     padding: 10px;
//     margin: 20px 0;

//     legend {
//         padding: 0 10px;
//     }
//     label {
//         font-family: 'Oswald', sans-serif;
//         font-size: 18px;
//     }
//     input {
//         margin-right: 10px;
//     }

// `;

const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;

`;

const StyledTextarea = styled.textarea.attrs({row:'50', cols:'40'})`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
`;



function AddMovie2() {
    
    const [Movie, SetMovie] = useState({
        movieName:"",
        moviePoster: null,
        movieLink: "",
        movieType: "",
        movieCast: "",
        movieBlurb: "",
        movieDr: "",
        moviePro: ""
    });

    const[Actor, SetActor] = useState();
    const[Director, SetDirector] = useState();
    const[Producer, SetProducer] = useState();
    const[Genres, SetGenres] = useState();

    const MovieSubmitHandler = async(e) =>{
        e.preventDefault();
        console.log(Movie)
        const boxes = document.querySelectorAll('.category');
        let Categoryselector= "";
        boxes.forEach((e)=>{
            if( e.Select){
                Categoryselector += e.target.value+','
            }
        })
        console.log(Categoryselector)
        const newMovie = new FormData();
        newMovie.append('Name', Movie.movieName);
        newMovie.append('Poster', Movie.moviePoster);
        newMovie.append('Link', Movie.movieLink);
        newMovie.append('Type', Movie.movieType);
        newMovie.append('Cast', Movie.movieCast);
        newMovie.append('Dr', Movie.movieDr);
        newMovie.append('Pro', Movie.moviePro);
        newMovie.append('Blurb', Movie.movieBlurb);
        const res = await Axios({
            url: `http://127.0.0.1:5000/movie`, 
            data: newMovie,
            method:'POST',
            headers: {'Content-Type': 'multipart/form-data'}
        });
        console.log(res);
    }

    useEffect(() => {
        
    },[Movie])
    

    useEffect(() => {
        fetch("http://localhost:5000/form1")
          .then(res => res.json())
          .then(
            (result1) => {
              SetActor(result1);
            }
          )
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/form2")
          .then(res => res.json())
          .then(
            (result2) => {
              SetDirector(result2);
            }
          )
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/form3")
          .then(res => res.json())
          .then(
            (result3) => {
              SetProducer(result3);
            }
          )
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/form4")
          .then(res => res.json())
          .then(
            (result4) => {
              SetGenres(result4);
            }
          )
      }, []);

    function customTheme(theme){
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#00bfb6',
                primary: '#020024',
            }, 
        };
    }

    

    return (
        <StyledFormWrapper>
            <StyledForm  onSubmit={MovieSubmitHandler}>
            <h2>Add New Movie</h2>
            <label className="fontsize" htmlFor="moviename">Name</label>
            <StyledInput placeholder="Enter Movie Name" type="text"  onChange={(e) => SetMovie({...Movie, movieName: e.target.value})} name="moviename" />

            <label className="movieposter fontsize" htmlFor="movieposter">Poster</label>
              
            <div>
            <Finput type="file" onChange={e => SetMovie({...Movie, moviePoster: e.target.files[0]})} accept="image/*" />
            </div>
            
            
            <label className="movielink fontsize" htmlFor="movielink">Link</label>
            <StyledInput placeholder="Movie URL" type="text" onChange={(e) => SetMovie({...Movie, movieLink: e.target.value})} name="movielink" />
            
            
            <label className="fontsize down" htmlFor="moviecategory">Category</label>
            <Select 
                components={makeAnimated()}
                options={Genres}
                theme={customTheme}
                placeholder="Select Category Name"
                noOptionsMessage={()=>"No Other Option :("}
                onChange={(selectedOption) => {
                    selectedOption.map(item =>item.value)
                    SetMovie({...Movie, movieType: selectedOption.map(item =>item.value).toString()})
                    console.log(`Category selected:`, selectedOption.map(item =>item.value).toString());
                  }}
                isSearchable
                isMulti
                
            />

            <label className="fontsize top" htmlFor="moviecast">Cast</label>
            <Select 
                components={makeAnimated()}
                options={Actor}
                theme={customTheme}
                placeholder="Select Category Name"
                noOptionsMessage={()=>"No Other Option :("}
                onChange={(selectedOption) => {
                    selectedOption.map(item =>item.value)
                    SetMovie({...Movie, movieCast: selectedOption.map(item =>item.value).toString()})
                    console.log(`Cast selected:`, selectedOption.map(item =>item.value).toString());
                  }}
                isSearchable
                isMulti
                
            />

           <div className='row Up'>

           <div className='col col-sm-6 col-xs-12'>
            <label className="fontsize" htmlFor="moviecast">Directors</label>
            <Select 
                components={makeAnimated()}
                options={Director}
                theme={customTheme}
                placeholder="Select Category Name"
                noOptionsMessage={()=>"No Other Option :("}
                onChange={(selectedOption) => {
                    selectedOption.map(item =>item.value)
                    SetMovie({...Movie, movieDr: selectedOption.map(item =>item.value).toString()})
                    console.log(`Director selected:`, selectedOption.map(item =>item.value).toString());
                  }}
                isSearchable
                isMulti
                
            />
            </div>

            <div  className='col col-md-6 col-sm-12'>
            <label className="fontsize" htmlFor="movieDipro">Producers</label>
            <Select 
                components={makeAnimated()}
                options={Producer}
                theme={customTheme}
                placeholder="Select Category Name"
                noOptionsMessage={()=>"No Other Option :("}
                onChange={(selectedOption) => {
                    selectedOption.map(item =>item.value)
                    SetMovie({...Movie, moviePro: selectedOption.map(item =>item.value).toString()})
                    console.log(`Producer selected:`, selectedOption.map(item =>item.value).toString());
                  }}
                isSearchable
                isMulti
                
            />
            </div>
           </div>

            <label className="fontsize Up" htmlFor="movieblurb">Blurb</label>
            <StyledTextarea placeholder="Movie Brief Here" row={100} cols={100} type="text"  onChange={(e) => SetMovie({...Movie, movieBlurb: e.target.value})} name="movieblurb"></StyledTextarea>
            
            <StyledError><p>Error message Here</p></StyledError>
            <StyledButton type="submit">Add Movie</StyledButton>       
        </StyledForm>
        </StyledFormWrapper>
    );
}

export default AddMovie2;
