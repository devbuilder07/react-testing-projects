import { Component } from "react";
import Card from "../card/card";
import './cards-list.css'
class CardList extends Component {
    render() {
        let { users } = this.props;
        return (
            <div className='card-list'>
                {
                    users.map((user) => {
                        let { id } = user;
                        return (
                            <Card user={user} key={id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList