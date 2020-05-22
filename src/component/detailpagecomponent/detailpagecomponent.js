import React from 'react';

class DetailComponent extends React.Component{
    constructor(){
        super();

        this.state = {
                name:'',email:'',phone:'',profile:'' 
            
        }

        //this.handelChange = this.handelChange.bind(this);
        //this.handelSubmit = this.handelChange.bind(this);
    }

    handelChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div className="form-wrap">
                <form onSubmit={this.handelSubmit}>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handelChange}></input>
                    <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handelChange}></input>
                    <input type="text" placeholder="phone" name="phone" value={this.state.phone} onChange={this.handelChange}></input>
                    <input type="text" placeholder="profile" name="profile" value={this.state.profile} onChange={this.handelChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default DetailComponent;