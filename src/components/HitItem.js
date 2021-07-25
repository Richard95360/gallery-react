import { Link } from 'react-router-dom'
import React from 'react';


const HitItem = (props) => {
        return (
          

            <div className={!props.details ?  'col-md-4 mt-2' : 'mt-2'} key={props.hit.id}>
            <div className="card">
                <div className="card-header">{props.hit.tags } 
                | {props.details === false?props.hit.webformatWidth:props.hit.imageWidth}
                 x {props.details === false?props.hit.webformatHeight:props.hit.imageHeight}</div>
                <div className="card-body ">
                    {
                       ( props.details ===false) ?
                        <img className="card-img" height={200} src={props.hit.webformatURL} alt="hit" />
                        :
                        <img  src={props.hit.largeImageURL} alt="imageLarge" />
                    }

                </div>
                <div>
                    {
                    props.details===false ?
                    <div className="m-2">
                        <Link  to={`/hitDetails/${props.hit.id} `} className="btn btn-success">Hit Details</Link>
                    </div>
                    :
                    <div>
                        <div className="row p-4">
                            <div className="col-auto">
                                <img src={props.hit.userImageURL} className="img-thumbnail" alt="user"/>
                            </div>
                            <div>
                                <ul className="nav nav-pills">
                                    <li className="list-group-item">View :<strong>{props.hit.views}</strong></li>
                                    <li className="list-group-item">Comments :<strong>{props.hit.comments}</strong></li>
                                    <li className="list-group-item">Download :<strong>{props.hit.downloads}</strong></li>
                                    <li className="list-group-item">Favorites :<strong>{props.hit.collections}</strong></li>
                                    <li className="list-group-item">Likes :<strong>{props.hit.likes}</strong></li>
                                </ul>
                            </div>  
                        </div>
                        <div className="m-2">
                            <Link className="btn btn-primary" to="/gallery">Back</Link>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
            
        );
    
}

export default HitItem;

