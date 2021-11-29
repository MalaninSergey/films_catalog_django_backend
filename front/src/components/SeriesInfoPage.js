import React, { Component } from 'react'
import {Tag, Card, CardBody, CardFooter, CardHeader, Heading, Button, Paragraph, Image } from 'grommet'
import axios from 'axios';
import { useParams } from 'react-router';


const SeriesInfoPage = () =>{
    const {id} = useParams();
    const [data, setData] = React.useState("")
    React.useEffect(() => {
        const fetchData = async () => {
            const API_URL = 'http://localhost:8000';
            const url = `${API_URL}/catalog/series/${id}/`;
            const response = await  axios.get(url);
            console.log(response)
          setData(response.data);
        };
        fetchData();
      }, []);

      return(
          <h1>{data.name} 1111</h1>
      )
}

export default SeriesInfoPage;