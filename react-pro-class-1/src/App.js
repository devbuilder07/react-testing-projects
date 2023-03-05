import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/cards-list';
import SearchBox from './components/search-box/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    }
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(responce => responce.json())
      .then(users => this.setState(() => {
        return { users: users }
      }));
  }

  // Search function
  onSearch = (event) => {
    let searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }
  render() {
    let { users, searchField } = this.state;
    let { onSearch } = this;
    let filterUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App-header'>
        <h1 className='main-title'>Users cards</h1>
        <SearchBox
          onChangHandler={onSearch}
          placeholder='Search users here...'
          className='search-box-1'
        />

        <CardList users={filterUsers} />
      </div>
    )
  }
}


export default App;
