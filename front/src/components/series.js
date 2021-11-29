import  React, { Component } from 'react'
import axios from 'axios';
import SeriesService from './SeriesService'
import {Box, TextInput} from 'grommet'
import Element from './element'


function handleChange(e, props) {
    props.onSearchChanges(e.target.value);
}

function Search(props) {
    const [value, setValue] = React.useState('');



    return (
      <TextInput
        placeholder="Search"
        value={props.searchs}
        onChange={event => handleChange(event, props)}
      />
    );
  }


export class series extends Component {
    

    constructor(props){
        super(props)
        this.onSearchChanges = this.onSearchChanges.bind(this);
        this.state = {
            loading: true,
            seriesList : [],
            searchValues:''
        }
    }

    onSearchChanges(search){
        this.setState({searchValues: search});
    }

    componentDidMount(){
        const series = [];
        const API_URL = 'http://localhost:8000';
        const url = `${API_URL}/catalog/series/`;
        axios.get(url).then(response => {
            this.setState({seriesList: response.data})
        })
    }

    render() {
        let items=[]
        if(this.state.searchValues==''){
             items = this.state.seriesList.map((item)=>{
                return (<Element name={item.name}
                            key={item.pk}
                            image={item.image}
                            rating={item.rating}
                            year={item.year}
                            restrictions={item.age_restrictions}
                            description={item.description}
                            image={item.image}
                            tags={item.tags}/>)
            })
        }
        else{
            let arr =[]
            for(let item of this.state.seriesList){
                console.log(item.name)
                if(item.name.startsWith(this.state.searchValues)){
                    arr.push(item)
                }
                else{continue}
            }
             items = arr.map((item)=>{
                return (<Element name={item.name}
                            key={item.pk}
                            image={item.image}
                            rating={item.rating}
                            year={item.year}
                            restrictions={item.age_restrictions}
                            description={item.description}
                            image={item.image}
                            tags={item.tags}/>)
            })
        }
            return (
            <Box align="center" alignContent="around" justify="around" direction="column" width="100%" pad="medium">
                <Search searchs={this.state.searchValues} onSearchChanges={this.onSearchChanges} />
                {items}     
            </Box>
            )
    }
}

export default series
