var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>Hello, {this.props.name}</h2>
            </div>
        )
    }
}

class App2 extends React.Component{
    render(){
        return (
            <div>
                <p>
                    {this.props.text}
                </p>
                <button>Submit</button>
            </div>
        )
    }
}

ReactDom.render(
    <App name="Pavan Kotehal Parameshwarappa"/>,
    document.getElementById('app')
)

ReactDom.render(
    <App2 text="test test test test test test test test test"/>,
    document.getElementById('app2')
)