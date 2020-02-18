import React from 'react'
import './login.css';

class Login extends React.Component {
    
constructor(props)
{
    super(props);
    this.state = {
        firstName:" ",
        password:" ",
        // logged: null,
    }
    
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
   
}
 onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
        [name]:value
    });
    }
    onSubmitHandler=(event)=>{
    event.preventDefault();
    // this.loggedIn=true;
    const user = {
        firstName: this.state.firstName,
        password: this.state.password
      };
      this.setState({loggedIn: '/admin'});
      console.log(user);
    }

render()       
{
    // const {loggedIn} = this.state;
    //     if (loggedIn) return <Redirect to={loggedIn} />;
      
    return(
        <div className="container">
            <div className="row">
               
        <form className="col-sm-6" onSubmit={this.onSubmitHandler} >
        <h2>Login Page</h2>
            <div className="form-group">
                <label>FirstName</label>
                <input type="text" name="firstName" className="form-control"  onChange={this.onChangeHandler} value={this.state.firstName}/>  
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control"  onChange={this.onChangeHandler} value={this.state.password} />
         </div>
         <div className="button1">
        <button type="submit" value="Submit" className="btn btn-primary" >Submit</button>
        </div>
        </form>
        </div>
        </div>
   );
}
}
export default Login