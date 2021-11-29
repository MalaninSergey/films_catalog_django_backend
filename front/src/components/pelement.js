import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Heading, Button, Paragraph, Anchor, Image } from 'grommet'
import {Favorite, ShareOption} from 'grommet-icons'
import { useLocation } from 'react-router-dom'

export default class pelement extends Component {
    
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
            birthplace: props.birthplace,
            bio: props.bio
        }
    }


    render() {
            return(
            <Card  height="big" width="70%" background="light-1" margin="medium">
                <CardHeader pad="medium"><Heading>Имя: {this.state.name}</Heading></CardHeader>
                <CardBody pad="medium">
                    <Paragraph>Год рождения: {this.state.year}</Paragraph>
                    <Paragraph>Место рождения: {this.state.birthplace}</Paragraph>
                    <Paragraph alignSelf="center" fill="true">{this.state.bio}</Paragraph>
                    <Image fit="contain" src={this.state.image} width="20%"></Image>
                </CardBody>
                <CardFooter pad={{horizontal: "small", vertical:"small"}} background="light-2">
                </CardFooter>
            </Card>
            )
    }
}