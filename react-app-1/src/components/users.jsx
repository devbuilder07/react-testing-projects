import { Component } from "react";

class User extends Component {
    constructor() {
        console.log('constructor');
        super();
        this.state = {
            users: [],
            searchField: '',
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(responce => responce.json())
            .then(users => this.setState(() => {
                return { users: users }
            },
                () => {
                    // console.log(this.state);
                }
            ));
    }

    // Search function
    onSearch = (event) => {
        let searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField }
        })
    }
    render() {
        console.log('render');
        let { users, searchField } = this.state;
        let { onSearch } = this;
        let filterUsers = users.filter((user) => {
            console.log('Calling data');
            return user.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div>
                <input type='search' className='search-box' placeholder='search users'
                    onChange={onSearch} />
                <p>User list</p>
                {
                    filterUsers.map((user, index) => {
                        return (
                            <h3 key={user.id}>{user.name}</h3>
                        )
                    })
                }
            </div>
        )
    }
}

export default User;