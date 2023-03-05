import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/cards-list';
import SearchBox from './components/search-box/search';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((responce) => responce.json())
      .then((users) => setUsers(users));
  }, []);

  console.log({ searchField });
  // Search function
  const onSearch = (event) => {
    let searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  //Filter function
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

export default App;
