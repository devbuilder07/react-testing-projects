import Card from "../card/card";
import './cards-list.css'

const CardList = ({ users }) => {
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

export default CardList