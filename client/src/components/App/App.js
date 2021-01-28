import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Header from '../Header/Header';
import SignIn from '../Authorisation/SignIn';
import SignUp from "../Authorisation/SignUp";
import Info from "../Info/Info";
import Phones from "../Phones/Phones";

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
                    <Route path='/register' component={() => <SignUp userInfo={myState}
                                                                     changeLogin={this.changeLogin}
                                                                     dropState={this.dropState}/>}/>
                    <Route path='/info' component={() => <Info userInfo={myState}/>}/>
                    <Route path='/phones' component={() => <Phones login={myState.login}/>}/>
                    <Redirect to='/info'/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
