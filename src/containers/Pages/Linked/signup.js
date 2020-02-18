import React from 'react'
class Signup extends React.Component {
      
constructor(props)
{
    super(props);
    this.state = {
      name:"",
       email:" ",
        password:" ",
        // password2:" ",
    }

    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
   
}
 onChangeHandler=(event)=>{
  const name=event.target.name;
    const email=event.target.email;
    const value=event.target.value;
    this.setState({
        [name]:value
    });
    }
    onSubmitHandler=(event)=>{
    event.preventDefault();
    // this.loggedIn=true;
    const user = {
      name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      // this.setState({loggedIn: '/admin'});
      console.log(user);
    }

  render() {
    return (
     <div className="container">
     <div className="row">
      <form>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
       <div className="form-group">
       <label>FirstName</label>
         <input type="text" name="name" className="form-control"  onChange={this.onChangeHandler} value={this.state.name}/>  
    
         <label>Email</label>
         <input type="text" name="email" className="form-control"  onChange={this.onChangeHandler} value={this.state.email}/>  
        </div>
         <label>Password</label>
         <input type="password" name="password" className="form-control"  onChange={this.onChangeHandler} value={this.state.password} />
     <button type="submit" value="Submit" className="btn btn-primary" onClick={this.onSubmitHandler}>Submit</button>
      </form>
    </div>
     </div>
    )
  }
}
export default Signup