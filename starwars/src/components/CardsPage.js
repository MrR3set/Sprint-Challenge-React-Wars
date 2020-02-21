import React,{useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card"
import './StarWars.css';


//better in here
const App = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
    axios.get("https://swapi.co/api/people").then(res=>{
        setData(res.data.results);
    }).catch(error=>console.log(error));
    },[])

  return (
    <div className="cards-wrapper">
        {
            data.map(elem => {
                return <Card data={elem}></Card>
            })
        }
    </div>
  );
}

export default App;
