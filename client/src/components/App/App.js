import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Header/Header';
import SignIn from '../Authorisation/SignIn';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeLogin = this.changeLogin.bind(this)
        this.dropState = this.dropState.bind(this)
        this.state = {login: ''}
    }

    changeLogin(newLogin) {
        this.setState({login: newLogin})
    }

    dropState() {
        this.setState({login: ''})
    }

    render() {

        let myState = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <Header userInfo={myState}
                            dropState={this.dropState}
                    />
                    <Route path='/login' component={() => <SignIn userInfo={myState}
                                                                  changeLogin={this.changeLogin}
                                                                  dropState={this.dropState}/>}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
