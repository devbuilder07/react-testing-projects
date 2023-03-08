import './card.css';
const Card = ({ user }) => {
    let { id, name, email } = user;
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`users ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;