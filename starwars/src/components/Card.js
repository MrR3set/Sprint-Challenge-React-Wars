import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
    let films = [];
    const [planet,setPlanet] = useState([]);
    // const [species, setSpecies] = useState();

    //get films
    useEffect(()=>{
        props.data.films.forEach(element => {
            axios.get(element).then(res=>{  
                films.push(res.data.title)
            }).catch(error=>console.log(error));
        });   
    },[])
    
    //get planet
    useEffect(()=>{
        axios.get(props.data.homeworld).then(res=>{  
            setPlanet(res.data.name)
         }).catch(error=>console.log(error));
    },[])
    
  return (
    <div className="card-wrapper">
      <Card>
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
  <CardSubtitle>From {planet}</CardSubtitle>
  <CardText>Gender: {props.data.gender}<br></br>DoB: {props.data.birth_year}<br></br>Height: {props.data.height}<br></br>Mass {props.data.mass} Units<br></br> <br></br>Hair color: {props.data.hair_color}<br></br>Skin color: {props.data.fair}<br></br>Eye color: {props.data.eye_color}</CardText>
  <CardText>Films: {films}</CardText>
 
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;