
import React, {Component} from 'react'

class ServerDebug extends Component {
    state = {
        text: ''
    }

    onClick = () => fetch('/test').then((res) => res.text()).then((text) => this.setState({text}))

    render() {
        const { text } = this.state
        
        return (
            <div>
                <button onClick={this.onClick}>
                    /test server debugging
                </button>

                <p>
                    {text}
                </p>
            </div>    
        )
    }
}

export default ServerDebug