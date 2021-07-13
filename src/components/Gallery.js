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
             ? res.data.totalHits/this.state.pageSize : 1+res.data.totalHits/this.state.pageSize;
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
       
    this.getHits(keyword);
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

const Gallery = () => {

    

     const [pagination, setPagination] = useState({currentKeyword:'',
     currentPage:1,
     pageSize:10,
     totalPages:1,
     pages:[],
    })

    const [galleryState, setGalleryState] = useState({hits:[]})

    const [gallState,setGallState] = useState({ gallery:{ 
        currentKeyword:'',
        currentPage:1,
        pageSize:10,
        totalPages:1,
        pages:[],
    }})


     
 const getHits = () => {
     let url= 'https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&q='+gallState.gallery.currentKeyword
     
    axios.get(url)
    .then((res ) => {
     
     setGalleryState({
         hits: res.data.hits,
       
         
     })
     
    }).catch(err => {
        console.log(err);
    })
}

const getPaginate = () => {
    let url = 'https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&q='+pagination.currentKeyword+"&page="+pagination.currentPage+"&per_page="+pagination.pageSize;
    axios.get(url).then((res )=> {
    let totalP = (res.data.totalHits%pagination.pageSize === 0) ? (res.data.totalHits/pagination.pageSize ):( 1+res.data.totalHits/pagination.pageSize);
   setPagination({
       currentPage: totalP,
       pages:new Array(totalP).fill(0)
    
    })
    
     }).catch(err => {
       console.log(err);
   })

}

useEffect(() => {
   // getHits();
   
}, [])

useEffect(() => {
    
 getPaginate() 
    
}, [])


const setKeyword = (e) => {
    e.preventDefault();
   let  newCurrentKeyword = {...gallState.gallery.currentKeyword}
   newCurrentKeyword[e.target.name] = e.target.value
   setGallState({
       gallery: newCurrentKeyword
   })
}

const search = (e) => {
e.preventDefault();
  getHits();
}

 const getToPage = (page) => {  

setPagination({
    currentPage: page
});
getPaginate();
 }

 
    return (
        
        <div>
            <form onSubmit={search}>
                <div className="row m-2 p-2">
                    <div className="col">
                        <input 
                        type="text"
                        name="currentKeyword"
                        value={gallState.gallery.currentKeyword}
                        onChange={setKeyword}
                         className="form-control"
                         placeholder="keyword"
                          />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success" type="submit">Chercher</button>
                    </div>
                </div>
            </form>

            <div className="row">

            {
                
          
             galleryState.hits.map(hit => 
                
                <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">{hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}</div>
                            <div className="card-body">
                                <img className="card-img" height={200} src={hit.webformatURL} alt="img" />

                            </div>
                        </div>
                    </div>
                )
                
             } 
            </div>
                <>
                <ul className="nav nav-pills">

                    { 
                      pagination.pages.map((v,index) =>{

                       return  (<li>
                            <a className="btn btn-info m-1" onClick={() => getToPage(index+1)}>{index+1}</a>
                         </li>)
                         })
                        
                    } 
                </ul>
            </> 
        </div>

            
        
    
    );
};

export default Gallery;
 */