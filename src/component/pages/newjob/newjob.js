import React from 'react';
import './newjob.css'

class NewJob extends React.Component{
    constructor(){
        super();

        this.state = {
                company:'',experience:'',email:'',profile:'' 
            
        }

        //this.handelChange = this.handelChange.bind(this);
        //this.handelSubmit = this.handelChange.bind(this);
    }

    handelChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handelSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
    }

    render(){
        return(
            <div className="form-wrap">
                <form onSubmit={this.handelSubmit}>
                    <h3>Create new job</h3>
                    <input type="text" placeholder="company" name="company" value={this.state.name} onChange={this.handelChange}></input>
                    <input type="text" placeholder="experience" name="experience" value={this.state.email} onChange={this.handelChange}></input>
                    <input type="email" placeholder="email" name="email" value={this.state.phone} onChange={this.handelChange}></input>
                    <input type="text" placeholder="profile" name="profile" value={this.state.profile} onChange={this.handelChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default NewJob;