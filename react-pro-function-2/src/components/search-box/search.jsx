import './search.css';
const SearchBox = ({ className, placeholder, onChangHandler }) => {
    return (
        <div>
            <input type='search'
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangHandler}
            />
        </div>
    )
}

export default SearchBox;