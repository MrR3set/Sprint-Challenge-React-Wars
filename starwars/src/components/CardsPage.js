import React,{useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card"
import Pagination from "./Pagination"
import './StarWars.css';


//better in here
const App = () => {
    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);
    
    const pHandlerNext = () => {
        if(page>=data.count){
        }else{
            setPage(page+1);
        }
    }
    const pHandlerPrev = () => {
        if(page<=1){
        }else{
            setPage(page-1);
        }
    }

    console.log(page);


    useEffect(()=>{
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`).then(res=>{
        setData(res.data.results);
    }).catch(error=>console.log(error));
    },[page])
    
  return (

    <div>
        <div className="pages">
            <Pagination next={pHandlerNext} prev={pHandlerPrev}></Pagination>
        </div>
        <div className="cards-wrapper">
        {
            data.map(elem => {
                return <Card data={elem}></Card>
            })
        }
        </div>
    </div>
  );
}

export default App;
