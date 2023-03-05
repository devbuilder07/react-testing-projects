import { Component } from "react";

class C1 extends Component{
    constructor() {
        super();
        this.state = {
            name:'React js'
        }
    }
    render() {
        return (
            <div>
                <h6>This is a class component</h6>
                <p>Learning State Here</p>
                <p><span>Hello {this.state.name} !!!</span></p>
                <button onClick={() => {
                    this.setState(() => {
                        return {
                             name: 'Sayan'
                        }
                    },
                    () => {
                        console.log(this.state);
                    })
                }}>Change name</button>
            </div>
        )
    }
}

export default C1;