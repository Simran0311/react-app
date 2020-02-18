import React, { Component } from 'react';
import { Route ,Link} from 'react-router-dom';
import About from '../../containers/Pages/Linked/about';
import Contact from '../../containers/Pages/Linked/contact';
import ListWith from '../../containers/Pages/Linked/listwithus';
import Signup from '../../containers/Pages/Linked/signup';
import Login from '../../containers/Pages/Linked/login';
import classes from './PageLinks.module.css';
import SearchBox from '../../containers/SearchBox/SearchBox';


//import NavigationItem from '../NavigationItem/NavigationItem';

class pageLinks extends Component {
    render () {
        return (
           
            <div className="pageLinks">
                <div className={classes.PageLinks}> 
                    <header>
                    
                        <nav>
                        
                            <ul>
                        

                         <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link> 
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link> 
                            </ul>
                       

                        </nav>
        

                    </header>
                
                </div>        


                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/list-with-us" component={ListWith} />
                  <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                <Route exact path="/" component={SearchBox} />
            </div>
           
        );
    }
}

export default pageLinks;







// const search = () => (
//     <ul className={search}>
//         {/* <LineSplit /> */}

//         <NavigationItem link="/about">ABOUT US</NavigationItem>
//         <NavigationItem link="/contact">CONTACT US</NavigationItem>

     
//         <Route path="/about" component={About} />
//     </ul>  
  
// );


// export default search;

