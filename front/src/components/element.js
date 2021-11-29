import React, { Component } from 'react'
import {Tag, Card, CardBody, CardFooter, CardHeader, Heading, Button, Paragraph, Image } from 'grommet'
import axios from 'axios';


export default class element extends Component {
    
    constructor(props){
        super(props)
        this.state={
            name: props.name,
            image: props.image,
            key: props.key,
            rating: props.rating,
            year: props.year,
            restrictions: props.restrictions,
            description: props.description,
            image: props.image,
            tags: props.tags,
            tags_names:[]
        }
    }

    componentDidMount(){
        console.log(this.state.tags)
        const series = [];
        const API_URL = 'http://localhost:8000';
        for(let t of this.state.tags){
            const url = `${API_URL}/catalog/tags/${t}/`;
            axios.get(url).then(response => { 
                series.push(response.data.name)
                this.setState({tags_names: series})
            })
        }
    }

    render() {
        const tags = this.state.tags_names.map(tag=>{
            return <Button margin="small" primary label={tag}/>
        })
            return(
            <Card  height="big" width="70%" background="light-1" margin="medium">
                <CardHeader pad="medium"><Heading>Имя: {this.state.name}</Heading></CardHeader>
                <CardBody pad="medium">
                    <Paragraph>Рейтинг: {this.state.rating}</Paragraph>
                    <Paragraph>Год выпуска: {this.state.year}</Paragraph>
                    <Paragraph>{this.state.restrictions}</Paragraph>
                    <Paragraph fill="true">{tags}</Paragraph>
                    <Paragraph alignSelf="center" fill="true">{this.state.description}</Paragraph>
                    <Image fit="contain" src={this.state.image} width="20%"></Image>
                </CardBody>
                <CardFooter pad={{horizontal: "small", vertical:"small"}} background="light-2">
                </CardFooter>
            </Card>
            )
    }
}


