import React, { Component } from 'react'
import axios from 'axios';
import HitItem from './HitItem';

class HitDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hit:null
        }
    }

    getHits(id){
    let url = "https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&id="+id;
    axios.get(url).then((res) => {
        this.setState({
            hit:res.data.hits[0]
           
        })
    }).catch((err => {
        console.log(err);
    }));
    
    
}

componentDidMount() {
  this.getHits(this.props.match.params.id)
}

    
    render() {

        if (this.state.hit !==null) 

        return (
           
        <HitItem hit={this.state.hit} details={true}/>
           
        );
        else {

            return (<div></div>)
        }
           
        
    }
}

export default HitDetails;  

/* import React,{useState,useEffect} from 'react';
import axios from 'axios';
import HitItem from './HitItem';

const HitDetails = (props) => {
    console.log(props);

    const [hit, setHitState] = useState({hit:null})



   const getHits=(id) => {
        let url =` https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&id=${id}`
        axios.get(url).then(res => {
            console.log(res.data);
            setHitState({
                hit:res.data.hits[0]
               
            })
        }).catch(err => {
            console.log(err);
        });
        
        
    }

useEffect(() => {
  getHits(props.match.params.id)
}, [])


    return (
        <div className="container">
         {  <HitItem hit={hit} details={true}/> }
        </div>
    );
};

export default HitDetails;   */