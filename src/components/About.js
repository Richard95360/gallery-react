import React,{useState} from 'react';

const About = () => {

    const [ skillValue, setSkillValue] = useState('')

    const [skillState, setSkillState] = useState({skills:[
        {id:1, skill:'SoftWare Engineering'},
        {id:2, skill:'UI design'},
        {id:3, skill:'Machines learning'}
    ]}
)

    const [useStateContact] = useState(
        {

       
        title: 'Keep you smile',

        contact: {
        name:'Richard',
        email:'richard@toto.fr',
        profile: './images/profile.jpg'
    }
    
    }
)

const handleChange=(e)=> {
   
    setSkillValue([e.target.name]= e.target.value);
   
}

  const addSkill = (e) => {
    e.preventDefault();
    let skill={
        id:[...skillState.skills].pop().id+1,
        skill:skillValue
    }
    setSkillState({
      skills:[...skillState.skills, skill]
    })
    setSkillValue('')
}

  
const  onDelete = (skill) => {
    let index=skillState.skills.indexOf(skill)
    let listSkills = [...skillState.skills];
    listSkills.splice(index,1);
    setSkillState({
        skills:listSkills
    })
}
    return (
        <>
           
            <div className="card">
                <div className="card-header">
                <strong><label>{useStateContact.title}</label></strong>
                </div>

                <div className="row p-2">
                    <div className="col col-auto">
                        <img width={100}  src={useStateContact.contact.profile} alt="profile" />
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{useStateContact.contact.name}</li>
                            <li className="list-group-item">{useStateContact.contact.email}</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="card m-2">
                <div className="card-header">Skills : {skillValue}</div>
                <div className="card-body">
                    <form onSubmit={addSkill}>
                        <div className="row mb-2">
                           <div className="col">
                               <input
                                type="text" 
                                name="skill"
                                value={skillValue}
                                onChange={handleChange}
                                placeholder="New Skill"
                                className="p-1"
                                />
                           </div>

                           <div className="col col-auto">
                        <button className="btn btn-primary" type="submit">Add</button>
                           </div>
                        </div>
                    </form>
                    <table className="table">
                        <thead>
                        <tr><th>ID</th> <th>Skill</th><th></th></tr>

                        </thead>
                        <tbody>

                        {
                            skillState.skills.map((s, index) => {
                          return (
                             
                                <tr key={index}>
                                <td>{s.id}</td>
                                <td>{s.skill}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onDelete(s)}>X</button>
                                </td>
                              </tr>
                             
                             
                            
                            )})
                        }
                        </tbody>
                    </table>
                </div>

            </div>
            </>
        
    );
};

export default About; 
/* import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
                skillValue: '',
                title: 'Keep you smile',
        
                contact: {
                name:'Richard',
                email:'richard@toto.fr',
                profile: './images/profile.jpg'
            }, 
            skills:[
                {id:1, skill:'SoftWare Engineering'},
                {id:2, skill:'UI design'},
                {id:3, skill:'Machines learning'}
            ]
        
            
        }
    }

     handlechange = e => {


        this.setState({ skillValue : e.target.value });
  }
  
     addSkill = (e) => {
          e.preventDefault();
          let skill={
              id:[...this.state.skills].pop().id+1,
              skill:this.state.skillValue
          }
          this.setState({
            skills:[...this.state.skills, skill]
          })
    }

    onDelete = (skill) => {
      let index=this.state.skills.indexOf(skill)
      let listSkills = [...this.state.skills];
      listSkills.splice(index,1);
      this.setState({
          skills:listSkills
      })
  }
    
    render() {
        return (
            <div>
                  <>
            <div className="card">
                <div className="card-header">
                <strong><label>{this.state.title}</label></strong>
                </div>

                <div className="row p-2">
                    <div className="col col-auto">
                        <img width={100}  src={this.state.contact.profile} alt="profile"/>
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">{this.state.contact.name}</li>
                            <li className="list-group-item">{this.state.contact.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="card m-2">
                <div className="card-header">Skills : {this.state.skillValue}</div>
                <div className="card-body">
                    <form onSubmit={this.addSkill}>
                        <div className="row mb-2">
                           <div className="col">
                               <input
                                type="text" 
                                name="skill"
                                value={this.state.skillValue}
                                onChange={this.handlechange}
                                placeholder="New Skill"
                                className="p-1"
                                  />
                           </div>

                           <div className="col col-auto">
                        <button className="btn btn-primary" type="submit">Add</button>
                           </div>
                        </div>
                    </form>
                    <table className="table">
                        <tbody><tr><th>ID</th> <th>Skill</th></tr></tbody>
                        {
                            this.state.skills.map((s, index) => {
                          return (
                             <tbody key={index}>
                                 <tr>
                                <td>{s.id}</td>
                                <td>{s.skill}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() =>this.onDelete(s)}>X</button>
                                </td>
                              </tr>
                             </tbody>
                             
                            
                            )})
                        }
                    </table>
                </div>

            </div>
        
        </>
            </div>
        );
    }
}



export default About;  */

