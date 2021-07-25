
import React,{useState} from 'react'

const SearchHitForm =  (props) =>  {
  
const [ keyWordValue, setKeyWordValue] = useState('')

 const setKeyword =(e) =>  {
       setKeyWordValue(e.target.value)
    }

 const doSearch = (e)  => {
        e.preventDefault();
      props.onSearch(keyWordValue);
    }    

        return (

            <form onSubmit={doSearch}>
            <div className="row m-2 p-2">
                <div className="col">
                    <input 
                    type="text"
                    //name="currentKeyword"
                    value={keyWordValue}
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
            
        )
    
}

export default SearchHitForm;


/* import React, { Component } from 'react'

class SearchHitForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keyWordValue:''
        }
    }

    setKeyword =(e) =>  {
       this.setState({
         keyWordValue: e.target.value
       })
    }

    doSearch = (e)  => {
        e.preventDefault();
      this.props.onSearch(this.state.keyWordValue);
    }    
    render() {

        return (

            <form onSubmit={this.doSearch}>
            <div className="row m-2 p-2">
                <div className="col">
                    <input 
                    type="text"
                    //name="currentKeyword"
                    value={this.state.keyWordValue}
                    onChange={this.setKeyword}
                     className="form-control"
                     placeholder="keyword"
                      />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success" type="submit">Chercher</button>
                </div>
            </div>
        </form>
            
        )
    }
}
*/

