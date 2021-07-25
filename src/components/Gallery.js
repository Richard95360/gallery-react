
import React, { Component } from 'react';
import axios from 'axios';

import SearchHitForm from './SearchHitForm';
import HitItem from './HitItem';


class Gallery extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hits:[],
             currentPage:1,
             pageSize:10,
             currentKeyword:'',
             totalPages:1,
             pages:[]
        }
    }
    componentDidMount() {
       // this.getHits()
    }
    

    getHits(keyword){
        let url = 'https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&q='
        +keyword+"&page="+this.state.currentPage+"&per_page="+this.state.pageSize;
        axios.get(url)
        .then((res) => {
            let totalP = (res.data.totalHits%this.state.pageSize === 0)
             ? res.data.totalHits/this.state.pageSize : 1+Math.floor(res.data.totalHits/this.state.pageSize);
            this.setState({
                hits:res.data.hits,
                totalPages: totalP,
                pages:new Array(totalP).fill(0),
                currentKeyword:keyword
            })
        }).catch(err => {
            console.log(err);
        })
    }

   

    search=(keyword)=>{
     
        this.setState({
            currentPage:1,
            pages:[]
        },() => {

            this.getHits(keyword);
        })
       
    }

    getToPage = (page) => {
      this.setState({
          currentPage: page
      },() => {

     this.getHits(this.state.currentKeyword);
      });
    }

    render() {
        return (
            <>
            <div>
                <ul className="nav nav-pills">

                    { 
                      this.state.pages.map((v,index) =>

                    <li key={index}>
                    <button  className={this.state.currentPage===index+1?'btn btn-info' : 'btn btn-link'} onClick={() => this.getToPage(index+1)}>{index+1}</button>
                    </li>
                         )
                        
                    } 
                </ul>
            </div> 
          
             <SearchHitForm onSearch={this.search} />
            <div className="row">
            {
             this.state.hits.map((hit,index) => 
                <HitItem key={index} hit={hit} details={false} />
               
                )
                
             } 
            </div>
            
            </>
        );
    }
}



export default Gallery;  

/* import axios from 'axios';
import React,{useState, useEffect} from 'react';
import SearchHitForm from './SearchHitForm';
import HitItem from './HitItem';

const Gallery = (props) => {

    
    const [gallery,setGallery] = useState(
        {

        hits:[],
        currentKeyword:'',
        currentPage:1,
        pageSize:10,
        totalPages:1,
        pages:[]
        
    } )

    useEffect(() => {
        //  getHits();
         
      }, [gallery])
      
    

  const  getHits=(keyword)=> {
        let url = 'https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&q='
        +keyword+"&page="+gallery.currentPage+"&per_page="+gallery.pageSize;
        axios.get(url)
        .then(res => {
            let totalP = (res.data.totalHits%gallery.pageSize === 0)
             ? res.data.totalHits/gallery.pageSize : 1+Math.floor(res.data.totalHits/gallery.pageSize);
            
            setGallery({
                hits:res.data.hits,
                totalPages: totalP,
                pages:new Array(totalP).fill(0),
                currentKeyword:keyword
            })
        }).catch(err => {
            console.log(err);
        })
    }

   

  const  search=(keyword)=>{
     
        setGallery({
            currentPage:1,
            pages:[]
        },() => {

            getHits(keyword);
        })
       
    }

  const  getToPage = (page) => {
      setGallery({
           page
      },() => {

         getHits(gallery.currentKeyword);
      });
    }

 
    return (
        <>
        <div>
        <ul className="nav nav-pills">

            { 
              gallery.pages.map((v,index) =>

            <li key={index}>
            <button  className={gallery.currentPage===index+1?'btn btn-info' : 'btn btn-link'} onClick={() => getToPage(index+1)}>{index+1}</button>
            </li>
                 )
                
            } 
        </ul>
    </div> 
      

     <SearchHitForm onSearch={search} />
      
    <div className="row">
    {
      gallery.hits.map((hit,index) =>  <HitItem key={index} hit={hit} details={false} />)
    } 


    </div>
    
      </>  
    
    );
};

export default Gallery;
 */