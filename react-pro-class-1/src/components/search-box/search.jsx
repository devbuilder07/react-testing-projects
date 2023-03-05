import { Component } from "react";
import './search.css';
class SearchBox extends Component {

    render() {
        return (
            <div>
                <input type='search'
                    className={`search-box ${this.props.className}`}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangHandler}
                />
            </div>
        )
    }
}

export default SearchBox;