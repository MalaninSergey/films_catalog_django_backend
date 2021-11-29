import  React, { Component } from 'react'
import axios from 'axios';
import {Box, TextInput} from 'grommet'
import Pelement from './pelement'


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


export class persons extends Component {
    

    constructor(props){
        super(props)
        this.onSearchChanges = this.onSearchChanges.bind(this);
        this.state = {
            loading: true,
            personsList : [],
            searchValues:''
        }
    }

    onSearchChanges(search){
        this.setState({searchValues: search});
    }

    componentDidMount(){
        const series = [];
        const API_URL = 'http://localhost:8000';
        const url = `${API_URL}/catalog/persons/`;
        axios.get(url).then(response => {
            this.setState({personsList: response.data})
            console.log(this.state)
        })
        
    }

    render() {
            let items=[]
        if(this.state.searchValues==''){
             items = this.state.personsList.map((item)=>{
                return (<Pelement name={item.name}
                    key={item.pk}
                    image={item.image}
                    year={item.dob}
                    description={item.description}
                    birthplace={item.birthplace}
                    bio={item.biography}/>)
                })
        }
        else{
            let arr =[]
            for(let item of this.state.personsList){
                console.log(item.name)
                if(item.name.startsWith(this.state.searchValues)){
                    arr.push(item)
                }
                else{continue}
            }
             items = arr.map((item)=>{
                return (<Pelement name={item.name}
                    key={item.pk}
                    image={item.image}
                    year={item.dob}
                    description={item.description}
                    birthplace={item.birthplace}
                    bio={item.biography}/>)
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

export default persons

