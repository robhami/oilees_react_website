import React, {Component} from 'react';
import CardList from '../Components/Cardlist';
// import {users} from './users';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
 
class App extends Component {

    constructor () {
      super ()
      this.state = {
        users: [],
        searchfield: ''
      }
      // console.log(users);
    }
    
    componentDidMount() {

      fetch ('http://jsonplaceholder.typicode.com/users')
        .then (response => {
          return response.json();
        })
        .then(users => {
          this.setState({users: users});
          console.log('componentDidMount');
      });
    }

    onSearchChange = (event) =>{
          this.setState({searchfield: event.target.value});
           
    }

    render () {
      const {users, searchfield} =this.state;

       const filteredUsers = users.filter (user => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase());
          })

       // const filteredSkill = this.state.users.filter (skill => {
       //      return skill.job.toLowerCase().includes(this.state.searchfield.toLowerCase());
       //    })

       // console.log(filteredSkill);
       if (users.length ===0) {

          return <h1>Loading</h1>
         } else {


        return (
          <div className='tc'>
           <h1 className="f1">Oilees</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
           <CardList users={filteredUsers}/>
           </Scroll>
          </div>
        );
    }
  }
}
export default App;
