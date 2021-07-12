import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const Counter = (props) => {
   
    const [useCount, setUseCount] = useState({ counter: 1 , list:[0]});

    const compute = (op) => {

        let sign = op==='+'?1:-1;

        if(useCount.counter === 1 && op ==="-"){
            sign = 0
        }
        
        let c = useCount.counter +sign;

        setUseCount({counter: c, list:new Array(c).fill(0) }) 
        //setUseCount({counter: c -1 }) 
    }

    return (
        <div className="card m-3">
            <div className="card-header">
                <strong>
                {props.title?props.title:'Default title'} :  {useCount.counter}
                </strong>

                </div>
                <div className="ml-auto">
                    <button onClick={() => compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={() => compute('-')} className="btn btn-primary m-2">-</button>
                </div>
            <div className="card-body">
                {
                    useCount.list.map((v,index) => {
                       return (
                        
                        <span key={index}>{index}
                       <img width={100} src={props.image?props.image:'images/profile.jpg'} alt="profile" /></span>
                       
                       )
                    })
                }
            </div>
            
        </div>
    );
};

export default Counter;
