import { Component } from "react";
import './card.css';
class Card extends Component {
    render() {
        let { id, name, email } = this.props.user;
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`users ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;