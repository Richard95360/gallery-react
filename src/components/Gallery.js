import axios from 'axios';
import React,{useState, useEffect} from 'react';

const Gallery = () => {

     const [paginate, setPaginate] = useState({currentKey:'',
     currentPage:1,
     pageSize:10,
     totalPages:1,
     pages:[]
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
    let url= 'https://pixabay.com/api/?key=19764607-f465de43e4c090ee2953701fa&q='+paginate.currentKey+"&page"+paginate.currentPage+"per_page"+paginate.pageSize
   axios.get(url)
   
   .then((res) => {
       let totalP = (res.data.totalHits%paginate.pageSize===0) ? res.data.totalHits/paginate.pageSize : 1+res.data.totalHits/paginate.pageSize;
    setPaginate({
        
      totalPages: totalP,
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

   let  newCurrentKeyword ={...gallState.gallery.currentKeyword}
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
   
 setPaginate({
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
             <div>
              
                <ul className="nav nav-pills">

              


                   {
                       
                        
                        paginate.pages.map((v,index) =>
                         <li key={index}>
                            <a className="btn btn-info m-1" onClick={() => getToPage(index+1)}>{index+1}</a>
                         </li>
                         ) 
                    } 
                
                

                </ul>
            </div> 

        </div>

            
        
    
    );
};

export default Gallery;
