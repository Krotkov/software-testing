import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this)
        this.dropState = this.dropState.bind(this)
        this.state = {name: ''}
    }

    changeName(newName) {
        this.setState({name: newName})
    }

    dropState() {
        this.setState({name: ''})
    }

    render() {

        let myState = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <Header userInfo={myState}
                            dropState={this.dropState}
                    />
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
