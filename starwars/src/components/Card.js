import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
    console.log(props.data)
    const [films,setFilms] = useState([]);




  return (
    <div className="card-wrapper">
      <Card>
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>From PLANET</CardSubtitle>
  <CardText>Gender: {props.data.gender}<br></br>DoB: {props.data.birth_year}<br></br>Height: {props.data.height}<br></br>Mass {props.data.mass} Units<br></br> <br></br>Hair color: {props.data.hair_color}<br></br>Skin color: {props.data.fair}<br></br>Eye color: {props.data.eye_color}</CardText>
          <CardText>Display all the films</CardText>
          <CardText>More things</CardText>
          <CardText>Display all the films</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;